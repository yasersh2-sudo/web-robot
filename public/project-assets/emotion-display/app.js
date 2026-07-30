const display = document.querySelector(".display");
const displayParams = new URLSearchParams(window.location.search);
document.documentElement.classList.toggle("preview", displayParams.get("preview") === "1");
const eyes = document.querySelectorAll(".eye");
const pupils = document.querySelectorAll(".pupil");
const mouth = document.querySelector(".mouth");
const mouthSpriteLayer = document.querySelector(".mouth-sprite-layer");
const emotionLabel = document.querySelector("#emotion-label");
const connectionLabel = document.querySelector("#connection-label");

let reconnectTimer = null;
let blinkTimer = null;
let talkingTimer = null;
let currentEmotion = "neutral";
let currentFocus = { x: 0, y: 0 };
let mouthSpriteDocument = null;
let pendingMouthSprite = "mouth_neutral";

const animeApi = window.anime || (typeof anime !== "undefined" ? anime : null);
const spriteCell = {
  width: 2816 / 6,
  height: 1325 / 5,
};

const allowedEmotions = new Set([
  "neutral",
  "happy",
  "listening",
  "talking",
  "preparation",
  "confused",
  "error",
]);

const emotionAliases = {
  preparing: "preparation",
  thinking: "preparation",
};

// The SVG asset is a tagged spritesheet: each mouth id still lives in its grid cell.
const mouthSprites = {
  mouth_a_ah: { row: 1, col: 1 },
  mouth_e: { row: 1, col: 2 },
  mouth_i: { row: 1, col: 3 },
  mouth_o: { row: 1, col: 4 },
  mouth_u: { row: 1, col: 5 },
  mouth_mbp: { row: 1, col: 6 },
  mouth_ld: { row: 2, col: 1 },
  mouth_fv: { row: 2, col: 2 },
  mouth_sz: { row: 2, col: 3 },
  mouth_t_th: { row: 2, col: 4 },
  mouth_kg: { row: 2, col: 5 },
  mouth_n_ng: { row: 2, col: 6 },
  mouth_neutral: { row: 3, col: 1 },
  mouth_slight_smile: { row: 3, col: 2 },
  mouth_big_smile: { row: 3, col: 3 },
  mouth_slight_frown: { row: 3, col: 4 },
  mouth_wide_frown: { row: 3, col: 5 },
  mouth_worried: { row: 3, col: 6 },
  mouth_laughing: { row: 4, col: 1 },
  mouth_shouting: { row: 4, col: 2 },
  mouth_talking_1: { row: 4, col: 3 },
  mouth_talking_2: { row: 4, col: 4 },
  mouth_chewing: { row: 4, col: 5 },
  mouth_surprised: { row: 4, col: 6 },
  mouth_biting_lip: { row: 5, col: 1 },
  mouth_whistling: { row: 5, col: 2 },
  mouth_tongue_out: { row: 5, col: 3 },
  mouth_thinking: { row: 5, col: 4 },
  mouth_yawning: { row: 5, col: 5 },
};

const emotionMouthSprites = {
  confused: "mouth_worried",
  error: "mouth_worried",
  happy: "mouth_big_smile",
  listening: "mouth_neutral",
  neutral: "mouth_neutral",
  preparation: "mouth_thinking",
  talking: "mouth_talking_1",
};

const talkingMouthSequence = Object.freeze([
  "mouth_talking_1",
  "mouth_a_ah",
  "mouth_talking_2",
  "mouth_e",
  "mouth_neutral",
  "mouth_o",
]);

function animate(targets, options) {
  if (!animeApi) {
    return null;
  }

  // Support anime.js v4's object API and older builds that expose a callable.
  if (typeof animeApi.animate === "function") {
    return animeApi.animate(targets, options);
  }

  return animeApi({
    targets,
    ...options,
  });
}

function clearBlinkTimer() {
  if (blinkTimer) {
    window.clearTimeout(blinkTimer);
    blinkTimer = null;
  }
}

function clearTalkingTimer() {
  if (talkingTimer) {
    window.clearInterval(talkingTimer);
    talkingTimer = null;
  }
}

function scheduleBlink(delay = 1200 + Math.random() * 2600) {
  clearBlinkTimer();

  // Randomized blinks make the face feel alive without moving the whole head.
  blinkTimer = window.setTimeout(() => {
    blink();
    scheduleBlink(1800 + Math.random() * 3600);
  }, delay);
}

function blink() {
  animate(eyes, {
    "--eye-scale-y": [1, 0.08, 1],
    duration: 170,
    ease: "inOut(3)",
  });
}

function resetMotionVars() {
  // Reset inline animation variables so the next emotion starts from neutral.
  eyes.forEach((eye) => {
    eye.style.setProperty("--eye-scale-y", "1");
    eye.style.setProperty("--eye-shift-x", "0px");
  });
  mouth.style.setProperty("--mouth-lift", "0px");
  mouth.style.setProperty("--mouth-scale-x", "1");
  mouth.style.setProperty("--mouth-scale-y", "1");
}

function clampFocus(value) {
  const numberValue = Number(value);

  if (!Number.isFinite(numberValue)) {
    return 0;
  }

  return Math.max(-1, Math.min(1, numberValue));
}

function normalizeEmotion(emotion) {
  const cleanEmotion = (emotion || "neutral").trim().toLowerCase();
  const canonicalEmotion = emotionAliases[cleanEmotion] || cleanEmotion;

  if (!allowedEmotions.has(canonicalEmotion)) {
    return "neutral";
  }

  return canonicalEmotion;
}

function focusToPupilOffset(focus) {
  const center = {
    x: 16,
    y: -3,
  };
  const range = {
    left: 56,
    right: 40,
    y: 48,
  };
  const xRange = focus.x < 0 ? range.left : range.right;

  return {
    x: `${center.x + focus.x * xRange}%`,
    y: `${center.y + focus.y * range.y}%`,
  };
}

function applyFocus(duration = 360) {
  if (currentEmotion === "error") {
    return;
  }

  const pupilOffset = focusToPupilOffset(currentFocus);

  animate(pupils, {
    "--pupil-x": pupilOffset.x,
    "--pupil-y": pupilOffset.y,
    duration,
    ease: "out(3)",
  });
}

function setLabel(emotion) {
  const labels = {
    confused: "Confused",
    error: "Error",
    happy: "Happy",
    listening: "Listening",
    neutral: "Neutral",
    preparation: "Preparation",
    talking: "Talking",
  };

  emotionLabel.textContent = labels[emotion] || emotion;
}

function mouthSpriteViewBox(spriteId) {
  const sprite = mouthSprites[spriteId] || mouthSprites.mouth_neutral;
  const x = (sprite.col - 1) * spriteCell.width;
  const y = (sprite.row - 1) * spriteCell.height;

  return `${x} ${y} ${spriteCell.width} ${spriteCell.height}`;
}

function setMouthSprite(spriteId) {
  const safeSpriteId = mouthSprites[spriteId] ? spriteId : "mouth_neutral";
  pendingMouthSprite = safeSpriteId;
  mouth.setAttribute("viewBox", mouthSpriteViewBox(safeSpriteId));

  if (!mouthSpriteDocument) {
    return;
  }

  const spriteGroup = mouthSpriteDocument.querySelector(`#${safeSpriteId}`);

  if (!spriteGroup) {
    return;
  }

  const clone = document.importNode(spriteGroup, true);
  clone.removeAttribute("id");
  mouthSpriteLayer.replaceChildren(clone);
}

function setMouthForEmotion(emotion) {
  setMouthSprite(emotionMouthSprites[emotion] || emotionMouthSprites.neutral);
}

async function loadMouthSprites() {
  try {
    const response = await fetch("./mouth_animations.svg");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const svgText = await response.text();
    mouthSpriteDocument = new DOMParser().parseFromString(svgText, "image/svg+xml");
    setMouthSprite(pendingMouthSprite);
  } catch (error) {
    console.error("Failed to load mouth spritesheet", error);
  }
}

function startTalkingMotion() {
  clearTalkingTimer();

  // Talking randomly picks a different viseme on every tick.
  let currentTalkingSprite = "mouth_talking_1";
  const pulse = () => {
    const options = talkingMouthSequence.filter(
      (spriteId) => spriteId !== currentTalkingSprite,
    );
    const nextSprite = options[Math.floor(Math.random() * options.length)];

    currentTalkingSprite = nextSprite;
    setMouthSprite(nextSprite);

    animate(mouth, {
      "--mouth-scale-x": [1, 1.04, 1],
      "--mouth-scale-y": [1, 0.96, 1],
      duration: 120,
      ease: "inOut(3)",
    });
  };

  pulse();
  talkingTimer = window.setInterval(pulse, 125);
}

function playEmotionReaction(emotion) {
  clearTalkingTimer();
  resetMotionVars();
  applyFocus(220);

  // Short one-shot reactions run when the emotion changes.
  const reactions = {
    happy: () => {
      animate(mouth, {
        "--mouth-scale-x": [1, 1.14, 1],
        "--mouth-scale-y": [1, 1.08, 1],
        duration: 520,
        ease: "out(4)",
      });
      animate(pupils, {
        "--pupil-y": ["-4%", "-10%", "-4%"],
        duration: 520,
        ease: "out(4)",
      });
    },
    listening: () => {
      animate(eyes, {
        "--eye-scale-y": [1, 1.06, 1],
        duration: 460,
        ease: "out(3)",
      });
    },
    preparation: () => {
      animate(eyes, {
        "--eye-shift-x": ["0px", "8px", "-5px", "4px"],
        duration: 980,
        ease: "inOut(2)",
      });
      animate(pupils, {
        "--pupil-x": ["16%", "34%", "6%", "26%"],
        "--pupil-y": ["-3%", "-8%", "2%", "-5%"],
        duration: 980,
        ease: "inOut(2)",
      });
      animate(mouth, {
        "--mouth-scale-x": [1, 0.88, 1.04, 1],
        duration: 900,
        ease: "inOut(2)",
      });
    },
    confused: () => {
      animate(eyes, {
        "--eye-shift-x": ["0px", "-8px", "6px", "-2px"],
        duration: 620,
        ease: "inOut(2)",
      });
      animate(pupils, {
        "--pupil-x": ["16%", "2%", "28%", "10%"],
        "--pupil-y": ["-3%", "8%", "-8%", "2%"],
        duration: 620,
        ease: "inOut(2)",
      });
    },
    error: () => {
      animate(eyes, {
        "--eye-scale-y": [1, 0.3, 1, 0.55, 1],
        duration: 420,
        ease: "inOut(5)",
      });
    },
    talking: () => {
      startTalkingMotion();
    },
  };

  if (reactions[emotion]) {
    reactions[emotion]();
  }
}

function setEmotion(emotion) {
  const cleanEmotion = normalizeEmotion(emotion);
  const hasChanged = cleanEmotion !== currentEmotion;

  currentEmotion = cleanEmotion;
  display.dataset.emotion = cleanEmotion;
  setMouthForEmotion(cleanEmotion);
  setLabel(cleanEmotion);

  if (hasChanged) {
    playEmotionReaction(cleanEmotion);
    if (cleanEmotion !== "preparation" && cleanEmotion !== "confused") {
      window.setTimeout(() => applyFocus(260), 760);
    }
  }
}

function setFocus(x, y) {
  currentFocus = {
    x: clampFocus(x),
    y: clampFocus(y),
  };

  applyFocus();
}

function connect() {
  const protocol = window.location.protocol === "https:" ? "wss" : "ws";
  const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

  socket.addEventListener("open", () => {
    connectionLabel.textContent = "connected";
  });

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);

    if (message.type === "emotion") {
      setEmotion(message.emotion);
    } else if (message.type === "focus") {
      setFocus(message.x, message.y);
    }
  });

  socket.addEventListener("close", () => {
    connectionLabel.textContent = "reconnecting";
    window.clearTimeout(reconnectTimer);
    reconnectTimer = window.setTimeout(connect, 1000);
  });
}

window.addEventListener("message", (event) => {
  const message = event.data || {};

  if (message.type === "emotion") {
    setEmotion(message.emotion);
  } else if (message.type === "focus") {
    setFocus(message.x, message.y);
  }
});

scheduleBlink();
loadMouthSprites();
setEmotion(displayParams.get("emotion") || "neutral");

if (window.parent === window) {
  connect();
} else {
  connectionLabel.textContent = "presentation";
  window.parent.postMessage({ type: "emotion-display-ready" }, "*");
}

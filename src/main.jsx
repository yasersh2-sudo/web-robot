import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  AudioLines,
  Bot,
  BrainCircuit,
  Cable,
  Database,
  Eye,
  Github,
  Hand,
  Languages,
  Layers3,
  Martini,
  Mic,
  Radar,
  RadioTower,
  Sparkles,
  Users,
  Volume2,
  Workflow,
  Zap,
} from 'lucide-react';
import { HeroScene } from './scenes/HeroScene.jsx';
import './styles.css';

const moduleIcons = {
  voice: Mic,
  stt: AudioLines,
  intent: BrainCircuit,
  tts: Volume2,
  gesture: Hand,
  drink: Eye,
  ros2: Cable,
  memory: Database,
  state: Workflow,
};

const languages = [
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'en', label: 'English', short: 'EN' },
];

const translations = {
  de: {
    nav: {
      workflow: 'Ablauf',
      modules: 'Module',
      architecture: 'Architektur',
      team: 'Team',
      language: 'Sprache',
    },
    scenes: ['Start', 'Demo', 'Überblick', 'Ablauf', 'Module', 'Showcase', 'Live', 'Projekt', 'Architektur', 'Tech', 'Highlights', 'Team'],
    scrollHint: {
      scene: 'Szene',
      inside: 'weiter in dieser Szene',
      next: 'nächste Szene',
    },
    hero: {
      eyebrow: 'Robotik trifft Gastfreundschaft',
      title: 'Barkeeper Robot',
      text: 'Ein interaktiver Voice- und Zeige-Demonstrator: Der Roboter erkennt Gäste, versteht Cola oder Wasser, antwortet per Sprache und löst über ROS2 die passende Zeigegeste aus.',
      primary: 'Ablauf ansehen',
      secondary: 'Module ansehen',
      visualLabel: 'Interaktive 3D-Szene des Roboter-Barkeepers',
      badges: ['Live Voice Demo', 'Cola / Wasser', 'ROS2 Events'],
      status: [
        ['Voice State', 'LISTENING'],
        ['DoA', '0° ± 35°'],
        ['Output', '/order_event'],
      ],
    },
    overview: {
      kicker: 'Projektüberblick',
      title: 'Ein realer Voice- und Zeige-Demonstrator für den Barkeeper-Roboter.',
      text: 'Der aktuelle Projektfokus ist klar definiert: Getränk erkennen, sprachlich reagieren und die passende Zeigegeste auslösen. Das System unterstützt Cola und Wasser, ermöglicht Small Talk, nutzt lokale Gästespeicherung und kommuniziert über ROS2 mit Kamera, Emotionen, Robot-Status und Motion-Logik.',
      metrics: [
        ['2', 'unterstützte Getränke'],
        ['13', 'Unit Tests bestanden'],
        ['ROS2', 'Topics & Events'],
      ],
    },
    workflow: {
      kicker: 'Vollständiger Ablauf',
      title: 'Vom ersten Kontakt bis zur intelligenten Roboterantwort.',
      steps: [
        ['Kamera erkennt Gast', 'Ein Camera-Event mit person_detected, person_id, Name und known_guest startet den Dialog.'],
        ['Begrüßung & Memory', 'Bekannte Gäste werden persönlich begrüßt, neue Gäste werden lokal in guest_memory.json angelegt.'],
        ['DoA prüft Richtung', 'Der ReSpeaker-Winkel muss stabil im erlaubten Bereich 0° ± 35° liegen.'],
        ['LiveMic nimmt Sprache auf', 'Das Mikrofon kalibriert Geräuschpegel, wartet auf Sprache und speichert temp.wav.'],
        ['STT + LLM verstehen', 'Whisper-3-Large transkribiert Deutsch, chat-medium erkennt Small Talk oder Cola/Wasser.'],
        ['ROS2 löst Aktion aus', 'Bei Cola/Wasser publiziert die Voice Node ein order_event und der Roboter zeigt auf das Getränk.'],
      ],
    },
    modules: {
      kicker: 'Systemmodule',
      title: 'Unabhängige Bausteine, koordiniert zu einem Robotik-Erlebnis.',
      items: [
        ['voice', 'VoiceNode', 'Steuert Zustände wie GREETING, LISTENING, PROCESSING, WAITING_ROBOT und READY.'],
        ['stt', 'STTModule', 'Nutzt whisper-3-large, deutsche Sprache und Filter gegen STT-Halluzinationen.'],
        ['intent', 'LLMModule', 'Nutzt chat-medium und gibt gültiges JSON mit intent, item, reply und state zurück.'],
        ['tts', 'TTSModule', 'Erzeugt Roboterantworten mit xtts-v2 und spielt response.wav lokal ab.'],
        ['gesture', 'DoA / ReSpeaker', 'Akzeptiert Sprache nur aus stabiler Richtung im Zielbereich 0° ± 35°.'],
        ['drink', 'Getränkelogik', 'Normalisiert cola, wasser und water; andere Getränke führen zu einer Klärung.'],
        ['ros2', 'VoiceRosNode', 'Publiziert /emotion und /order_event, hört /camera_event und /robot_status.'],
        ['memory', 'GuestMemory', 'Speichert Namen, known_guest, Gespräche, Lieblingsgetränke und last_seen in JSON.'],
        ['state', 'Camera Server', 'Streamt DepthAI-Kameraframes über TCP auf Port 9999 an Clients.'],
      ],
    },
    showcase: {
      kicker: 'Interaktives Showcase',
      title: 'Geschichtete Roboterintelligenz mit Echtzeit-Tiefe.',
      text: 'Die Website zeigt das System wie ein Live-Dashboard: Kamera erkennt einen Gast, DoA validiert die Richtung, STT und LLM verstehen den Wunsch, TTS spricht die Antwort und ROS2 gibt die Zeigeaktion an den Roboter weiter.',
      cards: ['Person erkannt: guest_7', 'Intent: order / item: cola', 'Status: WAITING_ROBOT'],
      label: '3D-inspiriertes Systemdashboard',
    },
    architecture: {
      kicker: 'Technischer Ablauf',
      title: 'Eine klare Architektur für den gesamten internen Prozess.',
      nodes: [
        ['/camera_event', 'Startet den Dialog mit person_detected, person_id, name und known_guest.'],
        ['/emotion', 'Veröffentlicht happy, listening, thinking, talking, confused, error oder neutral.'],
        ['/order_event', 'Sendet order_completed mit item cola oder wasser an das Robotersystem.'],
        ['/robot_status', 'Verarbeitet preparing, ready, unavailable und error als Rückmeldung.'],
        ['DialogueStatus', 'Im Zielsystem wird PREPARING + item als kompatibles Übergabesignal genutzt.'],
        ['Motion DRINK', 'Der Barkeeper-Tree löst die item-spezifische Zeigegeste aus.'],
      ],
    },
    tech: {
      kicker: 'Technologien',
      title: 'Aufgebaut mit modernen Robotik- und KI-Bausteinen.',
      items: ['Python', 'ROS2 Jazzy', 'DepthAI', 'PyAudio', 'Whisper-3-Large', 'chat-medium', 'XTTS-v2', 'JSON Memory', 'Docker Compose', 'Ruff', 'Pytest'],
    },
    highlights: {
      kicker: 'Projekt-Highlights',
      title: 'Was den Roboter intelligent, modular und lebendig wirken lässt.',
      items: [
        ['Persönliche Begrüßung', 'Bekannte Gäste wie Yaser werden mit Namen begrüßt und über last_seen wiedererkannt.'],
        ['Robuste Spracheingabe', 'LiveMic kalibriert Hintergrundgeräusche und STT filtert typische Halluzinationen.'],
        ['Kompatible Robotik', 'Die bestehende PREPARING-Schnittstelle bleibt erhalten, obwohl aktuell eine Zeigegeste im Fokus steht.'],
      ],
    },
    team: {
      kicker: 'Team',
      title: 'Bereich für die Projektmitglieder.',
      placeholder: 'Platzhalter für Teammitglied',
      roles: ['Robotik', 'KI-Logik', 'Voice UX', 'Integration'],
    },
    footer: {
      text: 'Premium-Robotik-Showcase für einen KI-Barkeeper-Demonstrator.',
      contact: 'Kontakt',
    },
    live: {
      kicker: 'Live-System',
      title: 'So fühlt sich der aktuelle Prototyp im Betrieb an.',
      cards: [
        ['Voice State', 'IDLE → GREETING → LISTENING → PROCESSING → WAITING_ROBOT'],
        ['Unterstützte Getränke', 'Cola und Wasser; water wird automatisch zu wasser normalisiert.'],
        ['Testbefehle', 'camera, robot, doa, doa_live, doa_stop, state, exit'],
      ],
      terminal: [
        'Befehl: doa → DoA-Winkel: 0',
        'Befehl: camera → {"person_detected":true,"person_id":"guest_7","name":"Yaser","known_guest":true}',
        'Roboter: Willkommen zurück, Yaser. Schön dich zu sehen.',
        'Gast: Wo ist die Cola?',
        'JSON: {"intent":"order","item":"cola","reply":"Hier ist die Cola.","state":"ORDER"}',
        'ROS2: /order_event → order_completed, item=cola',
      ],
    },
    simulator: {
      kicker: 'Dynamische Demo',
      title: 'Teste den Gesprächsfluss direkt auf der Website.',
      subtitle: 'Wähle ein Szenario und sieh, wie sich Voice State, LLM-Intent, Roboterantwort und ROS2-Event verändern.',
      options: [
        {
          id: 'cola',
          label: 'Cola',
          guest: 'Wo ist die Cola?',
          state: 'WAITING_ROBOT',
          intent: 'order',
          item: 'cola',
          reply: 'Hier ist die Cola.',
          emotion: 'talking',
          event: '/order_event: order_completed, item=cola',
          insight: ['Drink erkannt', 'item=cola', 'Zeigegeste vorbereitet'],
        },
        {
          id: 'wasser',
          label: 'Wasser',
          guest: 'Zeig mir bitte das Wasser.',
          state: 'WAITING_ROBOT',
          intent: 'order',
          item: 'wasser',
          reply: 'Hier ist das Wasser.',
          emotion: 'talking',
          event: '/order_event: order_completed, item=wasser',
          insight: ['Drink erkannt', 'item=wasser', 'Antwort kurz und direkt'],
        },
        {
          id: 'smalltalk',
          label: 'Small Talk',
          guest: 'Kennst du mich noch und was würdest du mir empfehlen?',
          state: 'CONTEXT_CHAT',
          intent: 'small_talk',
          item: 'favorite_drink: cola',
          reply: 'Willkommen zurück, Yaser. Beim letzten Mal wolltest du Cola sehen. Ich kann dir wieder Cola zeigen oder dir Wasser als leichte Alternative empfehlen.',
          emotion: 'friendly',
          event: '/memory: known_guest=true → /emotion: happy → dialogue_status=SMALL_TALK',
          insight: ['Gast wiedererkannt', 'Memory genutzt', 'Empfehlung formuliert'],
        },
      ],
      pipeline: ['Kamera', 'DoA', 'LiveMic', 'STT', 'LLM', 'TTS', 'ROS2', 'Zeigegeste'],
      labels: {
        guest: 'Gast sagt',
        reply: 'Roboter antwortet',
        state: 'Voice State',
        intent: 'Intent',
        item: 'Item',
        emotion: 'Emotion',
        event: 'Output',
        insight: 'Intelligente Entscheidung',
      },
    },
    realProject: {
      kicker: 'Aus deinem PyCharm-Projekt',
      title: 'Die Website nutzt jetzt die echten Projektmodule statt Platzhalter.',
      diagramTitle: 'Originale Projekt-Diagramme',
      files: [
        ['voice_module/voice_node.py', 'Gesprächsablauf, VoiceState, DoA-Check, Cola/Wasser-Logik und order_event.'],
        ['voice_module/llm_module.py', 'Prompt-Regeln, Small Talk, JSON-Ausgabe und chat-medium Integration.'],
        ['voice_module/stt_module.py', 'Whisper-3-Large, deutsche Transkription und Halluzinationsfilter.'],
        ['voice_module/tts_module.py', 'XTTS-v2, response.wav, afplay/ffplay/aplay und Humanisierung der Antworten.'],
        ['voice_module/guest_memory.py', 'JSON-Speicher für Gäste, Gespräche, favorite_drinks, created_at und last_seen.'],
        ['camera_server/camera_server.py', 'DepthAI-Kamera, BGR888p-Frames, TCP-Socket auf Port 9999.'],
      ],
    },
  },
  en: {
    nav: {
      workflow: 'Workflow',
      modules: 'Modules',
      architecture: 'Architecture',
      team: 'Team',
      language: 'Language',
    },
    scenes: ['Start', 'Demo', 'Overview', 'Flow', 'Modules', 'Showcase', 'Live', 'Project', 'Architecture', 'Tech', 'Highlights', 'Team'],
    scrollHint: {
      scene: 'Scene',
      inside: 'continue inside this scene',
      next: 'next scene',
    },
    hero: {
      eyebrow: 'Robotics meets hospitality',
      title: 'Barkeeper Robot',
      text: 'An interactive voice and pointing demonstrator: the robot recognizes guests, understands cola or water, replies by speech, and triggers the matching pointing gesture through ROS2.',
      primary: 'Explore flow',
      secondary: 'View modules',
      visualLabel: 'Interactive 3D robot bartender scene',
      badges: ['Live Voice Demo', 'Cola / Water', 'ROS2 Events'],
      status: [
        ['Voice State', 'LISTENING'],
        ['DoA', '0° ± 35°'],
        ['Output', '/order_event'],
      ],
    },
    overview: {
      kicker: 'Project overview',
      title: 'A real voice and pointing demonstrator for the robot bartender.',
      text: 'The current project focus is precise: recognize a drink, respond by voice, and trigger the correct pointing gesture. The system supports cola and water, keeps small talk, stores guest context locally, and communicates with camera, emotion, robot status, and motion logic through ROS2.',
      metrics: [
        ['2', 'supported drinks'],
        ['13', 'unit tests passed'],
        ['ROS2', 'topics & events'],
      ],
    },
    workflow: {
      kicker: 'Full workflow',
      title: 'From first approach to intelligent robot response.',
      steps: [
        ['Camera detects guest', 'A camera event with person_detected, person_id, name, and known_guest starts the dialogue.'],
        ['Greeting & memory', 'Known guests are greeted personally, new guests are stored in guest_memory.json.'],
        ['DoA checks direction', 'The ReSpeaker angle must be stable in the allowed range of 0° ± 35°.'],
        ['LiveMic records speech', 'The microphone calibrates noise, waits for speech, and stores temp.wav.'],
        ['STT + LLM understand', 'Whisper-3-Large transcribes German; chat-medium detects small talk or cola/water.'],
        ['ROS2 triggers action', 'For cola or water, the voice node publishes an order event and the robot points to the drink.'],
      ],
    },
    modules: {
      kicker: 'System modules',
      title: 'Independent parts, coordinated as one robotic experience.',
      items: [
        ['voice', 'VoiceNode', 'Controls GREETING, LISTENING, PROCESSING, WAITING_ROBOT, READY, and more.'],
        ['stt', 'STTModule', 'Uses whisper-3-large, German language hints, and filters hallucinated text.'],
        ['intent', 'LLMModule', 'Uses chat-medium and returns valid JSON with intent, item, reply, and state.'],
        ['tts', 'TTSModule', 'Creates robot speech with xtts-v2 and plays response.wav locally.'],
        ['gesture', 'DoA / ReSpeaker', 'Accepts speech only from a stable direction inside 0° ± 35°.'],
        ['drink', 'Drink logic', 'Normalizes cola, wasser, and water; unsupported drinks lead to clarification.'],
        ['ros2', 'VoiceRosNode', 'Publishes /emotion and /order_event, listens to /camera_event and /robot_status.'],
        ['memory', 'GuestMemory', 'Stores names, known_guest, conversations, favorite_drinks, and last_seen in JSON.'],
        ['state', 'Camera Server', 'Streams DepthAI camera frames over TCP on port 9999.'],
      ],
    },
    showcase: {
      kicker: 'Interactive showcase',
      title: 'Layered robot intelligence with real-time depth.',
      text: 'The website now behaves like a live dashboard: camera detects a guest, DoA validates the speaking direction, STT and LLM understand the request, TTS speaks the reply, and ROS2 forwards the pointing action.',
      cards: ['Person detected: guest_7', 'Intent: order / item: cola', 'Status: WAITING_ROBOT'],
      label: '3D style system dashboard',
    },
    architecture: {
      kicker: 'Technical flow',
      title: 'Readable architecture for the whole internal process.',
      nodes: [
        ['/camera_event', 'Starts dialogue with person_detected, person_id, name, and known_guest.'],
        ['/emotion', 'Publishes happy, listening, thinking, talking, confused, error, or neutral.'],
        ['/order_event', 'Sends order_completed with item cola or wasser to the robot system.'],
        ['/robot_status', 'Handles preparing, ready, unavailable, and error feedback.'],
        ['DialogueStatus', 'The target system uses PREPARING + item as compatible handoff signal.'],
        ['Motion DRINK', 'The barkeeper tree triggers the item-specific pointing gesture.'],
      ],
    },
    tech: {
      kicker: 'Technologies',
      title: 'Built around modern robotics and AI building blocks.',
      items: ['Python', 'ROS2 Jazzy', 'DepthAI', 'PyAudio', 'Whisper-3-Large', 'chat-medium', 'XTTS-v2', 'JSON Memory', 'Docker Compose', 'Ruff', 'Pytest'],
    },
    highlights: {
      kicker: 'Project highlights',
      title: 'What makes the robot feel intelligent, modular, and alive.',
      items: [
        ['Personal greeting', 'Known guests such as Yaser are greeted by name and recognized through last_seen.'],
        ['Robust voice input', 'LiveMic calibrates background noise and STT filters typical hallucinations.'],
        ['Compatible robotics', 'The existing PREPARING interface remains even though the current focus is pointing.'],
      ],
    },
    team: {
      kicker: 'Team',
      title: 'Contributor space for the project team.',
      placeholder: 'Team member placeholder',
      roles: ['Robotics', 'AI Logic', 'Voice UX', 'Integration'],
    },
    footer: {
      text: 'Premium robotics showcase for an AI bartender demonstrator.',
      contact: 'Contact',
    },
    live: {
      kicker: 'Live system',
      title: 'How the current prototype feels in operation.',
      cards: [
        ['Voice State', 'IDLE → GREETING → LISTENING → PROCESSING → WAITING_ROBOT'],
        ['Supported drinks', 'Cola and water; water is normalized to wasser.'],
        ['Test commands', 'camera, robot, doa, doa_live, doa_stop, state, exit'],
      ],
      terminal: [
        'Command: doa → DoA angle: 0',
        'Command: camera → {"person_detected":true,"person_id":"guest_7","name":"Yaser","known_guest":true}',
        'Robot: Welcome back, Yaser. Nice to see you.',
        'Guest: Where is the cola?',
        'JSON: {"intent":"order","item":"cola","reply":"Here is the cola.","state":"ORDER"}',
        'ROS2: /order_event → order_completed, item=cola',
      ],
    },
    simulator: {
      kicker: 'Dynamic demo',
      title: 'Test the dialogue flow directly on the website.',
      subtitle: 'Choose a scenario and watch Voice State, LLM intent, robot reply, and ROS2 event change.',
      options: [
        {
          id: 'cola',
          label: 'Cola',
          guest: 'Where is the cola?',
          state: 'WAITING_ROBOT',
          intent: 'order',
          item: 'cola',
          reply: 'Here is the cola.',
          emotion: 'talking',
          event: '/order_event: order_completed, item=cola',
          insight: ['Drink detected', 'item=cola', 'Pointing gesture prepared'],
        },
        {
          id: 'wasser',
          label: 'Water',
          guest: 'Please show me the water.',
          state: 'WAITING_ROBOT',
          intent: 'order',
          item: 'wasser',
          reply: 'Here is the water.',
          emotion: 'talking',
          event: '/order_event: order_completed, item=wasser',
          insight: ['Drink detected', 'item=wasser', 'Short direct reply'],
        },
        {
          id: 'smalltalk',
          label: 'Small Talk',
          guest: 'Do you remember me, and what would you recommend?',
          state: 'CONTEXT_CHAT',
          intent: 'small_talk',
          item: 'favorite_drink: cola',
          reply: 'Welcome back, Yaser. Last time you wanted cola. I can show you cola again, or recommend water as a lighter option.',
          emotion: 'friendly',
          event: '/memory: known_guest=true → /emotion: happy → dialogue_status=SMALL_TALK',
          insight: ['Guest recognized', 'Memory used', 'Recommendation formed'],
        },
      ],
      pipeline: ['Camera', 'DoA', 'LiveMic', 'STT', 'LLM', 'TTS', 'ROS2', 'Pointing'],
      labels: {
        guest: 'Guest says',
        reply: 'Robot replies',
        state: 'Voice State',
        intent: 'Intent',
        item: 'Item',
        emotion: 'Emotion',
        event: 'Output',
        insight: 'Intelligent decision',
      },
    },
    realProject: {
      kicker: 'From your PyCharm project',
      title: 'The website now uses your real project modules instead of placeholders.',
      diagramTitle: 'Original project diagrams',
      files: [
        ['voice_module/voice_node.py', 'Dialogue flow, VoiceState, DoA check, cola/water logic, and order_event.'],
        ['voice_module/llm_module.py', 'Prompt rules, small talk, JSON output, and chat-medium integration.'],
        ['voice_module/stt_module.py', 'Whisper-3-Large, German transcription, and hallucination filtering.'],
        ['voice_module/tts_module.py', 'XTTS-v2, response.wav, afplay/ffplay/aplay, and response humanization.'],
        ['voice_module/guest_memory.py', 'JSON storage for guests, conversations, favorite_drinks, created_at, and last_seen.'],
        ['camera_server/camera_server.py', 'DepthAI camera, BGR888p frames, TCP socket on port 9999.'],
      ],
    },
  },
};

function Navigation({ activeLanguage, onLanguageChange, t }) {
  return (
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Barkeeper Robot home">
        <span className="brand-mark"><Bot size={20} /></span>
        <span>Barkeeper Robot</span>
      </a>
      <nav>
        <a href="#workflow">{t.nav.workflow}</a>
        <a href="#modules">{t.nav.modules}</a>
        <a href="#architecture">{t.nav.architecture}</a>
        <a href="#team">{t.nav.team}</a>
      </nav>
      <div className="language-switcher" aria-label={t.nav.language}>
        <Languages size={16} />
        {languages.map((language) => (
          <button
            className={language.code === activeLanguage ? 'active' : ''}
            key={language.code}
            onClick={() => onLanguageChange(language.code)}
            type="button"
          >
            {language.short}
          </button>
        ))}
      </div>
    </header>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} />;
}

function AmbientDataField() {
  return (
    <div className="ambient-field" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => (
        <span key={index} style={{ '--i': index }} />
      ))}
    </div>
  );
}

function SceneProgress({ labels }) {
  const [activeScene, setActiveScene] = useState(0);
  const targetIds = ['top', 'scene-1', 'scene-2', 'workflow', 'modules', 'scene-5', 'scene-6', 'scene-7', 'architecture', 'scene-9', 'scene-10', 'team'];

  useEffect(() => {
    const scenes = Array.from(document.querySelectorAll('.scroll-scene'));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const nextScene = Number(visible.target.dataset.sceneIndex || 0);
          setActiveScene(nextScene);
          scenes.forEach((scene) => {
            scene.classList.toggle('active-scene', Number(scene.dataset.sceneIndex || 0) === nextScene);
          });
        }
      },
      { rootMargin: '-28% 0px -42% 0px', threshold: [0.2, 0.45, 0.7] }
    );

    scenes.forEach((scene) => observer.observe(scene));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="scene-progress" aria-label="Scroll scenes">
      {labels.map((label, index) => (
        <a
          aria-label={label}
          className={index === activeScene ? 'active' : ''}
          href={`#${targetIds[index]}`}
          key={label}
          title={label}
        >
          <span>{String(index + 1).padStart(2, '0')}</span>
          <em>{label}</em>
        </a>
      ))}
    </div>
  );
}

function SceneHint({ labels, t }) {
  const [activeScene, setActiveScene] = useState(0);
  const [hasMoreSceneContent, setHasMoreSceneContent] = useState(false);

  useEffect(() => {
    const updateHint = () => {
      const scenes = Array.from(document.querySelectorAll('.scroll-scene'));
      const viewportTop = window.scrollY + 8;
      const current = scenes.find((scene) => (
        scene.offsetTop <= viewportTop && scene.offsetTop + scene.offsetHeight > viewportTop
      )) || scenes.find((scene) => scene.classList.contains('active-scene')) || scenes[0];
      if (!current) return;

      const index = Number(current.dataset.sceneIndex || 0);
      const rect = current.getBoundingClientRect();
      setActiveScene(index);
      setHasMoreSceneContent(current.offsetHeight > window.innerHeight + 16 && rect.bottom > window.innerHeight + 28);
    };

    updateHint();
    window.addEventListener('scroll', updateHint, { passive: true });
    window.addEventListener('resize', updateHint);
    return () => {
      window.removeEventListener('scroll', updateHint);
      window.removeEventListener('resize', updateHint);
    };
  }, []);

  return (
    <div className={`scene-hint ${hasMoreSceneContent ? 'inside' : ''}`}>
      <span>{t.scrollHint.scene} {String(activeScene + 1).padStart(2, '0')}</span>
      <strong>{labels[activeScene]}</strong>
      <small>{hasMoreSceneContent ? t.scrollHint.inside : t.scrollHint.next}</small>
    </div>
  );
}

function FullPageScrollController() {
  useEffect(() => {
    let locked = false;

    const getCurrentSceneIndex = () => {
      const scenes = Array.from(document.querySelectorAll('.scroll-scene'));
      const viewportTop = window.scrollY + 8;
      const containingSceneIndex = scenes.findIndex((scene) => (
        scene.offsetTop <= viewportTop && scene.offsetTop + scene.offsetHeight > viewportTop
      ));

      if (containingSceneIndex >= 0) return containingSceneIndex;

      const viewportAnchor = window.scrollY + window.innerHeight * 0.35;

      return scenes.reduce((bestIndex, scene, index) => {
        const bestScene = scenes[bestIndex];
        const bestDistance = Math.abs(bestScene.offsetTop - viewportAnchor);
        const distance = Math.abs(scene.offsetTop - viewportAnchor);
        return distance < bestDistance ? index : bestIndex;
      }, 0);
    };

    const goToScene = (direction) => {
      const scenes = Array.from(document.querySelectorAll('.scroll-scene'));
      const currentIndex = getCurrentSceneIndex();
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), scenes.length - 1);

      if (nextIndex !== currentIndex) {
        locked = true;
        document.body.classList.remove('scene-shift-up', 'scene-shift-down', 'scene-is-changing');
        document.body.classList.add(direction > 0 ? 'scene-shift-down' : 'scene-shift-up', 'scene-is-changing');
        scenes[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.setTimeout(() => {
          locked = false;
          document.body.classList.remove('scene-is-changing');
        }, 850);
      }
    };

    const shouldStayInsideCurrentScene = (direction) => {
      const scenes = Array.from(document.querySelectorAll('.scroll-scene'));
      const currentScene = scenes[getCurrentSceneIndex()];
      if (!currentScene || currentScene.offsetHeight <= window.innerHeight + 16) return false;

      const rect = currentScene.getBoundingClientRect();
      const canScrollDownInsideScene = direction > 0 && rect.bottom > window.innerHeight + 24;
      const canScrollUpInsideScene = direction < 0 && rect.top < -24;
      return canScrollDownInsideScene || canScrollUpInsideScene;
    };

    const handleWheel = (event) => {
      if (window.innerWidth <= 960 || event.ctrlKey || Math.abs(event.deltaY) < 24) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      if (shouldStayInsideCurrentScene(direction)) return;

      event.preventDefault();
      if (!locked) goToScene(direction);
    };

    const handleKeyDown = (event) => {
      if (window.innerWidth <= 960 || locked) return;
      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) {
        if (shouldStayInsideCurrentScene(1)) return;
        event.preventDefault();
        goToScene(1);
      }
      if (['ArrowUp', 'PageUp'].includes(event.key)) {
        if (shouldStayInsideCurrentScene(-1)) return;
        event.preventDefault();
        goToScene(-1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}

function Hero({ t }) {
  return (
    <section className="hero section-band scroll-scene" data-scene-index="0" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><Sparkles size={16} /> {t.hero.eyebrow}</div>
        <div className="hero-badges">
          {t.hero.badges.map((badge) => <span key={badge}>{badge}</span>)}
        </div>
        <h1>{t.hero.title}</h1>
        <p>{t.hero.text}</p>
        <div className="hero-actions">
          <a className="button primary" href="#workflow">{t.hero.primary} <ArrowRight size={18} /></a>
          <a className="button secondary" href="#modules">{t.hero.secondary}</a>
        </div>
      </div>
      <div className="hero-stage" aria-label={t.hero.visualLabel}>
        <div className="hero-visual">
          <HeroScene />
        </div>
        <div className="hero-status-grid">
          {t.hero.status.map(([label, value]) => (
            <div className="hero-status" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSimulatorSection({ t }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = t.simulator.options[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % t.simulator.options.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [t.simulator.options.length]);

  return (
    <section className="section-band simulator-section scroll-scene" data-scene-index="1" id="scene-1">
      <div className="section-heading">
        <span className="section-kicker">{t.simulator.kicker}</span>
        <h2>{t.simulator.title}</h2>
        <p className="wide-copy">{t.simulator.subtitle}</p>
      </div>
      <div className="simulator-grid">
        <div className="scenario-panel">
          <div className="scenario-buttons">
            {t.simulator.options.map((option, index) => (
              <button
                className={index === activeIndex ? 'active' : ''}
                key={option.id}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="conversation-card">
            <span>{t.simulator.labels.guest}</span>
            <strong>{active.guest}</strong>
          </div>
          <div className="conversation-card robot">
            <span>{t.simulator.labels.reply}</span>
            <strong>{active.reply}</strong>
          </div>
          <div className="insight-strip" aria-label={t.simulator.labels.insight}>
            <span>{t.simulator.labels.insight}</span>
            <div>
              {active.insight.map((item) => <strong key={item}>{item}</strong>)}
            </div>
          </div>
        </div>
        <div className="state-console">
          <div className="state-orbit">
            <Bot size={34} />
            <span className="orbit-ring" />
            <span className="orbit-ring second" />
          </div>
          <div className="state-grid">
            <StatePill label={t.simulator.labels.state} value={active.state} />
            <StatePill label={t.simulator.labels.intent} value={active.intent} />
            <StatePill label={t.simulator.labels.item} value={active.item} />
            <StatePill label={t.simulator.labels.emotion} value={active.emotion} />
          </div>
          <div className="event-output">
            <span>{t.simulator.labels.event}</span>
            <code>{active.event}</code>
          </div>
        </div>
      </div>
      <div className="pipeline-strip">
        {t.simulator.pipeline.map((step, index) => (
          <div className="pipeline-step" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatePill({ label, value }) {
  return (
    <div className="state-pill">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Overview({ t }) {
  return (
    <section className="section-band overview scroll-scene" data-scene-index="2" id="scene-2">
      <div className="section-heading">
        <span className="section-kicker">{t.overview.kicker}</span>
        <h2>{t.overview.title}</h2>
      </div>
      <p className="wide-copy">{t.overview.text}</p>
      <div className="overview-grid">
        {t.overview.metrics.map(([value, label]) => <Metric key={label} value={value} label={label} />)}
      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function WorkflowSection({ t }) {
  return (
    <section className="section-band scroll-scene" data-scene-index="3" id="workflow">
      <div className="section-heading">
        <span className="section-kicker">{t.workflow.kicker}</span>
        <h2>{t.workflow.title}</h2>
      </div>
      <div className="flow-line">
        {t.workflow.steps.map(([title, text], index) => (
          <article className="flow-card reveal-card" key={title}>
            <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ModulesSection({ t }) {
  return (
    <section className="section-band scroll-scene" data-scene-index="4" id="modules">
      <div className="section-heading">
        <span className="section-kicker">{t.modules.kicker}</span>
        <h2>{t.modules.title}</h2>
      </div>
      <div className="module-grid">
        {t.modules.items.map(([iconKey, title, text]) => {
          const Icon = moduleIcons[iconKey];
          return (
            <article className="module-card reveal-card" key={title}>
              <span className="module-icon"><Icon size={22} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ShowcaseSection({ t }) {
  return (
    <section className="showcase section-band scroll-scene" data-scene-index="5" id="scene-5">
      <div className="showcase-panel">
        <div>
          <span className="section-kicker">{t.showcase.kicker}</span>
          <h2>{t.showcase.title}</h2>
          <p>{t.showcase.text}</p>
        </div>
        <div className="holo-stack" aria-label={t.showcase.label}>
          <div className="holo-card one"><Radar /> {t.showcase.cards[0]}</div>
          <div className="holo-card two"><BrainCircuit /> {t.showcase.cards[1]}</div>
          <div className="holo-card three"><Martini /> {t.showcase.cards[2]}</div>
        </div>
      </div>
    </section>
  );
}

function LiveSystemSection({ t }) {
  return (
    <section className="section-band live-system scroll-scene" data-scene-index="6" id="scene-6">
      <div className="section-heading">
        <span className="section-kicker">{t.live.kicker}</span>
        <h2>{t.live.title}</h2>
      </div>
      <div className="live-grid">
        <div className="signal-board">
          {t.live.cards.map(([title, text]) => (
            <article className="signal-card" key={title}>
              <span className="signal-dot" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="terminal-panel" aria-label="Projekt-Testablauf">
          <div className="terminal-bar">
            <span />
            <span />
            <span />
          </div>
          <pre>{t.live.terminal.join('\n')}</pre>
        </div>
      </div>
    </section>
  );
}

function ProjectEvidenceSection({ t }) {
  return (
    <section className="section-band project-evidence scroll-scene" data-scene-index="7" id="scene-7">
      <div className="section-heading">
        <span className="section-kicker">{t.realProject.kicker}</span>
        <h2>{t.realProject.title}</h2>
      </div>
      <div className="evidence-layout">
        <div className="evidence-files">
          {t.realProject.files.map(([file, text]) => (
            <article className="file-card" key={file}>
              <code>{file}</code>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="project-images">
          <span>{t.realProject.diagramTitle}</span>
          <img
            src="/project-assets/system-architecture.png"
            alt="Gesamtarchitektur des Barkeeper-Roboters mit ROS2-Nodes, Docker-Containern und Hardware"
          />
          <img src="/project-assets/voice-flow-diagram.svg" alt="Voice Module: Gesamter Gesprächsablauf" />
          <img src="/project-assets/drink-recognition-diagram.svg" alt="Voice Module: Getränkeerkennung und Reaktion" />
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection({ t }) {
  return (
    <section className="section-band scroll-scene" data-scene-index="8" id="architecture">
      <div className="section-heading">
        <span className="section-kicker">{t.architecture.kicker}</span>
        <h2>{t.architecture.title}</h2>
      </div>
      <div className="architecture-grid">
        {t.architecture.nodes.map(([title, text]) => (
          <article className="architecture-node" key={title}>
            <span />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechSection({ t }) {
  return (
    <section className="section-band tech-section scroll-scene" data-scene-index="9" id="scene-9">
      <div className="section-heading">
        <span className="section-kicker">{t.tech.kicker}</span>
        <h2>{t.tech.title}</h2>
      </div>
      <div className="tech-cloud">
        {t.tech.items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}

function HighlightsSection({ t }) {
  return (
    <section className="section-band highlights scroll-scene" data-scene-index="10" id="scene-10">
      <div className="section-heading">
        <span className="section-kicker">{t.highlights.kicker}</span>
        <h2>{t.highlights.title}</h2>
      </div>
      <div className="highlight-grid">
        <Feature icon={<RadioTower />} title={t.highlights.items[0][0]} text={t.highlights.items[0][1]} />
        <Feature icon={<Layers3 />} title={t.highlights.items[1][0]} text={t.highlights.items[1][1]} />
        <Feature icon={<Zap />} title={t.highlights.items[2][0]} text={t.highlights.items[2][1]} />
      </div>
    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <article className="feature-card">
      <span>{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function TeamSection({ t }) {
  return (
    <section className="section-band scroll-scene" data-scene-index="11" id="team">
      <div className="section-heading">
        <span className="section-kicker">{t.team.kicker}</span>
        <h2>{t.team.title}</h2>
      </div>
      <div className="team-grid">
        {t.team.roles.map((role) => (
          <article className="team-card" key={role}>
            <Users size={22} />
            <h3>{role}</h3>
            <p>{t.team.placeholder}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="footer">
      <div>
        <strong>Barkeeper Robot</strong>
        <p>{t.footer.text}</p>
      </div>
      <div className="footer-links">
        <a href="#" aria-label="GitHub placeholder"><Github size={18} /> GitHub</a>
        <a href="mailto:contact@example.com">{t.footer.contact}</a>
      </div>
    </footer>
  );
}

function App() {
  const [activeLanguage, setActiveLanguage] = useState('de');
  const t = translations[activeLanguage];

  return (
    <main>
      <ScrollProgress />
      <AmbientDataField />
      <Navigation activeLanguage={activeLanguage} onLanguageChange={setActiveLanguage} t={t} />
      <SceneProgress labels={t.scenes} />
      <SceneHint labels={t.scenes} t={t} />
      <FullPageScrollController />
      <Hero t={t} />
      <DemoSimulatorSection t={t} />
      <Overview t={t} />
      <WorkflowSection t={t} />
      <ModulesSection t={t} />
      <ShowcaseSection t={t} />
      <LiveSystemSection t={t} />
      <ProjectEvidenceSection t={t} />
      <ArchitectureSection t={t} />
      <TechSection t={t} />
      <HighlightsSection t={t} />
      <TeamSection t={t} />
      <Footer t={t} />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

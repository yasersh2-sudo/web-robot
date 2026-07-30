import React, { useEffect, useRef, useState } from 'react';
import './hardware-section.css';

/* Motor-Namen ggf. an JOINT_MAP in tinkerforge_driver.py angleichen. */
const SERVOS = [
  // Kopf
  { id: 'head_turn', name: 'Kopf drehen', motor: 'turn_head_motor', group: 'kopf', x: 192, y: 118, desc: 'Dreht den Kopf nach links und rechts – pibs „Nein“.', joints: ['head_turn'] },
  { id: 'head_tilt', name: 'Kopf nicken', motor: 'tilt_forward_motor', group: 'kopf', x: 208, y: 118, desc: 'Neigt den Kopf nach vorn und hinten – pibs „Ja“.', joints: ['head_tilt'] },
  // Arm links
  { id: 'shv_l', name: 'Schulter vertikal (L)', motor: 'shoulder_vertical_left', group: 'arm', x: 122, y: 148, desc: 'Hebt und senkt den ganzen Arm.', joints: ['shoulder_vertical_left'] },
  { id: 'shh_l', name: 'Schulter horizontal (L)', motor: 'shoulder_horizontal_left', group: 'arm', x: 140, y: 166, desc: 'Führt den Arm seitlich vom Körper weg und heran.', joints: ['shoulder_horizontal_left'] },
  { id: 'uar_l', name: 'Oberarm-Rotation (L)', motor: 'upper_arm_left_rotation', group: 'arm', x: 106, y: 206, desc: 'Rotiert den Oberarm um die eigene Achse.', joints: ['upper_arm_left_rotation'] },
  { id: 'elb_l', name: 'Ellbogen (L)', motor: 'elbow_left', group: 'arm', x: 104, y: 258, desc: 'Beugt und streckt den Unterarm.', joints: ['elbow_left'] },
  { id: 'lar_l', name: 'Unterarm-Rotation (L)', motor: 'lower_arm_left_rotation', group: 'arm', x: 100, y: 306, desc: 'Dreht den Unterarm – Handfläche hoch oder runter.', joints: ['lower_arm_left_rotation'] },
  { id: 'wri_l', name: 'Handgelenk (L)', motor: 'wrist_left', group: 'arm', x: 100, y: 352, desc: 'Kippt die Hand im Handgelenk.', joints: ['wrist_left'] },
  // Arm rechts
  { id: 'shv_r', name: 'Schulter vertikal (R)', motor: 'shoulder_vertical_right', group: 'arm', x: 278, y: 148, desc: 'Hebt und senkt den ganzen Arm.', joints: ['shoulder_vertical_right'] },
  { id: 'shh_r', name: 'Schulter horizontal (R)', motor: 'shoulder_horizontal_right', group: 'arm', x: 260, y: 166, desc: 'Führt den Arm seitlich vom Körper weg und heran.', joints: ['shoulder_horizontal_right'] },
  { id: 'uar_r', name: 'Oberarm-Rotation (R)', motor: 'upper_arm_right_rotation', group: 'arm', x: 294, y: 206, desc: 'Rotiert den Oberarm um die eigene Achse.', joints: ['upper_arm_right_rotation'] },
  { id: 'elb_r', name: 'Ellbogen (R)', motor: 'elbow_right', group: 'arm', x: 296, y: 258, desc: 'Beugt und streckt den Unterarm.', joints: ['elbow_right'] },
  { id: 'lar_r', name: 'Unterarm-Rotation (R)', motor: 'lower_arm_right_rotation', group: 'arm', x: 300, y: 306, desc: 'Dreht den Unterarm – Handfläche hoch oder runter.', joints: ['lower_arm_right_rotation'] },
  { id: 'wri_r', name: 'Handgelenk (R)', motor: 'wrist_right', group: 'arm', x: 300, y: 352, desc: 'Kippt die Hand im Handgelenk.', joints: ['wrist_right'] },
  // Hand links: Daumen-Opposition + 5 Finger
  { id: 'opp_l', name: 'Daumen-Opposition (L)', motor: 'thumb_left_opposition', group: 'hand', x: 120, y: 368, desc: 'Legt den Daumen gegenüber der Finger – die Basis jedes Griffs.', joints: ['thumb_left_opposition'] },
  { id: 'thu_l', name: 'Daumen (L)', motor: 'thumb_left_stretch', group: 'hand', x: 136, y: 368, doppel: true, desc: 'Beugt den Daumen über eine Sehne.', joints: ['thumb_left_proximal', 'thumb_left_distal'] },
  { id: 'ind_l', name: 'Zeigefinger (L)', motor: 'index_left_stretch', group: 'hand', x: 113.5, y: 403, doppel: true, desc: 'Ein Motor zieht über eine Sehne beide Fingerglieder gleichzeitig.', joints: ['index_left_proximal', 'index_left_distal'] },
  { id: 'mid_l', name: 'Mittelfinger (L)', motor: 'middle_left_stretch', group: 'hand', x: 103.5, y: 403, doppel: true, desc: 'Ein Motor zieht über eine Sehne beide Fingerglieder gleichzeitig.', joints: ['middle_left_proximal', 'middle_left_distal'] },
  { id: 'rin_l', name: 'Ringfinger (L)', motor: 'ring_left_stretch', group: 'hand', x: 93.5, y: 403, doppel: true, desc: 'Ein Motor zieht über eine Sehne beide Fingerglieder gleichzeitig.', joints: ['ring_left_proximal', 'ring_left_distal'] },
  { id: 'pin_l', name: 'Kleiner Finger (L)', motor: 'pinky_left_stretch', group: 'hand', x: 83.5, y: 403, doppel: true, desc: 'Ein Motor zieht über eine Sehne beide Fingerglieder gleichzeitig.', joints: ['pinky_left_proximal', 'pinky_left_distal'] },
  // Hand rechts
  { id: 'opp_r', name: 'Daumen-Opposition (R)', motor: 'thumb_right_opposition', group: 'hand', x: 280, y: 368, desc: 'Legt den Daumen gegenüber der Finger – die Basis jedes Griffs.', joints: ['thumb_right_opposition'] },
  { id: 'thu_r', name: 'Daumen (R)', motor: 'thumb_right_stretch', group: 'hand', x: 264, y: 368, doppel: true, desc: 'Beugt den Daumen über eine Sehne.', joints: ['thumb_right_proximal', 'thumb_right_distal'] },
  { id: 'ind_r', name: 'Zeigefinger (R)', motor: 'index_right_stretch', group: 'hand', x: 286.5, y: 403, doppel: true, desc: 'Ein Motor zieht über eine Sehne beide Fingerglieder gleichzeitig.', joints: ['index_right_proximal', 'index_right_distal'] },
  { id: 'mid_r', name: 'Mittelfinger (R)', motor: 'middle_right_stretch', group: 'hand', x: 296.5, y: 403, doppel: true, desc: 'Ein Motor zieht über eine Sehne beide Fingerglieder gleichzeitig.', joints: ['middle_right_proximal', 'middle_right_distal'] },
  { id: 'rin_r', name: 'Ringfinger (R)', motor: 'ring_right_stretch', group: 'hand', x: 306.5, y: 403, doppel: true, desc: 'Ein Motor zieht über eine Sehne beide Fingerglieder gleichzeitig.', joints: ['ring_right_proximal', 'ring_right_distal'] },
  { id: 'pin_r', name: 'Kleiner Finger (R)', motor: 'pinky_right_stretch', group: 'hand', x: 316.5, y: 403, doppel: true, desc: 'Ein Motor zieht über eine Sehne beide Fingerglieder gleichzeitig.', joints: ['pinky_right_proximal', 'pinky_right_distal'] },
];

const COMPONENTS = {
  oakd: {
    name: 'OAK-D Lite', tag: 'Komponente · Auge', mono: 'depthai 2.24.0 · USB 3',
    desc: 'Stereo-Tiefenkamera im Kopf. Sie erkennt Objekte nicht nur, sondern weiß auch, wie weit sie entfernt sind – publiziert 3D-Detektionen für die Bewegungsplanung.',
    listLabel: 'ROS-Anbindung', list: ['/vision/detected_objects_3d'],
  },
  pi: {
    name: 'Raspberry Pi 5', tag: 'Komponente · Gehirn', mono: 'Docker · ROS 2 Humble',
    desc: 'Sitzt im Rücken des Roboters. Hier läuft der komplette Software-Stack in Docker-Containern – Vision, Bewegungsplanung und der Tinkerforge-Treiber.',
    listLabel: 'Services', list: ['pib-stack', 'vision-node'],
  },
  bricklets: {
    name: '3× Servo Bricklet 2.0', tag: 'Komponente · Nervensystem', mono: 'UIDs: 2cLT · 2cN7 · 2cPh',
    desc: 'Tinkerforge-Platinen zwischen Pi und Motoren. Jedes Bricklet steuert bis zu zehn Servos – drei Platinen, 26 belegte Kanäle.',
    listLabel: 'Anbindung', list: ['brickd (TCP)', 'PWM → Servo'],
  },
};

const GROUP_LABEL = { kopf: 'Kopf', arm: 'Arm', hand: 'Hand' };
const TOUR = [
  { type: 'comp', id: 'oakd' }, { type: 'comp', id: 'pi' }, { type: 'comp', id: 'bricklets' },
  ...SERVOS.map((s) => ({ type: 'servo', id: s.id })),
];

function ServoMarker({ servo, active, dimmed, grouped, onSelect }) {
  const r = servo.group === 'hand' ? 4 : 6;
  return (
    <g
      className={`hw-servo${active ? ' active' : ''}${dimmed ? ' dim' : ''}${grouped ? ' grouped' : ''}`}
      role="button"
      tabIndex="0"
      aria-label={servo.name}
      onClick={() => onSelect({ type: 'servo', id: servo.id })}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSelect({ type: 'servo', id: servo.id }); } }}
    >
      <circle className="ring" cx={servo.x} cy={servo.y} r={r + 3} />
      <circle className="dot" cx={servo.x} cy={servo.y} r={r} />
    </g>
  );
}

export function HardwareSection({ sceneIndex = 8 }) {
  const tabs = ['01 · Anatomie', '02 · Signalkette', '03 · Knifflige Details'];
  const [activePage, setActivePage] = useState(0);
  const [selected, setSelected] = useState({ type: 'comp', id: 'oakd' });
  const [filter, setFilter] = useState('all');
  const [tourOn, setTourOn] = useState(true);
  const tourIndex = useRef(-1);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setTourOn(false);
  }, []);

  useEffect(() => {
    if (!tourOn || activePage !== 0) return undefined;
    const step = () => {
      tourIndex.current = (tourIndex.current + 1) % TOUR.length;
      setSelected(TOUR[tourIndex.current]);
    };
    step();
    const timer = window.setInterval(step, 2600);
    return () => window.clearInterval(timer);
  }, [tourOn, activePage]);

  const userSelect = (sel) => { setTourOn(false); setSelected(sel); };
  const selectedServo = selected.type === 'servo' ? SERVOS.find((s) => s.id === selected.id) : null;
  const selectedComp = selected.type === 'comp' ? COMPONENTS[selected.id] : null;

  const compProps = (id) => ({
    className: `hw-comp${selected.type === 'comp' && selected.id === id ? ' active' : ''}`,
    role: 'button',
    tabIndex: '0',
    onClick: () => userSelect({ type: 'comp', id }),
    onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); userSelect({ type: 'comp', id }); } },
  });

  return (
    <section className="section-band hw-section scroll-scene" data-scene-index={sceneIndex} id="hardware">
      <div className="hw-header">
        <div>
          <span className="section-kicker">PIB_TINKERFORGE · HARDWARE &amp; MOTORSTEUERUNG</span>
          <h2>26 Motoren. 36 Gelenke. Ein Treiber.</h2>
        </div>
        <p>pibs Muskeln und Nerven: 26 Tinkerforge-Servos an drei Bricklets, angesteuert über unseren eigenen ROS&nbsp;2-Treiber. Klick dich durch die Anatomie.</p>
        <div className="hw-tags"><code>ROS 2</code><code>Tinkerforge</code><code>26 Servos</code></div>
      </div>

      <div className="hw-facts">
        <article><span>Servomotoren</span><code>26</code></article>
        <article><span>Bewegte Gelenke</span><code>36</code></article>
        <article><span>Servo-Bricklets</span><code>3</code></article>
        <article className="live"><span>/joint_states</span><code><i /> 50 Hz</code></article>
      </div>

      <div className="hw-tabs" role="tablist" aria-label="Hardware-Dokumentation">
        {tabs.map((tab, index) => (
          <button className={activePage === index ? 'active' : ''} key={tab} onClick={() => setActivePage(index)} role="tab" aria-selected={activePage === index} type="button">{tab}</button>
        ))}
      </div>

      <div className="hw-panel">
        {activePage === 0 && (
          <div className="hw-anatomy">
            <figure className="hw-stage">
              <div className="hw-stage-status"><span><i /> SERVO MAP</span><code>{tourOn ? 'AUTO-TOUR' : 'MANUELL'}</code></div>
              <svg viewBox="0 0 400 470" xmlns="http://www.w3.org/2000/svg" aria-label="Schemazeichnung des pib-Oberkörpers mit Servo-Positionen">
                {/* Kabel Bricklets → Regionen */}
                <path className="hw-cable" d="M150,225 C120,235 108,240 106,252" />
                <path className="hw-cable" d="M165,205 C180,170 190,150 196,132" />
                <path className="hw-cable" d="M190,230 C240,262 282,238 292,208" />

                {/* Kopf */}
                <rect className="hw-bone" x="156" y="18" width="88" height="90" rx="30" />
                {/* Hals */}
                <rect className="hw-bone thin" x="189" y="106" width="22" height="26" rx="7" />
                {/* Schulterkappen */}
                <circle className="hw-bone thin" cx="124" cy="152" r="16" />
                <circle className="hw-bone thin" cx="276" cy="152" r="16" />
                {/* Torso: schmal, mit Taille wie beim echten pib */}
                <path className="hw-bone" d="M152,130 L248,130 Q276,134 280,162 L271,314 Q269,334 249,336 L151,336 Q131,334 129,314 L120,162 Q124,134 152,130 Z" />
                {/* Brust-Naht */}
                <path className="hw-seam" d="M200,136 L200,330" />
                <path className="hw-seam" d="M132,178 Q200,196 268,178" />

                {/* Arme links: Oberarm, Ellbogen, Unterarm, Handgelenk */}
                <rect className="hw-bone thin" x="92" y="162" width="28" height="96" rx="13" />
                <circle className="hw-bone thin" cx="104" cy="259" r="9" />
                <rect className="hw-bone thin" x="88" y="264" width="24" height="86" rx="11" />
                <circle className="hw-bone thin" cx="100" cy="353" r="7" />
                {/* Hand links */}
                <rect className="hw-bone thin" x="78" y="358" width="44" height="42" rx="10" />
                <rect className="hw-bone thin" x="80" y="402" width="7" height="24" rx="3.5" />
                <rect className="hw-bone thin" x="90" y="402" width="7" height="30" rx="3.5" />
                <rect className="hw-bone thin" x="100" y="402" width="7" height="28" rx="3.5" />
                <rect className="hw-bone thin" x="110" y="402" width="7" height="22" rx="3.5" />
                <rect className="hw-bone thin" x="118" y="364" width="24" height="9" rx="4.5" />

                {/* Arme rechts */}
                <rect className="hw-bone thin" x="280" y="162" width="28" height="96" rx="13" />
                <circle className="hw-bone thin" cx="296" cy="259" r="9" />
                <rect className="hw-bone thin" x="288" y="264" width="24" height="86" rx="11" />
                <circle className="hw-bone thin" cx="300" cy="353" r="7" />
                {/* Hand rechts */}
                <rect className="hw-bone thin" x="278" y="358" width="44" height="42" rx="10" />
                <rect className="hw-bone thin" x="313" y="402" width="7" height="24" rx="3.5" />
                <rect className="hw-bone thin" x="303" y="402" width="7" height="30" rx="3.5" />
                <rect className="hw-bone thin" x="293" y="402" width="7" height="28" rx="3.5" />
                <rect className="hw-bone thin" x="286" y="402" width="7" height="22" rx="3.5" />
                <rect className="hw-bone thin" x="258" y="364" width="24" height="9" rx="4.5" />

                {/* Komponenten */}
                <g {...compProps('oakd')} aria-label="OAK-D Lite Kamera">
                  <rect className="hw-visor" x="168" y="44" width="64" height="44" rx="14" />
                  <circle className="hw-eye" cx="186" cy="62" r="5" />
                  <circle className="hw-eye" cx="214" cy="62" r="5" />
                  <text x="200" y="80">OAK-D</text>
                </g>
                <g {...compProps('pi')} aria-label="Raspberry Pi 5">
                  <rect className="dashed" x="208" y="198" width="62" height="52" rx="6" />
                  <text x="239" y="220">RASPBERRY</text>
                  <text x="239" y="234">PI 5</text>
                </g>
                <g {...compProps('bricklets')} aria-label="Drei Servo-Bricklets 2.0">
                  <rect x="132" y="198" width="58" height="14" rx="3" />
                  <rect x="132" y="218" width="58" height="14" rx="3" />
                  <rect x="132" y="238" width="58" height="14" rx="3" />
                  <text x="161" y="208">2cLT</text>
                  <text x="161" y="228">2cN7</text>
                  <text x="161" y="248">2cPh</text>
                  <text className="sub" x="161" y="268">3× SERVO BRICKLET</text>
                </g>

                {SERVOS.map((servo) => (
                  <ServoMarker
                    key={servo.id}
                    servo={servo}
                    active={selected.type === 'servo' && selected.id === servo.id}
                    dimmed={filter !== 'all' && servo.group !== filter}
                    grouped={filter !== 'all' && servo.group === filter}
                    onSelect={userSelect}
                  />
                ))}
              </svg>
              <figcaption>Cyan = Motor · Violett = Rechen-Hardware · Marker anklicken</figcaption>
            </figure>

            <div className="hw-side">
              <div className="hw-chips">
                {[['all', 'Alle'], ['kopf', 'Kopf · 2'], ['arm', 'Arme · 12'], ['hand', 'Hände · 12']].map(([value, label]) => (
                  <button className={filter === value ? 'on' : ''} key={value} onClick={() => setFilter(value)} type="button">{label}</button>
                ))}
                <button className={`tour${tourOn ? ' on' : ''}`} onClick={() => setTourOn(!tourOn)} aria-pressed={tourOn} type="button">
                  {tourOn ? '⏸ Tour' : '▶ Tour'}
                </button>
              </div>

              <div className="hw-info" aria-live="polite">
                {selectedServo && (
                  <>
                    <span className="hw-tag servo">Servo · {GROUP_LABEL[selectedServo.group]}</span>
                    <h3>{selectedServo.name}</h3>
                    <code className="hw-motorname">{selectedServo.motor}</code>
                    <p>{selectedServo.desc}</p>
                    <div className="hw-joints">
                      <b>Bewegte URDF-Gelenke</b>
                      {selectedServo.joints.map((j) => <code key={j}>{j}</code>)}
                    </div>
                    {selectedServo.doppel && <div className="hw-doppel">⚙ 1 Motor → 2 Gelenke (Sehnenzug) – so werden aus 26 Motoren 36 Gelenke.</div>}
                  </>
                )}
                {selectedComp && (
                  <>
                    <span className="hw-tag comp">{selectedComp.tag}</span>
                    <h3>{selectedComp.name}</h3>
                    <code className="hw-motorname">{selectedComp.mono}</code>
                    <p>{selectedComp.desc}</p>
                    <div className="hw-joints">
                      <b>{selectedComp.listLabel}</b>
                      {selectedComp.list.map((item) => <code key={item}>{item}</code>)}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {activePage === 1 && (
          <div className="hw-chain-page">
            <div className="hw-panel-heading"><span>02 · Signalkette</span><h3>Von „Schulter auf 30°“ bis zur Drehung</h3></div>
            <div className="hw-chain">
              {[
                ['ROS-Node', 'pib_tinkerforge — Ziel-Winkel (rad)'],
                ['IP-Verbindung', 'Tinkerforge API — TCP, localhost'],
                ['brickd', 'Daemon auf dem Pi — verteilt Befehle'],
                ['Servo-Bricklet', '3× Bricklet 2.0 — bis 10 Kanäle'],
                ['Servo', 'dreht — und meldet 50×/s zurück'],
              ].map(([title, text], index, arr) => (
                <React.Fragment key={title}>
                  <article><strong>{title}</strong><span>{text}</span></article>
                  {index < arr.length - 1 && <div className="hw-link" aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
            <div className="hw-units">Winkel-Umrechnung im Treiber: <b>Radiant (ROS)</b> → Grad → <b>1/100 Grad (Tinkerforge)</b> – bei jedem einzelnen Befehl. Stimmt die Umrechnung nicht, fährt der Arm in die völlig falsche Richtung.</div>
          </div>
        )}

        {activePage === 2 && (
          <div className="hw-tricky-page">
            <div className="hw-panel-heading"><span>03 · Details</span><h3>Drei Dinge, die tricky waren</h3></div>
            <div className="hw-tricky">
              <article>
                <span>Namenswelten</span>
                <h4>URDF ≠ Motor</h4>
                <p>Die Bewegungsplanung spricht URDF-Gelenknamen, die Hardware Motor-Namen. Der Treiber übersetzt an der Grenze (<code>JOINT_MAP</code>) – sonst fühlt sich für einen Befehl schlicht kein Motor zuständig.</p>
              </article>
              <article>
                <span>Kalibrierung</span>
                <h4>Drehrichtung</h4>
                <p>Auf dem Papier ist alles symmetrisch – real sind manche Motoren verkehrt herum eingebaut. Eine Invertierungs-Liste dreht sie gezielt zurück. Ausprobieren statt ausrechnen.</p>
              </article>
              <article>
                <span>Sicherheit</span>
                <h4>Clamping + Feedback</h4>
                <p>Jeder Winkel wird auf ±90° begrenzt, bevor er zum Motor geht. Zurückgemeldet wird nicht der Wunschwert, sondern die echte Position – 50×/s. So bleibt das Robotermodell ehrlich.</p>
              </article>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

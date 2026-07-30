import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
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
  Maximize2,
  Radar,
  RadioTower,
  Sparkles,
  Users,
  Volume2,
  Workflow,
  X,
  Zap,
} from 'lucide-react';
import { HeroScene } from './scenes/HeroScene.jsx';

import { HardwareSection } from './HardwareSection.jsx';

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
  face_trigger: Radar,
  recognition: Eye,
  database: Database,
};

const modulePresentation = {
  voice: { image: '/project-assets/voice-node-flow.svg', facts: ['Dialogzustände koordinieren', 'Kamera-, Sprach- und Roboterevents verbinden', 'Zentraler Ablauf des Demonstrators'] },
  stt: { image: '/project-assets/stt-pipeline.svg', facts: ['Sprache in Text umwandeln', 'Deutsch mit Whisper erkennen', 'Fehler und Halluzinationen filtern'] },
  intent: { image: '/project-assets/drink-recognition-diagram.svg', facts: ['Absicht und Getränk erkennen', 'Strukturierte JSON-Antwort erzeugen', 'Small Talk von Bestellungen unterscheiden'] },
  tts: { image: '/project-assets/tts-pipeline.svg', facts: ['Text in Sprache umwandeln', 'Antwort als Audiodatei erzeugen', 'Natürliches Feedback für den Gast'] },
  gesture: { image: '/project-assets/doa-respeaker-explainer.png', facts: ['Sprechrichtung bestimmen', 'Stabile Winkelmessung prüfen', 'Störende Stimmen außerhalb des Bereichs ignorieren'] },
  drink: { image: '/project-assets/drink-recognition-diagram.svg', facts: ['Cola und Wasser zuverlässig erkennen', 'Begriffe normalisieren', 'Passende Zeigegeste auswählen'] },
  ros2: { image: '/project-assets/system-architecture.png', facts: ['Module über Topics verbinden', 'Emotionen und Bestellungen publizieren', 'Kamera- und Roboterstatus empfangen'] },
  memory: {
    image: '/project-assets/guest-memory-explainer.png',
    facts: {
      de: [
        'Legt für jeden Gast ein lokales Profil mit einer eindeutigen ID an.',
        'Speichert Name, known_guest und den Zeitpunkt last_seen.',
        'Merkt sich Lieblingsgetränke für spätere Empfehlungen.',
        'Bewahrt wichtige Inhalte aus vorherigen Gesprächen auf.',
        'Ermöglicht eine persönliche Begrüßung bei der Wiedererkennung.',
        'Aktualisiert das Profil nach jeder neuen Begegnung.',
        'Speichert alles lokal als JSON – ohne Cloud-Upload.',
      ],
      en: [
        'Creates a local profile with a unique ID for every guest.',
        'Stores the name, known_guest state, and last_seen timestamp.',
        'Remembers favorite drinks for later recommendations.',
        'Keeps important context from previous conversations.',
        'Enables a personal greeting after recognition.',
        'Updates the profile after every new encounter.',
        'Stores everything locally as JSON without a cloud upload.',
      ],
    },
  },
  state: { image: '/project-assets/system-architecture.png', facts: ['Kameraframes bereitstellen', 'DepthAI mit Clients verbinden', 'Bilddaten über TCP übertragen'] },
  face_trigger: {
    image: '/project-assets/face-landmarks-mediapipe.png',
    images: [
      ['/project-assets/face-landmarks-mediapipe.png', 'MediaPipe FaceLandmarker mit 478 Gesichts-Landmarks'],
      ['/project-assets/face-trigger-thresholds.png', 'Schwellenwerte für Blickrichtung und Sprechstatus'],
      ['/project-assets/face-trigger-ros-interface.png', 'ROS2-Topics der Gesichtserkennung und Gesprächsauslösung'],
    ],
    facts: {
      de: [
        'Zweistufige Pipeline: YOLO aus pib_vision filtert Frames vor, bevor MediaPipe ausgeführt wird.',
        'MediaPipe FaceLandmarker bestimmt 478 Gesichts-Landmarks und berechnet Gesichtsposition sowie Kopfrichtung.',
        'Yaw ≤ 15° und Pitch ≤ 25° bedeuten, dass die Person in Richtung des Barkeeper-Roboters schaut.',
        'MAR-Threshold 0,045 mit 5-Frame-Mittel erkennt, ob eine Person spricht.',
        '/face_jpeg wird beim Übergang des Blickkontakt-Zustands veröffentlicht.',
        '/face_position publiziert kontinuierlich JSON-Koordinaten, solange ein Gesicht erkannt wird.',
        'Eingänge sind /camera/image_raw und /vision/person_present.',
      ],
      en: [
        'Two-stage pipeline: YOLO from pib_vision pre-filters frames before MediaPipe runs.',
        'MediaPipe FaceLandmarker determines 478 facial landmarks and calculates face position and head direction.',
        'Yaw ≤ 15° and pitch ≤ 25° indicate that the person is looking toward the bartender robot.',
        'A MAR threshold of 0.045 using a five-frame average detects whether a person is speaking.',
        '/face_jpeg is published when the eye-contact state changes.',
        '/face_position continuously publishes JSON coordinates while a face is detected.',
        'Inputs are /camera/image_raw and /vision/person_present.',
      ],
    },
    issues: {
      de: [
        'Der intern MAR-basierte speaking-Zustand wird aktuell nicht über ein ROS2-Topic veröffentlicht.',
        'Yaw, Pitch und MAR sind im Code festgelegt und noch nicht als ROS2-Parameter konfigurierbar.',
      ],
      en: [
        'The internally calculated MAR-based speaking state is not currently published through a ROS2 topic.',
        'Yaw, pitch, and MAR are hard-coded and cannot yet be configured as ROS2 parameters.',
      ],
    },
    ideas: {
      de: [
        'Kopfrichtung als eigenes ROS2-Topic veröffentlichen.',
        'Sprechstatus als eigenes ROS2-Topic veröffentlichen.',
        'Schwellenwerte über ROS2-Parameter konfigurierbar machen.',
      ],
      en: [
        'Publish head direction through a dedicated ROS2 topic.',
        'Publish speaking state through a dedicated ROS2 topic.',
        'Make thresholds configurable through ROS2 parameters.',
      ],
    },
  },
  recognition: {
    image: '/project-assets/system-architecture.png',
    facts: {
      de: [
        'Empfängt Kamera-Frames von gespraech_start über /face_jpeg.',
        'Schneidet das Gesicht aus und berechnet ein 512-dimensionales Embedding mit buffalo_l (InsightFace).',
        'Fragt über /db/find_by_face ab, ob die Person bekannt ist.',
        'Legt unbekannte Personen über /db/create_guest als neuen Gast an.',
        'Publiziert die guest_id aus der Datenbank auf /person_detected.',
      ],
      en: [
        'Receives camera frames from gespraech_start through /face_jpeg.',
        'Crops the face and calculates a 512-dimensional embedding with buffalo_l (InsightFace).',
        'Checks whether the person is known through /db/find_by_face.',
        'Creates unknown people as new guests through /db/create_guest.',
        'Publishes the database guest_id on /person_detected.',
      ],
    },
    issues: {
      de: [
        'Wiedererkennungsgenauigkeit bisher nur mit zwei Testpersonen geprüft.',
        'Kein Multi-Face-Handling: Es wird nur das prominenteste Gesicht verarbeitet.',
      ],
      en: [
        'Recognition accuracy has only been tested with two people.',
        'No multi-face handling: only the most prominent face is processed.',
      ],
    },
    ideas: {
      de: ['Voice- und Face-Embedding kombinieren.', 'Liveness-Check ergänzen.', 'Mehrere Gesichter pro Bild verarbeiten.'],
      en: ['Combine voice and face embeddings.', 'Add a liveness check.', 'Process multiple faces per frame.'],
    },
  },
  database: {
    image: '/project-assets/guest-database-schema.png',
    facts: {
      de: [
        'Speichert Gästeprofile mit Face-Embedding, Name, Gesprächsverlauf und Bestellungen.',
        'LanceDB ermöglicht lokale Vektorsuche über Cosine-Ähnlichkeit ohne separaten Datenbankserver.',
        'Bietet sechs Services: create_guest, find_by_face, add_order, delete_guest, export_guest und append_conversation.',
        'Löscht Profile nach 30 Tagen automatisch per täglichem Retention-Cleanup.',
        'Die Daten bleiben lokal auf dem Gerät – ohne Cloud-Zugriff.',
      ],
      en: [
        'Stores guest profiles with face embeddings, names, conversation history, and orders.',
        'LanceDB provides local vector search using cosine similarity without a separate database server.',
        'Provides six services: create_guest, find_by_face, add_order, delete_guest, export_guest, and append_conversation.',
        'Automatically removes profiles after 30 days through daily retention cleanup.',
        'All data stays locally on the device without cloud access.',
      ],
    },
    issues: {
      de: [
        'Der find_by_face-Threshold von 0,35 wurde noch nicht empirisch bestimmt.',
        'retention_until wird bei aktiven Stammgästen derzeit nicht verlängert.',
      ],
      en: [
        'The find_by_face threshold of 0.35 has not yet been determined empirically.',
        'retention_until is currently not extended for active returning guests.',
      ],
    },
    ideas: {
      de: [
        'Threshold datengetrieben, zum Beispiel über eine ROC-Kurve, festlegen.',
        'Retention bei Wiedererkennung verlängern.',
        'Gesprächsverlauf künftig über ein RAG-System statt als String speichern.',
      ],
      en: [
        'Determine the threshold from data, for example with an ROC curve.',
        'Extend retention after recognition or an order.',
        'Store conversation history through a RAG system instead of one string.',
      ],
    },
  },
};

const projectEmotions = [
  ['happy', '😊'],
  ['listening', '👂'],
  ['thinking', '💭'],
  ['talking', '💬'],
  ['confused', '❓'],
  ['error', '⚠️'],
  ['neutral', '●'],
];

const emotionImages = {
  neutral: '/project-assets/emotions/neutral.png',
  listening: '/project-assets/emotions/listening.png',
  talking: '/project-assets/emotions/talking.png',
  confused: '/project-assets/emotions/confused.png',
  happy: '/project-assets/emotions/happy.png',
  thinking: '/project-assets/emotions/thinking.png',
  error: '/project-assets/emotions/error.png',
};

const behaviourTreeContent = {
  phases: [
    ['1', 'Beim Start', 'Der Roboter zeigt sofort eine passende Emotion und macht eine kurze Geste – zum Beispiel Winken bei der Begrüßung.'],
    ['2', 'Während sie läuft', 'Der Baum prüft wiederholt, ob die Aktion fertig ist. Manche enden sofort, andere warten auf ein Ereignis.'],
    ['3', 'Beim Ende', 'Das Ergebnis der Aktion wird festgehalten. So bleibt nachvollziehbar, was passiert ist.'],
  ],
  actions: [
    ['Person erkennen', 'PersonDetected', 'Erkennt den Gast und veröffentlicht PERSON_DETECTED mit der Gast-ID auf /task_status.', ['Gesicht: fröhlich', 'Geste: keine', 'Topic: /task_status']],
    ['Interaction', 'PlayGreeting', 'Begrüßt den Gast, sobald die Gesprächsphase GREETING aktiv ist.', ['Gesicht: fröhlich', 'Geste: winkt']],
    ['Interaction', 'PlayListening', 'Zeigt sichtbar, dass der Roboter dem Gast aufmerksam zuhört.', ['Gesicht: aufmerksam', 'Geste: keine']],
    ['Interaction', 'PlayTalking', 'Antwortet dem Gast mit einer passenden Sprechgestik.', ['Gesicht: sprechend', 'Geste: gestikuliert']],
    ['Interaction', 'PlayPreparing', 'Leitet von PREPARING direkt zum Schritt Preparation über.', ['Gesicht: konzentriert', 'Geste: keine']],
    ['Interaction', 'HandleNotUnderstood', 'Signalisiert sichtbar, dass die Eingabe nicht verstanden wurde.', ['Gesicht: verwirrt', 'Geste: Kopf schütteln']],
    ['Interaction', 'WaitForDialogue', 'Wartet ruhig, solange keine bekannte Gesprächsphase aktiv ist.', ['Gesicht: neutral', 'Geste: keine']],
    ['Vorbereitung', 'Preparation', 'Wartet auf die Information im Blackboard, dass das Getränk fertig gemixt ist.', ['Gesicht: konzentriert', 'Geste: keine', 'Speicher: lesen']],
    ['Servieren', 'Serving', 'Übergibt das Getränk. Nach 20 Sekunden ohne Reaktion wird der Speicher zurückgesetzt.', ['Gesicht: fröhlich', 'Geste: Getränk präsentieren', 'Speicher: lesen & schreiben']],
    ['Standby', 'WaitForInput', 'Wartet, bis die Kamera den nächsten Gast erkennt.', ['Gesicht: neutral', 'Geste: keine']],
  ],
  interfaces: [
    ['LLM-Node', '/dialogue_status', 'Gesprächsphase → Behaviour Tree', 'in'],
    ['LLM-Node', '/task_status', 'Ereignisse → LLM', 'out'],
    ['Kamera-Node', '/person_detected', 'Erkannter Gast → Behaviour Tree', 'in'],
    ['Face-Node', '/emotion', 'Emotion → Gesichtsanzeige', 'out'],
    ['Mechanik-Node', '/motion', 'Geste oder Drink mit Result/Feedback', 'action'],
  ],
  liveFacts: [
    ['Erreichbar unter', 'http://localhost:8001'],
    ['Starten', 'ros2 run barkeeper_tree barkeeper_live_server'],
    ['Voraussetzung', 'Der BT-Node muss laufen; das Dashboard hört nur auf /bt_state.'],
    ['Eigener Prozess', 'Ein Dashboard-Absturz beeinflusst den Roboter nicht.'],
  ],
  watch: [
    'Knotenfarben wechseln live mit RUNNING, SUCCESS und FAILURE.',
    'Der Interaction-Zweig folgt exakt dem dialogue_status.',
    'Blackboard-Werte aktualisieren sich automatisch alle 200 ms.',
    'Das Dashboard ist read-only: beobachten, nicht steuern.',
  ],
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
    scenes: ['Start', 'Demo', 'Hardware', 'Simulation', 'Kamera & TF', 'Selector', 'Motion Sequence', 'Motor GUI', 'Ablauf', 'Module', 'FaceTrigger', 'Behaviour Tree', 'Emotionen', 'Team'],
    scrollHint: {
      scene: 'Szene',
      inside: 'weiter in dieser Szene',
      next: 'nächste Szene',
    },
    hero: {
      eyebrow: 'Robotik trifft Gastfreundschaft',
      title: 'Barkeeper Robot',
      text: 'Ein modularer ROS2-Demonstrator: Der Roboter erkennt Gäste und Objekte, versteht Sprache, zeigt Emotionen und führt Bewegungen bis zum Greifen aus – getestet in Webots und am echten pib-Roboter.',
      primary: 'Ablauf ansehen',
      secondary: 'Module ansehen',
      visualLabel: 'Interaktive 3D-Szene des Roboter-Barkeepers',
      badges: ['Live Voice Demo', 'Cola / Wasser', 'ROS2 Events'],
      capabilities: [
        ['Voice & Dialog', 'Sprache verstehen'],
        ['Vision', 'Gäste & Objekte erkennen'],
        ['Motion', 'Zeigen, winken & greifen'],
        ['Behaviour Tree', 'Module koordinieren'],
      ],
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
        ['recognition', 'Recognition-Node', 'Erkennt Gesichter, erzeugt Embeddings und verbindet bekannte oder neue Personen mit einer guest_id.'],
        ['database', 'DB-Node', 'Speichert Gäste und Bestellungen lokal in LanceDB und stellt die passenden ROS2-Services bereit.'],
      ],
    },
    groupVideo: {
      kicker: 'Behaviour Tree · Gruppenbeitrag',
      title: 'Behaviour Tree (BT)',
      resourceLabel: 'Wichtig zum Verstehen von BTs',
      resourceText: 'Hands-on Py-Trees – Part 1',
      resourceUrl: 'https://medium.com/@thehummingbird/hands-on-py-trees-part-1-1df1910128e4',
      badge: 'Behaviour Tree · Video',
      caption: 'Video zum Behaviour Tree',
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
      title: 'Gemeinsam entwickelt – als ein Robotik-Team.',
      studentsLabel: 'Projektmitglieder',
      teachersLabel: 'Lehrende & Betreuung',
      members: [
        ['NV', 'Niclas Vogler', 'Student'],
        ['YS', 'Yaser Shayea', 'Student'],
        ['MR', 'Mohammad Raszai', 'Student'],
        ['MP', 'Michel Pund', 'Student'],
        ['PN', 'Philip Neugebauer', 'Student'],
        ['YM', 'Yuliy Muraylo', 'Student'],
        ['SK', 'Sujan Kumal', 'Student'],
        ['AK', 'Alexander Kraus', 'Student'],
        ['EJ', 'Eric Jeguschke', 'Student'],
        ['GJ', 'Ghasak Jamous', 'Studentin'],
        ['MH', 'Mazen Haboub', 'Student'],
        ['NF', 'Niklas Früchtenicht', 'Student'],
        ['MA', 'Marwa Alhamsho', 'Studentin'],
      ],
      teachers: [
        ['HT', 'Hans Timmermann', 'Assistierender Lehrender'],
        ['NB', 'Niklas Beuter', 'Lehrender'],
      ],
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
      kicker: 'Interaktive Gesprächs-Demo',
      title: 'Ein Roboter, der zuhört, versteht und mitdenkt.',
      subtitle: 'Von der Getränkebestellung bis zur Philosophie: Wähle ein Gespräch und erlebe, wie der Roboter Sprache, Kontext und Bedeutung verarbeitet.',
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
          guest: 'Kann eine Maschine wirklich verstehen, was es bedeutet, glücklich zu sein?',
          state: 'REFLECTING',
          intent: 'small_talk',
          item: 'Bewusstsein & Glück',
          reply: 'Ich kann Glück beschreiben und in deinen Worten erkennen – aber ob ich es selbst erlebe, ist eine andere Frage. Vielleicht beginnt Verstehen nicht beim Fühlen, sondern beim aufmerksamen Zuhören. Was bedeutet Glück für dich?',
          emotion: 'thinking',
          event: '/emotion: thinking → dialogue_status=SMALL_TALK → /emotion: listening',
          insight: ['Philosophische Frage erkannt', 'Nuanciert geantwortet', 'Gegenfrage gestellt'],
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
    scenes: ['Start', 'Demo', 'Hardware', 'Simulation', 'Camera & TF', 'Selector', 'Motion Sequence', 'Motor GUI', 'Flow', 'Modules', 'FaceTrigger', 'Behaviour Tree', 'Emotions', 'Team'],
    scrollHint: {
      scene: 'Scene',
      inside: 'continue inside this scene',
      next: 'next scene',
    },
    hero: {
      eyebrow: 'Robotics meets hospitality',
      title: 'Barkeeper Robot',
      text: 'A modular ROS2 demonstrator: the robot recognizes guests and objects, understands speech, displays emotions, and performs movements including grasping – tested in Webots and on the real pib robot.',
      primary: 'Explore flow',
      secondary: 'View modules',
      visualLabel: 'Interactive 3D robot bartender scene',
      badges: ['Live Voice Demo', 'Cola / Water', 'ROS2 Events'],
      capabilities: [
        ['Voice & dialogue', 'Understand speech'],
        ['Vision', 'Detect guests & objects'],
        ['Motion', 'Point, wave & grasp'],
        ['Behaviour Tree', 'Coordinate modules'],
      ],
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
        ['recognition', 'Recognition Node', 'Recognizes faces, creates embeddings, and links known or new people to a guest_id.'],
        ['database', 'Database Node', 'Stores guests and orders locally in LanceDB and provides the corresponding ROS2 services.'],
      ],
    },
    groupVideo: {
      kicker: 'Behaviour Tree · Group contribution',
      title: 'Behaviour Tree (BT)',
      text: 'The documentation for the BT (Behaviour Tree) will be added here in the future.',
      resourceLabel: 'Important for understanding BTs',
      resourceText: 'Hands-on Py-Trees – Part 1',
      resourceUrl: 'https://medium.com/@thehummingbird/hands-on-py-trees-part-1-1df1910128e4',
      badge: 'Behaviour Tree · Video',
      caption: 'Behaviour Tree video',
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
      title: 'Built together as one robotics team.',
      studentsLabel: 'Project members',
      teachersLabel: 'Teaching & supervision',
      members: [
        ['NV', 'Niclas Vogler', 'Student'],
        ['YS', 'Yaser Shayea', 'Student'],
        ['MR', 'Mohammad Raszai', 'Student'],
        ['MP', 'Michel Pund', 'Student'],
        ['PN', 'Philip Neugebauer', 'Student'],
        ['YM', 'Yuliy Muraylo', 'Student'],
        ['SK', 'Sujan Kumal', 'Student'],
        ['AK', 'Alexander Kraus', 'Student'],
        ['EJ', 'Eric Jeguschke', 'Student'],
        ['GJ', 'Ghasak Jamous', 'Student'],
        ['MH', 'Mazen Haboub', 'Student'],
        ['NF', 'Niklas Früchtenicht', 'Student'],
        ['MA', 'Marwa Alhamsho', 'Student'],
      ],
      teachers: [
        ['HT', 'Hans Timmermann', 'Assistant lecturer'],
        ['NB', 'Niklas Beuter', 'Lecturer'],
      ],
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
      kicker: 'Interactive conversation demo',
      title: 'A robot that listens, understands, and thinks along.',
      subtitle: 'From ordering a drink to philosophy: choose a conversation and experience how the robot processes language, context, and meaning.',
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
          guest: 'Can a machine truly understand what it means to be happy?',
          state: 'REFLECTING',
          intent: 'small_talk',
          item: 'consciousness & happiness',
          reply: 'I can describe happiness and recognize it in your words—but whether I experience it myself is another question. Perhaps understanding begins not with feeling, but with listening carefully. What does happiness mean to you?',
          emotion: 'thinking',
          event: '/emotion: thinking → dialogue_status=SMALL_TALK → /emotion: listening',
          insight: ['Philosophical question recognized', 'Nuanced answer created', 'Follow-up question asked'],
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
  const targetIds = ['top', 'scene-1', 'hardware', 'simulation', 'camera-tf', 'selector', 'motion-sequence', 'motor-gui', 'workflow', 'modules', 'face-trigger', 'group-video', 'emotions', 'team'];

  useEffect(() => {
    const scenes = Array.from(document.querySelectorAll('.scroll-scene'));
    let lastScene = 0;
    let transitionTimer;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const nextScene = Number(visible.target.dataset.sceneIndex || 0);
          if (nextScene !== lastScene) {
            window.clearTimeout(transitionTimer);
            document.body.classList.remove('scene-shift-up', 'scene-shift-down', 'scene-is-changing');
            document.body.classList.add(
              nextScene > lastScene ? 'scene-shift-down' : 'scene-shift-up',
              'scene-is-changing'
            );
            transitionTimer = window.setTimeout(() => {
              document.body.classList.remove('scene-is-changing');
            }, 850);
            lastScene = nextScene;
          }
          setActiveScene(nextScene);
          scenes.forEach((scene) => {
            scene.classList.toggle('active-scene', Number(scene.dataset.sceneIndex || 0) === nextScene);
          });
        }
      },
      { rootMargin: '-28% 0px -42% 0px', threshold: [0.2, 0.45, 0.7] }
    );

    scenes.forEach((scene) => observer.observe(scene));
    return () => {
      observer.disconnect();
      window.clearTimeout(transitionTimer);
      document.body.classList.remove('scene-is-changing', 'scene-shift-up', 'scene-shift-down');
    };
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
        <h1><span>Barkeeper</span><em>Robot</em></h1>
        <p>{t.hero.text}</p>
        <div className="hero-actions">
          <a className="button primary" href="#workflow">{t.hero.primary} <ArrowRight size={18} /></a>
          <a className="button secondary" href="#modules">{t.hero.secondary}</a>
        </div>
        <div className="hero-capabilities">
          {[Mic, Eye, Hand, BrainCircuit].map((Icon, index) => (
            <article key={t.hero.capabilities[index][0]}>
              <Icon size={18} />
              <span><strong>{t.hero.capabilities[index][0]}</strong><small>{t.hero.capabilities[index][1]}</small></span>
            </article>
          ))}
        </div>
      </div>
      <div className="hero-stage" aria-label={t.hero.visualLabel}>
        <div className="hero-stage-bar">
          <span><i /> SYSTEM DEMO</span>
          <div className="hero-badges">
            {t.hero.badges.map((badge) => <b key={badge}>{badge}</b>)}
          </div>
          <code>ROS 2 · ONLINE</code>
        </div>
        <div className="hero-video">
          <video autoPlay controls loop muted playsInline preload="metadata">
            <source src="/project-assets/hero-demo-recording.mp4" type="video/mp4" />
            <source src="/project-assets/hero-demo-recording.mov" type="video/quicktime" />
          </video>
          <div className="hero-video-scan" aria-hidden="true" />
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
  const [previewEmotion, setPreviewEmotion] = useState(active.emotion);

  useEffect(() => {
    setPreviewEmotion(active.emotion);
  }, [active.emotion]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % t.simulator.options.length);
    }, 8000);

    return () => window.clearInterval(interval);
  }, [t.simulator.options.length]);

  return (
    <section className="section-band simulator-section scroll-scene" data-scene-index="1" id="scene-1">
      <div className="section-heading">
        <span className="section-kicker">{t.simulator.kicker}</span>
        <h2>{t.simulator.title}</h2>
        <p className="wide-copy">{t.simulator.subtitle}</p>
      </div>
      <div className={`simulator-grid ${active.id === 'smalltalk' ? 'philosophy-active' : ''}`}>
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
            {active.id === 'smalltalk' && <BrainCircuit className="conversation-symbol" size={30} aria-hidden="true" />}
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
            <RobotEmotionFace emotion={previewEmotion} />
            <span className="orbit-ring" />
            <span className="orbit-ring second" />
          </div>
          <div className="state-grid">
            <StatePill label={t.simulator.labels.state} value={active.state} />
            <StatePill label={t.simulator.labels.intent} value={active.intent} />
            <StatePill label={t.simulator.labels.item} value={active.item} />
            <StatePill label={t.simulator.labels.emotion} value={previewEmotion} />
          </div>
          <div className="event-output">
            <span>{t.simulator.labels.event}</span>
            <code>{active.event}</code>
          </div>
          <div className="emotion-strip" aria-label="Projekt-Emotionen">
            {projectEmotions.map(([emotion, symbol]) => (
              <button
                className={previewEmotion === emotion ? 'active' : ''}
                key={emotion}
                onClick={() => setPreviewEmotion(emotion)}
                type="button"
              >
                {emotionImages[emotion]
                  ? <img src={emotionImages[emotion]} alt="" aria-hidden="true" />
                  : <b>{symbol}</b>}
                {emotion}
              </button>
            ))}
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

function RobotEmotionFace({ emotion }) {
  const image = emotionImages[emotion];

  if (image) {
    return (
      <div className={`robot-emotion-face robot-head emotion-${emotion}`} aria-label={`Robot emotion: ${emotion}`}>
        <div className="robot-head-antenna" aria-hidden="true"><i /></div>
        <span className="robot-ear left" aria-hidden="true"><i /></span>
        <span className="robot-ear right" aria-hidden="true"><i /></span>
        <div className="robot-head-screen">
          <img className="robot-display-image" src={image} alt={`Roboter-Emotion: ${emotion}`} />
          <span className="screen-scan" aria-hidden="true" />
        </div>
        <div className="robot-neck" aria-hidden="true">
          <i /><i /><i /><i /><i />
        </div>
        <strong>{emotion}</strong>
      </div>
    );
  }

  return (
    <div className={`robot-emotion-face emotion-${emotion}`} aria-label={`Robot emotion: ${emotion}`}>
      <div className="face-antenna"><i /></div>
      <div className="face-screen">
        <span className="face-eye left" />
        <span className="face-eye right" />
        <span className="face-mouth" />
        {emotion === 'confused' && <span className="face-question">?</span>}
        {emotion === 'error' && <span className="face-error-mark">!</span>}
      </div>
      <strong>{emotion}</strong>
    </div>
  );
}

function LiveRobotFace({ emotion, label }) {
  return (
    <div className={`live-robot-face emotion-${emotion}`} role="img" aria-label={`Animierte Roboter-Emotion: ${label}`}>
      <div className="live-face-brows" aria-hidden="true"><i /><i /></div>
      <div className="live-face-eyes" aria-hidden="true">
        <span className="live-eye left"><i /></span>
        <span className="live-eye right"><i /></span>
      </div>
      <div className="live-moustache" aria-hidden="true"><i /><i /></div>
      <span className="live-mouth" aria-hidden="true"><i /></span>
      {emotion === 'confused' && <span className="live-question" aria-hidden="true">?</span>}
      {emotion === 'thinking' && <span className="live-thinking-dots" aria-hidden="true"><i /><i /><i /></span>}
    </div>
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
  const [activeWorkflowPage, setActiveWorkflowPage] = useState(0);

  return (
    <section className="section-band workflow-section scroll-scene" data-scene-index="8" id="workflow">
      <div className="section-heading">
        <span className="section-kicker">{t.workflow.kicker}</span>
        <h2>{t.workflow.title}</h2>
      </div>
      <div className="workflow-tabs">
        <button className={activeWorkflowPage === 0 ? 'active' : ''} onClick={() => setActiveWorkflowPage(0)} type="button">01 · Systemschritte</button>
        <button className={activeWorkflowPage === 1 ? 'active' : ''} onClick={() => setActiveWorkflowPage(1)} type="button">02 · Vollständiger Ablauf</button>
      </div>
      {activeWorkflowPage === 0 && <div className="flow-line">
        {t.workflow.steps.map(([title, text], index) => (
          <article className="flow-card reveal-card" key={title}>
            <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>}
      {activeWorkflowPage === 1 && (
        <div className="workflow-diagram-page">
          <figure>
            <div className="workflow-diagram-status"><span><i /> GESAMTABLAUF</span><code>END-TO-END</code></div>
            <img src="/project-assets/barkeeper-process-flow.png" alt="Vollständiger Ablauf des Barkeeper-Roboters vom Warten auf einen Gast bis zum Servieren des Getränks" />
          </figure>
          <div className="workflow-diagram-copy">
            <span className="section-kicker">VOM GAST ZUM GETRÄNK</span>
            <h3>Ein geschlossener Interaktionszyklus.</h3>
            <div className="workflow-phase-list">
              <article><span>01</span><div><strong>Kontakt</strong><p>Der Roboter wartet, erkennt einen Gast und begrüßt ihn.</p></div></article>
              <article><span>02</span><div><strong>Dialog</strong><p>Optionaler Smalltalk führt zur Getränkebestellung.</p></div></article>
              <article><span>03</span><div><strong>Prüfung</strong><p>Die Bestellung wird bestätigt und das gewünschte Getränk geprüft.</p></div></article>
              <article><span>04</span><div><strong>Servieren</strong><p>Der Drink wird übergeben; anschließend wartet der Roboter auf den nächsten Gast.</p></div></article>
            </div>
            <div className="workflow-loop"><Workflow size={18} /><span>Nach jeder Interaktion beginnt der Ablauf automatisch erneut.</span></div>
          </div>
        </div>
      )}
    </section>
  );
}

function ModulesSection({ t, language }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const presentation = selectedModule ? modulePresentation[selectedModule.iconKey] : null;
  const localized = (value) => {
    if (!value) return [];
    return Array.isArray(value) ? value : value[language];
  };

  useEffect(() => {
    if (!selectedModule) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedModule(null);
    };
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedModule]);

  return (
    <section className="section-band scroll-scene" data-scene-index="9" id="modules">
      <div className="section-heading">
        <span className="section-kicker">{t.modules.kicker}</span>
        <h2>{t.modules.title}</h2>
      </div>
      <div className="module-grid">
        {t.modules.items.map(([iconKey, title, text]) => {
          const Icon = moduleIcons[iconKey];
          return (
            <article
              className="module-card reveal-card"
              key={title}
              role="button"
              tabIndex="0"
              aria-label={`${title} öffnen`}
              onClick={() => setSelectedModule({ iconKey, title, text })}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedModule({ iconKey, title, text });
                }
              }}
            >
              <span className="module-icon"><Icon size={22} /></span>
              <span className="module-open"><Maximize2 size={16} /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
      {selectedModule && createPortal(
        <div className="module-modal-backdrop" role="presentation" onMouseDown={() => setSelectedModule(null)}>
          <div
            className="module-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="module-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="module-modal-close" type="button" onClick={() => setSelectedModule(null)} aria-label="Fenster schließen">
              <X size={22} />
            </button>
            <div className="module-modal-visual">
              {presentation.images ? (
                <div className="module-modal-gallery">
                  {presentation.images.map(([image, alt], index) => (
                    <figure key={image}>
                      <img src={image} alt={alt} />
                      <figcaption>{String(index + 1).padStart(2, '0')} · {alt}</figcaption>
                    </figure>
                  ))}
                </div>
              ) : (
                <img
                  src={presentation.image}
                  alt={`${selectedModule.title} – Projektübersicht`}
                />
              )}
            </div>
            <div className="module-modal-copy">
              <span className="section-kicker">{language === 'de' ? 'Präsentationsansicht' : 'Presentation view'}</span>
              <h2 id="module-modal-title">{selectedModule.title}</h2>
              <p>{selectedModule.text}</p>
              <h3>{language === 'de' ? 'Wichtige Punkte' : 'Key points'}</h3>
              <ul>
                {localized(presentation.facts).map((fact) => <li key={fact}>{fact}</li>)}
              </ul>
              {presentation.issues && (
                <div className="module-modal-detail">
                  <h3>{language === 'de' ? 'Bekannte Probleme' : 'Known issues'}</h3>
                  <ul>
                    {localized(presentation.issues).map((issue) => <li key={issue}>{issue}</li>)}
                  </ul>
                </div>
              )}
              {presentation.ideas && (
                <div className="module-modal-detail ideas">
                  <h3>{language === 'de' ? 'Lösungs- & Erweiterungsideen' : 'Solutions & extension ideas'}</h3>
                  <ul>
                    {localized(presentation.ideas).map((idea) => <li key={idea}>{idea}</li>)}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
}

function FaceTriggerSection() {
  const [activePage, setActivePage] = useState(0);
  const tabs = ['01 · Erkennungspipeline', '02 · Messwerte', '03 · ROS-Interface'];

  return (
    <section className="section-band face-trigger-section scroll-scene" data-scene-index="10" id="face-trigger">
      <div className="face-trigger-header">
        <div><span className="section-kicker">GESICHTSERKENNUNG · GESPRÄCHSAUSLÖSUNG</span><h2>Wann möchte ein Gast sprechen?</h2></div>
        <p>Die Node erkennt Blickkontakt, berechnet die Gesichtsposition und bestimmt intern über die Mundbewegung, ob eine Person spricht.</p>
        <div className="face-trigger-tags"><code>YOLO</code><code>MediaPipe</code><code>478 Landmarks</code><code>ROS 2</code></div>
      </div>
      <div className="face-trigger-tabs">
        {tabs.map((tab, index) => <button className={activePage === index ? 'active' : ''} key={tab} onClick={() => setActivePage(index)} type="button">{tab}</button>)}
      </div>
      <div className="face-trigger-panel">
        {activePage === 0 && (
          <div className="face-trigger-pipeline-page">
            <figure className="face-trigger-image">
              <div className="camera-tf-visual-status"><span><i /> MEDIAPIPE LIVE</span><code>478 LANDMARKS</code></div>
              <img src="/project-assets/face-landmarks-mediapipe.png" alt="Gesicht mit 478 MediaPipe-Landmarks" />
              <figcaption>MediaPipe FaceLandmarker bestimmt Position, Kopfrichtung und Mundbewegung.</figcaption>
            </figure>
            <div className="face-trigger-copy">
              <span className="section-kicker">ZWEISTUFIGE PIPELINE</span><h3>Nur relevante Frames werden verarbeitet.</h3>
              <div className="face-pipeline-flow">
                <article><span>01</span><Radar /><strong>YOLO-Vorfilterung</strong><p><code>pib_vision</code> meldet, ob eine Person im Bild vorhanden ist. Ohne Person wird der Frame übersprungen.</p></article>
                <ArrowRight />
                <article><span>02</span><Eye /><strong>FaceLandmarker</strong><p>MediaPipe ermittelt 478 Landmarks, Gesichtsposition, Yaw, Pitch und Mouth Aspect Ratio.</p></article>
                <ArrowRight />
                <article><span>03</span><Zap /><strong>Gespräch starten</strong><p>Blickkontakt löst <code>/face_jpeg</code> aus; die Position wird kontinuierlich publiziert.</p></article>
              </div>
              <div className="face-resource-note"><strong>Vorteil</strong><span>Die YOLO-Vorfilterung reduziert Rechenlast, da MediaPipe nur bei erkannter Person läuft.</span></div>
            </div>
          </div>
        )}
        {activePage === 1 && (
          <div className="face-trigger-values-page">
            <figure className="face-trigger-image thresholds">
              <div className="camera-tf-visual-status"><span><i /> THRESHOLD VIEW</span><code>5-FRAME-MITTEL</code></div>
              <img src="/project-assets/face-trigger-thresholds.png" alt="Schwellenwerte für Yaw, Pitch und Mouth Aspect Ratio" />
              <figcaption>Die aktuellen Schwellenwerte sind direkt im Code festgelegt.</figcaption>
            </figure>
            <div className="face-trigger-copy">
              <span className="section-kicker">BERECHNETE GRÖSSEN</span><h3>Blickrichtung und Sprechstatus.</h3>
              <div className="face-value-cards">
                <article><span>YAW</span><strong>≤ 15°</strong><p>Horizontale Kopfrichtung: Die Person schaut zum Barkeeper.</p></article>
                <article><span>PITCH</span><strong>≤ 25°</strong><p>Vertikale Kopfrichtung: Die Person schaut zum Barkeeper.</p></article>
                <article><span>MAR</span><strong>0,045</strong><p>Überschreitung im 5-Frame-Mittel bedeutet: Person spricht.</p></article>
              </div>
              <div className="face-calculation"><code>Landmarks → Yaw + Pitch + MAR → Blickkontakt / speaking</code></div>
            </div>
          </div>
        )}
        {activePage === 2 && (
          <div className="face-trigger-ros-page">
            <figure className="face-trigger-image ros">
              <div className="camera-tf-visual-status"><span><i /> ROS 2 INTERFACE</span><code>TOPICS</code></div>
              <img src="/project-assets/face-trigger-ros-interface.png" alt="ROS2-Topics der Gesichtserkennung" />
              <figcaption>Subscriptions und Publikationen der FaceTrigger-Node.</figcaption>
            </figure>
            <div className="face-trigger-copy">
              <span className="section-kicker">ROS-INTERFACE</span><h3>Eingänge, Ausgänge und nächste Schritte.</h3>
              <div className="face-ros-list">
                <article><code>/camera/image_raw</code><span>sensor_msgs/Image · Eingang</span></article>
                <article><code>/vision/person_present</code><span>std_msgs/Bool · Eingang</span></article>
                <article><code>/face_jpeg</code><span>FaceImage · bei Zustandsänderung</span></article>
                <article><code>/face_position</code><span>JSON x,y · kontinuierlich</span></article>
              </div>
              <div className="face-future-grid">
                <article><strong>Bekannte Probleme</strong><p>Speaking wird noch nicht publiziert. Yaw, Pitch und MAR sind hardcodiert.</p></article>
                <article><strong>Erweiterungen</strong><p>Kopfrichtung und Sprechstatus als Topics; Schwellenwerte als ROS-Parameter.</p></article>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function GroupVideoSection({ t }) {
  const [activeBtPage, setActiveBtPage] = useState(0);
  const tabs = ['01 · Struktur', '02 · Aktionen', '03 · Umgebung', '04 · Live-Betrieb'];

  return (
    <section className="section-band group-video-section scroll-scene" data-scene-index="11" id="group-video">
      <div className="bt-doc-header">
        <div>
          <span className="section-kicker">{t.groupVideo.kicker}</span>
          <h2>{t.groupVideo.title}</h2>
        </div>
        <p>Die komplette Baumstruktur – und was jede einzelne Aktion tatsächlich macht.</p>
        <div className="bt-doc-tags"><code>ROS 2</code><code>Py-Trees</code><code>Live Dashboard</code></div>
      </div>
      <div className="bt-tabs" role="tablist" aria-label="Behaviour-Tree-Dokumentation">
        {tabs.map((tab, index) => (
          <button
            className={activeBtPage === index ? 'active' : ''}
            key={tab}
            onClick={() => setActiveBtPage(index)}
            role="tab"
            aria-selected={activeBtPage === index}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bt-doc-panel">
        {activeBtPage === 0 && (
          <div className="bt-tree-diagram">
            <div className="bt-tree-title"><span>01 · Struktur</span><h3>Die gesamte Architektur</h3></div>
            <ul className="bt-tree">
              <li>
                <div className="bt-node parent"><strong>BarkeeperRoot</strong></div>
                <ul>
                  <li><div className="bt-node error"><strong>ErrorBranch</strong><span>vorhanden, aktuell ungenutzt</span></div></li>
                  <li>
                    <div className="bt-node parent"><strong>MissionBranch</strong><span>Gast bedienen</span></div>
                    <ul>
                      <li><div className="bt-node teal"><strong>PersonDetected</strong><span>erkennt & meldet Gast</span></div></li>
                      <li>
                        <div className="bt-node parent"><strong>Interaction</strong><span>reagiert auf Gesprächsphase</span></div>
                        <ul>
                          <li><div className="bt-node teal"><code>GREETING</code><span>begrüßt den Gast</span></div></li>
                          <li><div className="bt-node teal"><code>LISTENING</code><span>hört zu</span></div></li>
                          <li><div className="bt-node teal"><code>TALKING</code><span>antwortet dem Gast</span></div></li>
                          <li><div className="bt-node amber"><code>PREPARING</code><span>→ Preparation</span></div></li>
                          <li><div className="bt-node error"><code>NOT_UNDERSTOOD</code><span>nicht verstanden</span></div></li>
                          <li><div className="bt-node dim"><code>sonst</code><span>wartet auf Status</span></div></li>
                        </ul>
                      </li>
                      <li><div className="bt-node amber"><strong>Preparation</strong><span>wartet auf Getränk</span></div></li>
                      <li><div className="bt-node violet"><strong>Serving</strong><span>übergibt Getränk</span></div></li>
                    </ul>
                  </li>
                  <li><div className="bt-node dim"><strong>WaitForInput</strong><span>wartet auf Gast</span></div></li>
                </ul>
              </li>
            </ul>
          </div>
        )}
        {activeBtPage === 1 && (
          <div className="bt-actions-page">
            <div className="bt-phases">
              {behaviourTreeContent.phases.map(([number, title, text]) => (
                <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
              ))}
            </div>
            <div className="bt-action-list">
              {behaviourTreeContent.actions.map(([category, name, text, chips]) => (
                <article key={name}>
                  <small>{category}</small><strong>{name}</strong><p>{text}</p>
                  <div>
                    {chips.map((chip) => (
                      <code
                        className={chip.startsWith('Gesicht:') || chip.startsWith('Geste:') ? 'visual' : chip.startsWith('Speicher:') ? 'memory' : 'topic'}
                        key={chip}
                      >
                        {chip}
                      </code>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
        {activeBtPage === 2 && (
          <div className="bt-system-diagram">
            <p>Fünf feste Schnittstellen verbinden den Behavior Tree mit den anderen Teams – alles andere bleibt intern.</p>
            <svg viewBox="0 0 1000 590" role="img" aria-label="Schnittstellen zwischen Behaviour Tree, LLM, Kamera, Face und Mechanik">
              <defs>
                <marker id="btArrowOut" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#4de7ff" /></marker>
                <marker id="btArrowIn" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 Z" fill="#b57eff" /></marker>
              </defs>
              <g className="bt-svg-node"><rect x="405" y="20" width="190" height="70" rx="14" /><text x="500" y="62">LLM-Node</text></g>
              <g className="bt-svg-node"><rect x="30" y="255" width="190" height="70" rx="14" /><text x="125" y="297">Kamera-Node</text></g>
              <g className="bt-svg-node center"><rect x="385" y="245" width="230" height="90" rx="14" /><text x="500" y="282">Behaviour Tree</text><text className="sub" x="500" y="309">der gesamte Baum von oben</text></g>
              <g className="bt-svg-node"><rect x="780" y="255" width="190" height="70" rx="14" /><text x="875" y="297">Face-Node</text></g>
              <g className="bt-svg-node"><rect x="405" y="500" width="190" height="70" rx="14" /><text x="500" y="542">Mechanik-Node</text></g>
              <path className="incoming" d="M465 90 V245" markerEnd="url(#btArrowIn)" />
              <path className="outgoing" d="M535 245 V90" markerEnd="url(#btArrowOut)" />
              <path className="incoming" d="M220 290 H385" markerEnd="url(#btArrowIn)" />
              <path className="outgoing" d="M615 290 H780" markerEnd="url(#btArrowOut)" />
              <path className="outgoing action" d="M465 335 V500" markerEnd="url(#btArrowOut)" />
              <path className="incoming action" d="M535 500 V335" markerEnd="url(#btArrowIn)" />
              <g className="bt-topic in"><rect x="390" y="126" width="150" height="30" rx="15" /><text x="465" y="146">/dialogue_status</text></g>
              <g className="bt-topic out"><rect x="470" y="188" width="130" height="30" rx="15" /><text x="535" y="208">/task_status</text></g>
              <g className="bt-topic in"><rect x="232" y="250" width="150" height="30" rx="15" /><text x="307" y="270">/person_detected</text></g>
              <g className="bt-topic out"><rect x="620" y="250" width="110" height="30" rx="15" /><text x="675" y="270">/emotion</text></g>
              <g className="bt-topic out"><rect x="390" y="378" width="150" height="30" rx="15" /><text x="465" y="398">/motion (Goal)</text></g>
              <g className="bt-topic in"><rect x="470" y="440" width="160" height="30" rx="15" /><text x="550" y="460">Result / Feedback</text></g>
            </svg>
            <div className="bt-legend"><span>Türkis: geht vom Baum nach außen</span><span>Violett: kommt zum Baum</span><span>Gestrichelt: Action mit Rückmeldung</span></div>
          </div>
        )}
        {activeBtPage === 3 && (
          <div className="bt-live-page">
            <div className="bt-live-facts">
              {behaviourTreeContent.liveFacts.map(([label, value]) => <article key={label}><span>{label}</span><code>{value}</code></article>)}
            </div>
            <div className="bt-live-layout">
              <figure className="group-video-frame">
                <video autoPlay muted loop playsInline controls preload="metadata" aria-label={t.groupVideo.caption}>
                  <source src="/project-assets/team-contribution.mp4" type="video/mp4" />
                </video>
                <figcaption>{t.groupVideo.caption}</figcaption>
              </figure>
              <div className="bt-watch">
                <h3>Worauf achten</h3>
                {behaviourTreeContent.watch.map((item) => <p key={item}>— {item}</p>)}
                <a href={t.groupVideo.resourceUrl} target="_blank" rel="noreferrer">
                  {t.groupVideo.resourceText} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function MotorGuiSection() {
  const [activePage, setActivePage] = useState(0);
  const tabs = ['01 · Ziel', '02 · Architektur', '03 · Bedienung', '04 · Demo', '05 · Kurzfassung'];
  const features = [
    ['Motor auswählen', 'Jeder Motor wird in der GUI als eigener Bereich angezeigt.'],
    ['Winkel einstellen', 'Der Slider zeigt die Zielposition in Grad an, zum Beispiel 10°, 13° oder 20°.'],
    ['Bewegen', 'Beim Klick auf „Bewegen“ wird der Bewegungsauftrag an die Motion Node gesendet.'],
    ['Reset', 'Der Motor kann wieder auf seine Standardposition zurückgesetzt werden.'],
    ['Feedback', 'Wenn Feedback verfügbar ist, zeigt die GUI die aktuelle Position des Motors an.'],
  ];
  const demoSteps = [
    ['Motion Node starten', 'Die Motion Node verarbeitet die Befehle der GUI.'],
    ['GUI starten', 'Streamlit im Browser öffnen.'],
    ['Motor wählen', 'Zum Beispiel turn_head_motor.'],
    ['Winkel setzen', 'Kleine Werte nutzen, zum Beispiel 10° oder 20°.'],
    ['Prüfen', 'Bewegung oder /joint_trajectory kontrollieren.'],
  ];

  return (
    <section className="section-band motor-gui-section scroll-scene" data-scene-index="7" id="motor-gui">
      <div className="motor-gui-header">
        <div>
          <span className="section-kicker">MOTION NODE · GRUPPENBEITRAG</span>
          <h2>Streamlit Motor GUI</h2>
        </div>
        <p>Eine einfache Oberfläche zur Steuerung der pib-Motoren über einen zentralen, einheitlichen Bewegungsweg.</p>
        <div className="motor-gui-tags"><code>ROS 2</code><code>Streamlit</code><code>Motion Node</code></div>
      </div>

      <div className="motor-gui-tabs" role="tablist" aria-label="Motor-GUI-Dokumentation">
        {tabs.map((tab, index) => (
          <button className={activePage === index ? 'active' : ''} key={tab} onClick={() => setActivePage(index)} type="button">
            {tab}
          </button>
        ))}
      </div>

      <div className="motor-gui-panel">
        {activePage === 0 && (
          <div className="motor-goals">
            <div className="motor-panel-heading"><span>01 · Ziel</span><h3>Was die Lösung macht</h3></div>
            <div className="motor-goal-grid">
              <article><span>01</span><h4>Eine GUI</h4><p>Die Motoren können über eine gemeinsame Oberfläche gesteuert werden. Der Benutzer arbeitet direkt mit Motoren und Zielwinkeln.</p></article>
              <article><span>02</span><h4>Ein Bewegungsweg</h4><p>Die Bewegungsbefehle laufen über die Motion Node. Dadurch ist der Ablauf klar und einheitlich.</p></article>
              <article><span>03</span><h4>Einfach bedienbar</h4><p>Die Zielposition wird in Grad angezeigt. Das ist für Demo und Tests leichter verständlich.</p></article>
            </div>
          </div>
        )}

        {activePage === 1 && (
          <div className="motor-architecture">
            <div className="motor-panel-heading violet"><span>02 · Architektur</span><h3>Aktueller Bewegungsweg</h3></div>
            <div className="motor-flow">
              {[
                ['Streamlit GUI', 'Motor auswählen und Winkel setzen'],
                ['motion/run', 'Bewegungsauftrag als Action'],
                ['Motion Node', 'verarbeitet den Befehl zentral'],
                ['/joint_trajectory', 'Ausgabe für Simulation oder Roboter'],
              ].map(([title, text], index) => (
                <React.Fragment key={title}>
                  <article><strong>{title}</strong><span>{text}</span></article>
                  {index < 3 && <ArrowRight className="motor-flow-arrow" aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
            <p className="motor-note">Die GUI bleibt einfach. Die zentrale Verarbeitung passiert über die Motion Node.</p>
            <div className="motion-architecture-detail">
              <div className="motion-architecture-copy">
                <span className="section-kicker">AUFBAU DER MOTION-ARCHITEKTUR</span>
                <h4>Von der Anfrage bis zur Gelenkbewegung</h4>
                <div className="motion-architecture-cards">
                  <article>
                    <code>01</code>
                    <div><strong>Motion Node als Zentrale</strong><p>Nimmt Bewegungsanfragen entgegen, analysiert die benötigten Gelenke und startet den passenden Motion Executor.</p></div>
                  </article>
                  <article>
                    <code>02</code>
                    <div><strong>Parallele Bewegungen</strong><p>Mehrere Bewegungen laufen gleichzeitig, solange sie unterschiedliche Gelenke verwenden. Bei Überschneidungen wird die vorherige Bewegung ersetzt.</p></div>
                  </article>
                  <article>
                    <code>03</code>
                    <div><strong>Motion Executors</strong><p>Spezialisierte Executors enthalten die Bewegungslogik – zum Beispiel für statische Sequenzen oder Greifaktionen.</p></div>
                  </article>
                  <article>
                    <code>04</code>
                    <div><strong>Inverse Kinematics</strong><p>IK berechnet aus einem räumlichen Zielpunkt die passenden Gelenkwinkel. Point-at und Grab können dadurch direkt einen Punkt anfahren.</p></div>
                  </article>
                </div>
              </div>
              <figure className="motion-wave-demo">
                <div className="motion-video-status"><span><i /> SIMULATION</span><code>WAVE ACTION</code></div>
                <video autoPlay controls loop muted playsInline preload="metadata">
                  <source src="/project-assets/motion-wave-simulation.mp4" type="video/mp4" />
                </video>
                <figcaption>
                  <div><strong>Beispiel: Winken</strong><span>Motion Node starten und anschließend die Wave-Aktion senden.</span></div>
                  <code>motion/run → wave</code>
                </figcaption>
              </figure>
            </div>
          </div>
        )}

        {activePage === 2 && (
          <div className="motor-features">
            <div className="motor-panel-heading amber"><span>03 · GUI</span><h3>Bedienung der Oberfläche</h3></div>
            <div className="motor-feature-list">
              {features.map(([name, description], index) => (
                <article key={name}><span>{String(index + 1).padStart(2, '0')}</span><strong>{name}</strong><p>{description}</p></article>
              ))}
            </div>
          </div>
        )}

        {activePage === 3 && (
          <div className="motor-demo">
            <div className="motor-panel-heading coral"><span>04 · Demo</span><h3>Wie ich es zeigen kann</h3></div>
            <div className="motor-demo-steps">
              {demoSteps.map(([title, text], index) => (
                <article key={title}><span>{index + 1}</span><h4>{title}</h4><p>{text}</p></article>
              ))}
            </div>
            <code className="motor-command">Streamlit-GUI → motion/run → Motion Node → /joint_trajectory</code>
          </div>
        )}

        {activePage === 4 && (
          <div className="motor-summary">
            <div className="motor-panel-heading"><span>05 · Kurz erklärt</span><h3>Kurzfassung für die Präsentation</h3></div>
            <blockquote>
              Die Streamlit-GUI dient zur einfachen Steuerung der pib-Motoren. Der Benutzer wählt einen Motor aus,
              stellt den Zielwinkel in Grad ein und startet die Bewegung. Der Bewegungsbefehl wird über
              <code> motion/run </code> an die Motion Node gesendet. Die Motion Node verarbeitet den Befehl und
              veröffentlicht die Bewegung anschließend über <code>/joint_trajectory</code>. So kann derselbe Ablauf
              für Demo, Simulation oder echten Roboter genutzt werden.
            </blockquote>
          </div>
        )}

        {activePage === 5 && (
          <div className="robot-simulation-page">
            <div className="robot-simulation-copy">
              <div className="motor-panel-heading violet"><span>06 · WEBOTS-SIMULATION</span><h3>Der Roboter – vollständig simuliert.</h3></div>
              <p className="robot-simulation-lead">
                Bewegungen, Kamera und Greifaktionen können entwickelt und getestet werden, ohne ständig den echten Roboter zu benötigen.
                Die vollständige pib-Simulation basiert auf Webots und läuft reproduzierbar in einem Docker-Container.
              </p>
              <div className="robot-simulation-facts">
                <article><span>01</span><div><strong>Ein Befehl, keine Installation</strong><p>Jedes Teammitglied startet den Docker-Container und betrachtet die Simulation direkt im Browser.</p></div></article>
                <article><span>02</span><div><strong>Digitaler pib-Roboter</strong><p>Kopf, Arme, Hände, Finger und Kopfkamera bilden die echte Hardware mit allen beweglichen Gelenken nach.</p></div></article>
                <article><span>03</span><div><strong>Gleiche ROS2-Schnittstellen</strong><p>Bewegungsbefehle und Gelenkzustände sind identisch. Motion, Bildverarbeitung und Greiflogik funktionieren deshalb unverändert.</p></div></article>
                <article><span>04</span><div><strong>Sicher entwickeln</strong><p>Neue Bewegungen und Greifabläufe werden gefahrlos getestet, bevor sie auf dem echten Roboter ausgeführt werden.</p></div></article>
              </div>
              <div className="robot-simulation-flow">
                <span>Kamera erkennt Flasche</span><ArrowRight /><span>IK berechnet Griffpunkt</span><ArrowRight /><span>Arm greift &amp; hebt</span>
              </div>
            </div>
            <figure className="robot-simulation-video">
              <div className="motion-video-status"><span><i /> WEBOTS LIVE</span><code>PICK-UP SEQUENCE</code></div>
              <video autoPlay controls loop muted playsInline preload="metadata">
                <source src="/project-assets/sim-pick-up-720p.mp4" type="video/mp4" />
                <source src="/project-assets/sim-pick-up-720p.mov" type="video/quicktime" />
              </video>
              <figcaption>
                <div><strong>Simulation: Flasche aufheben</strong><span>Kamera → Inverse Kinematik → Armbewegung → Greifaktion</span></div>
                <code>Docker · Webots · ROS 2</code>
              </figcaption>
            </figure>
          </div>
        )}

        {activePage === 6 && (
          <div className="selector-page">
            <figure className="selector-diagram">
              <div className="motion-video-status"><span><i /> SELECTOR NODE</span><code>ROS 2 FLOW</code></div>
              <img src="/project-assets/selector-architecture.png" alt="Architektur des Selector-Nodes zwischen Bestellung, Kamera, TF, Motion Node und Roboter" />
              <figcaption>Zusammenspiel von Bestellung, Objekterkennung, Gelenkpositionen und Motion Node.</figcaption>
            </figure>
            <div className="selector-copy">
              <span className="section-kicker">07 · SELECTOR-NODE</span>
              <h3>Die passende Bewegung für das erkannte Objekt.</h3>
              <p>Der Selector verbindet die erkannte Bestellung mit den aktuellen Objekt- und Roboterpositionen. Daraus wählt er die passende Armbewegung aus.</p>
              <div className="selector-steps">
                <article><span>01</span><div><strong>Bestellung empfangen</strong><p>Team 2 startet über <code>/motion</code> die gewünschte Aktion.</p></div></article>
                <article><span>02</span><div><strong>Objektposition übernehmen</strong><p><code>/vision/detected_objects_3d_base</code> liefert erkannte Objekte im Roboterrahmen.</p></div></article>
                <article><span>03</span><div><strong>Roboterzustand prüfen</strong><p>TF und der State Publisher liefern Schulter-, Hand- und Gelenkpositionen.</p></div></article>
                <article><span>04</span><div><strong>Motion ausführen</strong><p>Der Selector startet <code>/motion/run</code>; die Motion Node publiziert <code>/joint_trajectory</code>.</p></div></article>
              </div>
              <div className="selector-result"><ArrowRight size={18} /><span>Ergebnis: Der Roboter zeigt mit dem passenden Arm auf das Getränk.</span></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function SimulationSection() {
  return (
    <section className="section-band standalone-detail-section scroll-scene" data-scene-index="3" id="simulation">
      <div className="standalone-header">
        <div><span className="section-kicker">WEBOTS · DOCKER · ROS 2</span><h2>Simulation des Roboters.</h2></div>
        <p>Der vollständige pib-Roboter kann mit Kamera, Gelenken und Greifaktionen gefahrlos entwickelt und getestet werden.</p>
        <div className="motor-gui-tags"><code>Webots</code><code>Docker</code><code>Digital Twin</code></div>
      </div>
      <div className="standalone-panel robot-simulation-page">
        <div className="robot-simulation-copy">
          <div className="motor-panel-heading violet"><span>04 · SIMULATION</span><h3>Der Roboter – vollständig simuliert.</h3></div>
          <p className="robot-simulation-lead">Die pib-Simulation läuft reproduzierbar in einem Docker-Container. Jedes Teammitglied kann sie mit einem Befehl starten und direkt im Browser betrachten.</p>
          <div className="robot-simulation-facts">
            <article><span>01</span><div><strong>Keine lokale Installation</strong><p>Docker startet Webots und den benötigten ROS2-Stack reproduzierbar.</p></div></article>
            <article><span>02</span><div><strong>Digitaler pib</strong><p>Kopf, Arme, Hände, Finger und Kopfkamera bilden die echte Hardware nach.</p></div></article>
            <article><span>03</span><div><strong>Gleiche Schnittstellen</strong><p>Motion, Bildverarbeitung und Greiflogik arbeiten wie am realen Roboter.</p></div></article>
            <article><span>04</span><div><strong>Sicher testen</strong><p>Neue Bewegungen werden zuerst gefahrlos in der Simulation erprobt.</p></div></article>
          </div>
          <div className="robot-simulation-flow"><span>Kamera erkennt Flasche</span><ArrowRight /><span>IK berechnet Griffpunkt</span><ArrowRight /><span>Arm greift &amp; hebt</span></div>
        </div>
        <figure className="robot-simulation-video">
          <div className="motion-video-status"><span><i /> WEBOTS LIVE</span><code>PICK-UP SEQUENCE</code></div>
          <video autoPlay controls loop muted playsInline preload="metadata">
            <source src="/project-assets/sim-pick-up-720p.mp4" type="video/mp4" />
            <source src="/project-assets/sim-pick-up-720p.mov" type="video/quicktime" />
          </video>
          <figcaption><div><strong>Simulation: Flasche aufheben</strong><span>Kamera → IK → Armbewegung → Greifaktion</span></div><code>Docker · Webots · ROS 2</code></figcaption>
        </figure>
      </div>
    </section>
  );
}

function SelectorSection() {
  return (
    <section className="section-band standalone-detail-section scroll-scene" data-scene-index="5" id="selector">
      <div className="standalone-header">
        <div><span className="section-kicker">SELECTOR · ROS 2</span><h2>Die passende Bewegung auswählen.</h2></div>
        <p>Der Selector verbindet Bestellung, erkannte Objektpositionen und den aktuellen Roboterzustand mit der Motion Node.</p>
        <div className="motor-gui-tags"><code>/motion</code><code>/tf</code><code>/motion/run</code></div>
      </div>
      <div className="standalone-panel selector-page">
        <figure className="selector-diagram">
          <div className="motion-video-status"><span><i /> SELECTOR NODE</span><code>ROS 2 FLOW</code></div>
          <img src="/project-assets/selector-architecture.png" alt="Architektur des Selector-Nodes" />
          <figcaption>Bestellung, Objekterkennung, TF, Motion Node und Roboter.</figcaption>
        </figure>
        <div className="selector-copy">
          <span className="section-kicker">06 · SELECTOR-NODE</span><h3>Vom erkannten Getränk zur Armbewegung.</h3>
          <p>Der Selector nutzt die Bestellung und die transformierten Objektpositionen, um den passenden Arm und die passende Zielbewegung zu bestimmen.</p>
          <div className="selector-steps">
            <article><span>01</span><div><strong>Bestellung</strong><p>Die gewünschte Aktion kommt über <code>/motion</code>.</p></div></article>
            <article><span>02</span><div><strong>Objektposition</strong><p><code>/vision/detected_objects_3d_base</code> liefert 3D-Ziele.</p></div></article>
            <article><span>03</span><div><strong>Roboterzustand</strong><p>TF liefert Schulter-, Hand- und Gelenkpositionen.</p></div></article>
            <article><span>04</span><div><strong>Ausführung</strong><p><code>/motion/run</code> startet die Bewegung.</p></div></article>
          </div>
          <div className="selector-result"><ArrowRight size={18} /><span>Der Roboter zeigt mit dem passenden Arm auf das Getränk.</span></div>
        </div>
      </div>
    </section>
  );
}

function MotionSequenceSection() {
  return (
    <section className="section-band standalone-detail-section scroll-scene" data-scene-index="6" id="motion-sequence">
      <div className="standalone-header">
        <div><span className="section-kicker">MOTION SEQUENCE NODE</span><h2>Von der Anfrage zur Gelenkbewegung.</h2></div>
        <p>Die Motion Node analysiert benötigte Gelenke, startet spezialisierte Executors und koordiniert parallele Bewegungen.</p>
        <div className="motor-gui-tags"><code>Executors</code><code>IK</code><code>/joint_trajectory</code></div>
      </div>
      <div className="standalone-panel motion-architecture-detail">
        <div className="motion-architecture-copy">
          <span className="section-kicker">07 · MOTION-ARCHITEKTUR</span><h4>Motion Sequence Node</h4>
          <div className="motion-architecture-cards">
            <article><code>01</code><div><strong>Zentrale Motion Node</strong><p>Nimmt Anfragen entgegen, analysiert Gelenke und startet den passenden Executor.</p></div></article>
            <article><code>02</code><div><strong>Parallele Bewegungen</strong><p>Bewegungen laufen gleichzeitig, solange sie keine gleichen Gelenke verwenden.</p></div></article>
            <article><code>03</code><div><strong>Motion Executors</strong><p>Spezialisierte Logik steuert statische Sequenzen und Greifaktionen.</p></div></article>
            <article><code>04</code><div><strong>Inverse Kinematics</strong><p>IK berechnet aus einem Zielpunkt die benötigten Gelenkwinkel.</p></div></article>
          </div>
        </div>
        <figure className="motion-wave-demo">
          <div className="motion-video-status"><span><i /> SIMULATION</span><code>WAVE ACTION</code></div>
          <video autoPlay controls loop muted playsInline preload="metadata"><source src="/project-assets/motion-wave-simulation.mp4" type="video/mp4" /></video>
          <figcaption><div><strong>Beispiel: Winken</strong><span>Motion Node starten und Wave-Aktion senden.</span></div><code>motion/run → wave</code></figcaption>
        </figure>
      </div>
    </section>
  );
}

function CameraTfSection() {
  const [activePage, setActivePage] = useState(0);
  const tabs = ['01 · Kameraquellen', '02 · 3D-Objekterkennung', '03 · TF-Transformation'];

  return (
    <section className="section-band camera-tf-section scroll-scene" data-scene-index="4" id="camera-tf">
      <div className="camera-tf-header">
        <div><span className="section-kicker">KAMERA · OBJEKTERKENNUNG · TF</span><h2>Von Pixeln zu Positionen.</h2></div>
        <p>RGB- und Tiefendaten werden zu räumlichen Objekten – und anschließend in ein gemeinsames Roboter-Koordinatensystem transformiert.</p>
        <div className="camera-tf-tags"><code>Webots</code><code>OAK-D Lite</code><code>YOLO</code><code>TF</code></div>
      </div>

      <div className="camera-tf-tabs" role="tablist" aria-label="Kamera- und TF-Dokumentation">
        {tabs.map((tab, index) => (
          <button className={activePage === index ? 'active' : ''} key={tab} onClick={() => setActivePage(index)} type="button">{tab}</button>
        ))}
      </div>

      <div className="camera-tf-panel">
        {activePage === 0 && (
          <div className="camera-source-page">
            <figure className="camera-tf-visual">
              <div className="camera-tf-visual-status"><span><i /> WEBOTS CAMERA</span><code>RGB + DEPTH</code></div>
              <img src="/project-assets/camera-webots-rgb-depth.png" alt="Sicht des Roboters in Webots mit RGB- und Tiefenbild" />
              <figcaption>Abbildung 1 · Robotersicht in Webots mit RGB- und Tiefenbild</figcaption>
            </figure>
            <div className="camera-tf-copy">
              <span className="section-kicker">FOLIE 01 · KAMERA</span><h3>Zwei Umgebungen, dieselbe Datenbasis.</h3>
              <div className="camera-compare">
                <article><Eye /><div><strong>Webots-Simulation</strong><p>Eine virtuelle Kamera liefert RGB-Bilder. Ein Tiefensensor ergänzt die Entfernung der sichtbaren Bildbereiche.</p><code>RGB + Depth → ROS 2</code></div></article>
                <article><Radar /><div><strong>Realer Roboter</strong><p>Die OAK-D Lite kombiniert RGB mit Stereo-Tiefe. Das YOLO-Modell läuft direkt auf der Kamerahardware.</p><code>OAK-D Lite · Edge AI</code></div></article>
              </div>
              <p className="camera-tf-note">Bild- und Tiefendaten werden über ROS-2-Topics an die Detektions-Node übertragen. Die restliche Verarbeitung bleibt für Simulation und Hardware gleich.</p>
            </div>
          </div>
        )}

        {activePage === 1 && (
          <div className="camera-detection-page">
            <figure className="camera-tf-visual detection">
              <div className="camera-tf-visual-status"><span><i /> YOLO DETECTION</span><code>3D LOCALIZATION</code></div>
              <img src="/project-assets/camera-yolo-detection.png" alt="Objekterkennung mit Klassen, Bounding Boxes, Sicherheit und Entfernung" />
              <figcaption>Abbildung 2 · Klassen, Bounding Boxes, Sicherheit und Entfernung</figcaption>
            </figure>
            <div className="camera-tf-copy">
              <span className="section-kicker">FOLIE 02 · DETEKTION</span><h3>Aus einer 2D-Box wird ein 3D-Objekt.</h3>
              <div className="detection-flow">
                <article><span>01</span><strong>YOLO</strong><p>erkennt Klasse, Position, Bounding Box und Sicherheit</p></article>
                <ArrowRight />
                <article><span>02</span><strong>Tiefendaten</strong><p>lokalisieren die Erkennung räumlich</p></article>
                <ArrowRight />
                <article><span>03</span><strong>Detection3DArray</strong><p>publiziert Position, Größe und 3D-Bounding-Box</p></article>
              </div>
              <div className="detection-output">
                <code>vision_msgs/Detection3DArray</code>
                <ul><li>Objektklasse und Erkennungssicherheit</li><li>Dreidimensionale Position</li><li>Größe und 3D-Bounding-Box</li></ul>
              </div>
              <p className="camera-tf-note">Bei Personen werden zusätzlich eine Nachricht und Bilddaten für die spätere Personenerkennung veröffentlicht.</p>
            </div>
          </div>
        )}

        {activePage === 2 && (
          <div className="camera-transform-page">
            <figure className="camera-tf-visual tf">
              <div className="camera-tf-visual-status"><span><i /> RVIZ TF TREE</span><code>base_link</code></div>
              <img src="/project-assets/camera-tf-rviz.png" alt="Robotermodell und TF-Koordinatensysteme in RViz" />
              <figcaption>Abbildung 3 · Robotermodell und ausgewählte TF-Koordinatensysteme</figcaption>
            </figure>
            <div className="camera-tf-copy">
              <span className="section-kicker">FOLIE 03 · TRANSFORMATION</span><h3>Ein gemeinsamer Referenzrahmen.</h3>
              <div className="tf-transform-chain">
                <div><code>camera_frame</code><span>Position relativ zur Kamera</span></div><ArrowRight /><div className="active"><code>base_link</code><span>Fester Roboterrahmen</span></div><ArrowRight /><div><code>Selector</code><span>Aufgabenverarbeitung</span></div>
              </div>
              <div className="tf-points">
                <article><strong>Transformation</strong><p>Die TF-Node transformiert jede 3D-Detektion in <code>base_link</code>. Kameraausrichtung und -position spielen danach keine Rolle mehr.</p></article>
                <article><strong>Robotermodell</strong><p>TF beschreibt die Beziehungen zwischen allen Links und bestimmt beispielsweise die Position einer Hand oder eines Endeffektors.</p></article>
                <article><strong>Übergabe</strong><p>Die transformierten Detektionen werden erneut publiziert. Der Selector speichert sie für die weitere Aufgabenverarbeitung.</p></article>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function EmotionsSection({ language }) {
  const content = {
    de: {
      kicker: 'FACE-NODE · ROBOTERKOMMUNIKATION',
      title: 'Emotionen sichtbar machen.',
      intro: 'Ein browserbasiertes Robotergesicht mit Augen, Augenbrauen und Mund. Sieben Zustände zeigen dem Gast den Systemstatus; der Blickfokus folgt dynamisch einer Person.',
      topic: 'ROS-2-Ausgabe',
      states: {
        happy: ['Fröhlich', 'Begrüßung oder erfolgreiche Bestellung', 'Der Roboter wirkt freundlich und bestätigt einen positiven Ablauf.'],
        listening: ['Hört zu', 'Spracheingabe ist aktiv', 'Der Gast erkennt sofort, dass der Roboter auf seine Aussage wartet.'],
        thinking: ['Denkt nach', 'Anfrage wird verarbeitet', 'Diese Anzeige überbrückt die Wartezeit während der internen Verarbeitung.'],
        talking: ['Spricht', 'Sprachausgabe läuft', 'Das animierte Gesicht begleitet die gesprochene Antwort des Roboters.'],
        confused: ['Unsicher', 'Eingabe wurde nicht verstanden', 'Der Roboter signalisiert, dass er eine Wiederholung oder Klärung benötigt.'],
        error: ['Fehler', 'Technischer Fehler oder Abbruch', 'Eine deutlich erkennbare Warnanzeige macht den Fehlerzustand sichtbar.'],
        neutral: ['Bereit', 'Warten auf den nächsten Gast', 'Der neutrale Zustand zeigt, dass das System aktiv und einsatzbereit ist.'],
      },
    },
    en: {
      kicker: 'FACE NODE · ROBOT COMMUNICATION',
      title: 'Making emotions visible.',
      intro: 'The face immediately communicates what the robot is doing, making its system state understandable without technical knowledge.',
      topic: 'ROS 2 output',
      states: {
        happy: ['Happy', 'Greeting or successful order', 'The robot appears friendly and confirms a successful interaction.'],
        listening: ['Listening', 'Speech input is active', 'The guest can see that the robot is waiting for their request.'],
        thinking: ['Thinking', 'Request is being processed', 'This state bridges the waiting time during internal processing.'],
        talking: ['Talking', 'Speech output is active', 'The animated face accompanies the robot’s spoken response.'],
        confused: ['Confused', 'Input was not understood', 'The robot signals that it needs repetition or clarification.'],
        error: ['Error', 'Technical problem or cancellation', 'A clear warning display makes the error state visible.'],
        neutral: ['Ready', 'Waiting for the next guest', 'The neutral state shows that the system is active and ready.'],
      },
    },
  };
  const copy = content[language] || content.de;
  const [activeEmotionPage, setActiveEmotionPage] = useState(0);
  const [activeEmotion, setActiveEmotion] = useState('happy');
  const emotionDisplayRef = useRef(null);
  const [title, useCase, explanation] = copy.states[activeEmotion];
  const sendToEmotionDisplay = (message) => {
    emotionDisplayRef.current?.contentWindow?.postMessage(message, window.location.origin);
  };

  useEffect(() => {
    sendToEmotionDisplay({ type: 'emotion', emotion: activeEmotion });
  }, [activeEmotion]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveEmotion((current) => {
        const currentIndex = projectEmotions.findIndex(([emotion]) => emotion === current);
        return projectEmotions[(currentIndex + 1) % projectEmotions.length][0];
      });
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const focusSequence = [
      { x: 0, y: 0 },
      { x: -0.65, y: 0 },
      { x: 0.65, y: 0 },
      { x: 0, y: -0.45 },
      { x: 0, y: 0.35 },
    ];
    let focusIndex = 0;
    const timer = window.setInterval(() => {
      focusIndex = (focusIndex + 1) % focusSequence.length;
      sendToEmotionDisplay({ type: 'focus', ...focusSequence[focusIndex] });
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="section-band emotions-section scroll-scene" data-scene-index="12" id="emotions">
      <div className="emotions-header">
        <div><span className="section-kicker">{copy.kicker}</span><h2>{copy.title}</h2></div>
        <p>{copy.intro}</p>
        <div className="emotions-topic"><span>{copy.topic}</span><code>/emotion: {activeEmotion}</code></div>
      </div>

      <div className="emotions-tabs" role="tablist" aria-label="Emotion-Display-Präsentation">
        <button className={activeEmotionPage === 0 ? 'active' : ''} onClick={() => setActiveEmotionPage(0)} type="button">
          01 · Was ist das Emotion Display?
        </button>
        <button className={activeEmotionPage === 1 ? 'active' : ''} onClick={() => setActiveEmotionPage(1)} type="button">
          02 · Wie funktioniert es?
        </button>
      </div>

      {activeEmotionPage === 0 && <div className="emotions-stage">
        <div className="emotion-presentation">
          <div className="emotion-screen">
            <div className="emotion-screen-status" aria-hidden="true">
              <span><i /> LIVE DISPLAY</span>
              <code>FACE_NODE · 60 FPS</code>
            </div>
            <iframe
              ref={emotionDisplayRef}
              src="/project-assets/emotion-display/index.html"
              title="Originales animiertes Emotion Display"
              onLoad={() => {
                sendToEmotionDisplay({ type: 'emotion', emotion: activeEmotion });
                sendToEmotionDisplay({ type: 'focus', x: 0, y: 0 });
              }}
            />
            <span className={`emotion-live-dot emotion-${activeEmotion}`} />
          </div>
          <div className="emotion-explanation">
            <span>{String(projectEmotions.findIndex(([name]) => name === activeEmotion) + 1).padStart(2, '0')} · {activeEmotion}</span>
            <h3>{title}</h3>
            <strong>{useCase}</strong>
            <p>{explanation}</p>
            <div className="emotion-signal-flow" aria-hidden="true">
              <span>ROS 2</span><i /><code>/emotion</code><i /><span>FACE</span>
            </div>
            <div className="emotion-levels" aria-hidden="true">
              <i /><i /><i /><i /><i /><i /><i /><i />
            </div>
          </div>
        </div>

        <div className="emotion-selector">
          {projectEmotions.map(([emotion]) => {
            const [stateTitle, stateUse] = copy.states[emotion];
            return (
              <button className={activeEmotion === emotion ? 'active' : ''} key={emotion} onClick={() => setActiveEmotion(emotion)} type="button">
                <span className="emotion-mini-preview" aria-hidden="true">
                  <iframe
                    src={`/project-assets/emotion-display/index.html?emotion=${emotion}`}
                    title={`Animierte Vorschau: ${stateTitle}`}
                    tabIndex="-1"
                  />
                </span>
                <span><strong>{stateTitle}</strong><small>{stateUse}</small></span>
              </button>
            );
          })}
        </div>
      </div>}

      {activeEmotionPage === 1 && (
        <div className="emotion-architecture-page">
          <div className="emotion-architecture-visual">
            <div className="emotion-architecture-label"><span><i /> LIVE ARCHITEKTUR</span><code>localhost:8080</code></div>
            <img src="/project-assets/emotion-display-architecture.png" alt="Architektur des Emotion Displays von ROS2-Topics über FastAPI und WebSocket bis zum Roboter-Gesicht" />
          </div>
          <div className="emotion-architecture-copy">
            <span className="section-kicker">FOLIE 02 · SYSTEMABLAUF</span>
            <h3>Wie funktioniert es?</h3>
            <div className="emotion-architecture-points">
              <article><code>01</code><div><strong>Zwei ROS2-Topics</strong><p>Die Node abonniert <b>/emotion</b> und <b>/display/focus</b>.</p></div></article>
              <article><code>02</code><div><strong>FastAPI-Webserver</strong><p>Der Webserver läuft parallel in einem Hintergrund-Thread.</p></div></article>
              <article><code>03</code><div><strong>Live per WebSocket</strong><p>Jede Änderung wird sofort an alle verbundenen Browser übertragen.</p></div></article>
              <article><code>04</code><div><strong>Ohne Neuladen</strong><p>Der Browser öffnet <b>localhost:8080</b> und aktualisiert das Gesicht automatisch.</p></div></article>
            </div>
            <div className="emotion-tech-stack"><code>ROS 2</code><code>FastAPI</code><code>WebSocket</code><code>Browser</code></div>
          </div>
        </div>
      )}
    </section>
  );
}

function ShowcaseSection({ t }) {
  return (
    <section className="showcase section-band scroll-scene" data-scene-index="10" id="scene-5">
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
    <section className="section-band live-system scroll-scene" data-scene-index="11" id="scene-6">
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
    <section className="section-band scroll-scene" data-scene-index="12" id="architecture">
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
    <section className="section-band tech-section scroll-scene" data-scene-index="13" id="scene-8">
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
    <section className="section-band highlights scroll-scene" data-scene-index="14" id="scene-9">
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
  const renderPerson = ([initials, name, role]) => (
    <article className="team-person" key={name}>
      <span>{initials}</span>
      <div><h3>{name}</h3><p>{role}</p></div>
    </article>
  );

  return (
    <section className="section-band team-section scroll-scene" data-scene-index="13" id="team">
      <div className="section-heading">
        <span className="section-kicker">{t.team.kicker}</span>
        <h2>{t.team.title}</h2>
      </div>
      <div className="team-roster">
        <div className="team-group">
          <div className="team-group-title"><Users size={18} /><span>{t.team.studentsLabel}</span><code>{t.team.members.length}</code></div>
          <div className="team-members-grid">{t.team.members.map(renderPerson)}</div>
        </div>
        <div className="team-group teachers">
          <div className="team-group-title"><Sparkles size={18} /><span>{t.team.teachersLabel}</span><code>{t.team.teachers.length}</code></div>
          <div className="team-teachers-grid">{t.team.teachers.map(renderPerson)}</div>
        </div>
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
      <HardwareSection sceneIndex={2} />
      <SimulationSection />
      <CameraTfSection />
      <SelectorSection />
      <MotionSequenceSection />
      <MotorGuiSection />
      <WorkflowSection t={t} />
      <ModulesSection t={t} language={activeLanguage} />
      <FaceTriggerSection />
      <GroupVideoSection t={t} />
      <EmotionsSection language={activeLanguage} />
      <TeamSection t={t} />
      <Footer t={t} />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

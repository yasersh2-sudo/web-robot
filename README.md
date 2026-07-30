# Barkeeper Robot – Präsentationswebsite

Interaktive Präsentationswebsite für den Barkeeper-Roboter aus dem Softwaretechnik-Projekt „AI Demonstrator Suite“ der TH Lübeck.

Die Website zeigt den vollständigen Demonstrator: Spracherkennung, Gästewiedererkennung, Behaviour Tree, Robotergesicht, Kameraverarbeitung, Objekterkennung, TF-Transformation, Motion-Architektur und Webots-Simulation.

## Funktionen

- responsive Präsentationsansicht mit Szenen-Navigation
- deutsche und englische Benutzeroberfläche
- interaktive Voice-Demo
- animiertes Emotion Display aus dem echten ROS2-Projekt
- Behaviour-Tree-Dokumentation mit vier Unterseiten
- Motion-GUI, Motion-Architektur und Inverse Kinematics
- Kamera-, YOLO- und TF-Erklärung
- Webots-Simulation mit eingebundenen Videos
- Detailansichten für alle wichtigen ROS2-Module
- automatische Videos, Animationen und Live-Statusanzeigen

## Präsentationsbereiche

1. **Startseite**  
   Überblick über Voice, Vision, Motion und Behaviour Tree mit Demo-Video.

2. **Interaktive Demo**  
   Zeigt beispielhafte Gespräche, Emotionen und ROS2-Ereignisse.

3. **Projektüberblick und Ablauf**  
   Erklärt den vollständigen Ablauf von der Erkennung eines Gastes bis zur Roboteraktion.

4. **Systemmodule**  
   Detailansichten für VoiceNode, STT, LLM, TTS, ReSpeaker, Getränkelogik, GuestMemory, Datenbank, Recognition-Node, Camera Server und VoiceRosNode.

5. **Behaviour Tree**  
   Baumstruktur, Aktionen, Schnittstellen und Live-Dashboard.

6. **Motor GUI und Motion**  
   Streamlit-Oberfläche, Motion Node, parallele Bewegungen, Motion Executors, Inverse Kinematics und Demonstrationsvideos.

7. **Kamera, Objekterkennung und TF**  
   Webots-Kamera, OAK-D Lite, YOLO, `Detection3DArray`, Transformation nach `base_link` und Übergabe an den Selector.

8. **Emotion Display**  
   Originales browserbasiertes Robotergesicht mit sieben Zuständen, Blickfokus, WebSocket und FastAPI.

9. **Webots-Simulation**  
   Simulation des pib-Roboters mit Kamera, Gelenken, Greifaktionen und Pick-up-Sequenz.

## Bilder und Diagramme

### Gesamtarchitektur

![Gesamtarchitektur des Barkeeper-Roboters](public/project-assets/system-architecture.png)

### Behaviour Tree

![Behaviour Tree – BarkeeperRoot](public/project-assets/barkeeperroot.png)

### Voice Module – Gesamtablauf

![Voice Module – vollständiger Gesprächsablauf](public/project-assets/voice_module_gesamtablauf.png)

### Voice Module – Getränkeerkennung

![Voice Module – Getränkeerkennung](public/project-assets/voice_module_getraenkeerkennung.png)

![Getränkeerkennung als Diagramm](public/project-assets/drink-recognition-diagram.svg)

### Voice-Ablauf

![Voice Flow](public/project-assets/voice-flow-diagram.svg)

### DoA und ReSpeaker

![DoA und ReSpeaker](public/project-assets/doa-respeaker-explainer.png)

### Gästespeicher

![GuestMemory](public/project-assets/guest-memory-explainer.png)

### Gästedatenbank

![Schema der Gästedatenbank](public/project-assets/guest-database-schema.png)

### VoiceRosNode

![VoiceRosNode-Architektur](public/project-assets/voice-ros-node-architecture.png)

### Emotion Display – Architektur

![Architektur des Emotion Displays](public/project-assets/emotion-display-architecture.png)

### Emotionen

| Neutral | Listening | Talking |
| --- | --- | --- |
| ![Neutral](public/project-assets/emotions/neutral.png) | ![Listening](public/project-assets/emotions/listening.png) | ![Talking](public/project-assets/emotions/talking.png) |

| Happy | Thinking | Confused | Error |
| --- | --- | --- | --- |
| ![Happy](public/project-assets/emotions/happy.png) | ![Thinking](public/project-assets/emotions/thinking.png) | ![Confused](public/project-assets/emotions/confused.png) | ![Error](public/project-assets/emotions/error.png) |

### Webots-Kamera – RGB und Tiefenbild

![Webots-Simulation mit RGB- und Tiefenbild](public/project-assets/camera-webots-rgb-depth.png)

### YOLO-Objekterkennung

![YOLO-Erkennung mit Bounding Boxes und Entfernung](public/project-assets/camera-yolo-detection.png)

### TF-Koordinatensysteme in RViz

![Robotermodell mit TF-Koordinatensystemen](public/project-assets/camera-tf-rviz.png)

## Videos

Die Videos liegen unter `public/project-assets/` und werden direkt von der Website verwendet.

| Datei | Inhalt |
| --- | --- |
| `hero-demo-recording.mp4` | Demo-Video auf der Startseite |
| `hero-demo-recording.mov` | QuickTime-Fallback der Startseiten-Demo |
| `team-contribution.mp4` | Behaviour-Tree-Gruppenbeitrag |
| `motion-wave-simulation.mp4` | Wave-/Winken-Bewegung in der Simulation |
| `sim-pick-up-720p.mp4` | Aufheben einer Flasche in Webots |
| `sim-pick-up-720p.mov` | QuickTime-Fallback der Pick-up-Simulation |

## Verwendete Technologien

- React 19
- Vite 6
- JavaScript
- CSS
- Lucide Icons
- Three.js
- ROS 2
- FastAPI und WebSocket
- Webots
- Docker

## Voraussetzungen

- Node.js 18 oder neuer
- npm

## Installation

Im Robot-Projekt in den Website-Ordner wechseln:

```bash
cd website
```

Abhängigkeiten installieren:

```bash
npm install
```

## Entwicklungsserver starten

```bash
npm run dev
```

Danach die von Vite angezeigte Adresse öffnen, normalerweise:

```text
http://localhost:5173
```

## Produktions-Build

```bash
npm run build
```

Die fertige Website wird im Ordner `dist/` erzeugt.

Build lokal testen:

```bash
npm run preview
```

## Bedienung

- Mit dem Mausrad, den Pfeiltasten oder der rechten Szenen-Navigation durch die Präsentation wechseln.
- Über **DE / EN** oben rechts die Sprache ändern.
- Karten und Tabs anklicken, um Detailinformationen zu öffnen.
- Emotionen können manuell ausgewählt werden und wechseln zusätzlich automatisch.
- Videos laufen standardmäßig automatisch, stumm und in Endlosschleife.

## Projektstruktur

```text
barkeeper_robot_website/
├── public/
│   └── project-assets/
│       ├── emotion-display/
│       │   ├── anime.iife.min.js
│       │   ├── app.js
│       │   ├── index.html
│       │   ├── mouth_animations.svg
│       │   ├── mustache.svg
│       │   └── style.css
│       ├── emotions/
│       │   ├── confused.png
│       │   ├── error.png
│       │   ├── happy.png
│       │   ├── listening.png
│       │   ├── neutral.png
│       │   ├── talking.png
│       │   └── thinking.png
│       ├── barkeeperroot.png
│       ├── camera-tf-rviz.png
│       ├── camera-webots-rgb-depth.png
│       ├── camera-yolo-detection.png
│       ├── doa-respeaker-explainer.png
│       ├── drink-recognition-diagram.svg
│       ├── emotion-display-architecture.png
│       ├── guest-database-schema.png
│       ├── guest-memory-explainer.png
│       ├── hero-demo-recording.mov
│       ├── hero-demo-recording.mp4
│       ├── motion-wave-simulation.mp4
│       ├── sim-pick-up-720p.mov
│       ├── sim-pick-up-720p.mp4
│       ├── system-architecture.png
│       ├── team-contribution.mp4
│       ├── voice-flow-diagram.svg
│       ├── voice-ros-node-architecture.png
│       ├── voice_module_gesamtablauf.png
│       └── voice_module_getraenkeerkennung.png
├── src/
│   ├── main.jsx                 Inhalte, Komponenten und Präsentationslogik
│   ├── styles.css               Layout, responsive Design und Animationen
│   └── scenes/
│       └── HeroScene.jsx        frühere Three.js-Hero-Szene
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

## Originales Emotion Display

Die Website enthält eine Präsentationsversion des echten `emotion_display`-Pakets. Sie verwendet:

- `/emotion`
- `/display/focus`
- FastAPI
- WebSocket
- Anime.js
- das originale Mund-Spritesheet
- den originalen Schnurrbart

Unterstützte Zustände:

```text
neutral
happy
listening
talking
preparation
confused
error
```

## Änderungen zu GitLab hochladen

```bash
git add .
git commit -m "Website Präsentation aktualisiert"
git push origin main
```

## Hinweise

- Große Medien befinden sich unter `public/project-assets/`.
- Nach Änderungen sollte immer `npm run build` ausgeführt werden.
- Für automatisch startende Videos ist `muted` erforderlich, da Browser Autoplay mit Ton normalerweise blockieren.
- Die Website präsentiert Projektinhalte und ersetzt nicht die einzelnen ROS2-Pakete.

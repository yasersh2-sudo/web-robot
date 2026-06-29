import React from 'react';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 1.12, 6.15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const keyLight = new THREE.PointLight(0x64f4ff, 5, 18);
    keyLight.position.set(-3, 4, 4);
    scene.add(keyLight);

    const pinkLight = new THREE.PointLight(0xff5ba7, 3.2, 14);
    pinkLight.position.set(3.5, 2.5, 2);
    scene.add(pinkLight);
    const frontLight = new THREE.DirectionalLight(0xe8f6ff, 1.55);
    frontLight.position.set(0, 2.2, 4.5);
    scene.add(frontLight);
    scene.add(new THREE.AmbientLight(0x7690a8, 1.5));

    const group = new THREE.Group();
    scene.add(group);

    const metal = new THREE.MeshStandardMaterial({
      color: 0xdde7f0,
      metalness: 0.72,
      roughness: 0.24,
    });
    const dark = new THREE.MeshStandardMaterial({
      color: 0x0c1520,
      metalness: 0.62,
      roughness: 0.2,
    });
    const cyan = new THREE.MeshStandardMaterial({
      color: 0x37e5ff,
      emissive: 0x0e7f91,
      emissiveIntensity: 0.75,
      metalness: 0.15,
      roughness: 0.15,
    });
    const magenta = new THREE.MeshStandardMaterial({
      color: 0xff4f99,
      emissive: 0x8e1747,
      emissiveIntensity: 0.7,
      metalness: 0.2,
      roughness: 0.18,
    });
    const glass = new THREE.MeshPhysicalMaterial({
      color: 0xb9f7ff,
      transmission: 0.52,
      opacity: 0.6,
      transparent: true,
      roughness: 0.04,
      metalness: 0.05,
    });

    const brushed = new THREE.MeshStandardMaterial({
      color: 0xd3e2ed,
      metalness: 0.86,
      roughness: 0.16,
    });
    const rubber = new THREE.MeshStandardMaterial({
      color: 0x070b10,
      metalness: 0.25,
      roughness: 0.38,
    });
    const screen = new THREE.MeshStandardMaterial({
      color: 0x07141d,
      emissive: 0x0b5268,
      emissiveIntensity: 0.28,
      metalness: 0.2,
      roughness: 0.12,
    });
    const colaMat = new THREE.MeshStandardMaterial({
      color: 0xd3223c,
      metalness: 0.42,
      roughness: 0.2,
    });
    const waterMat = new THREE.MeshPhysicalMaterial({
      color: 0x75d9ff,
      transmission: 0.32,
      transparent: true,
      opacity: 0.82,
      metalness: 0.08,
      roughness: 0.04,
    });

    const robot = new THREE.Group();
    robot.scale.setScalar(1.16);
    robot.position.y = 0.12;
    group.add(robot);

    const barTop = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.16, 1.15), rubber);
    barTop.position.set(0, -1.12, 0.22);
    barTop.rotation.x = -0.03;
    robot.add(barTop);

    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.32, 0.42, 64), rubber);
    base.position.y = -0.92;
    robot.add(base);

    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.92, 1.65, 48), brushed);
    torso.position.y = 0.02;
    robot.add(torso);

    const chestPanel = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.48, 0.045), screen);
    chestPanel.position.set(0, 0.22, 0.79);
    robot.add(chestPanel);

    const chestGlow = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.08, 0.055), cyan);
    chestGlow.position.set(0, 0.34, 0.82);
    robot.add(chestGlow);

    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 0.28, 32), dark);
    neck.position.y = 1.0;
    robot.add(neck);

    const head = new THREE.Mesh(new THREE.BoxGeometry(1.08, 0.62, 0.82), brushed);
    head.position.y = 1.42;
    robot.add(head);

    const face = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.28, 0.055), screen);
    face.position.set(0, 1.45, 0.44);
    robot.add(face);

    const leftEye = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.065), cyan);
    leftEye.position.set(-0.23, 1.48, 0.48);
    const rightEye = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.065), cyan);
    rightEye.position.set(0.23, 1.48, 0.48);
    robot.add(leftEye, rightEye);

    const cameraLens = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.045, 32), magenta);
    cameraLens.rotation.x = Math.PI / 2;
    cameraLens.position.set(0, 1.31, 0.48);
    robot.add(cameraLens);

    const sensorTower = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.14, 0.18, 32), dark);
    sensorTower.position.set(0, 1.85, 0);
    const sensorDot = new THREE.Mesh(new THREE.SphereGeometry(0.08, 24, 24), cyan);
    sensorDot.position.set(0, 1.98, 0);
    robot.add(sensorTower, sensorDot);

    const shoulderBar = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.85, 24), dark);
    shoulderBar.rotation.z = Math.PI / 2;
    shoulderBar.position.set(0, 0.76, 0.02);
    robot.add(shoulderBar);

    const leftArm = makeRobotArm(-1);
    const rightArm = makeRobotArm(1);
    robot.add(leftArm, rightArm);

    const colaCan = makeCan(colaMat, cyan);
    colaCan.position.set(-1.45, -0.62, 0.3);
    colaCan.rotation.z = -0.04;
    robot.add(colaCan);

    const waterBottle = makeBottle();
    waterBottle.position.set(1.42, -0.58, 0.3);
    waterBottle.rotation.z = 0.05;
    robot.add(waterBottle);

    const cocktail = makeCocktail();
    cocktail.position.set(0.05, -0.58, 0.52);
    robot.add(cocktail);

    function makeLink(length, radius, material) {
      const link = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.08, length, 24), material);
      link.rotation.x = Math.PI / 2;
      return link;
    }

    function makeRobotArm(side) {
      const arm = new THREE.Group();
      const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.17, 24, 24), dark);
      shoulder.position.set(side * 0.96, 0.74, 0.06);

      const upper = makeLink(0.86, 0.075, brushed);
      upper.rotation.z = side * 0.46;
      upper.position.set(side * 1.18, 0.36, 0.18);

      const elbow = new THREE.Mesh(new THREE.SphereGeometry(0.14, 24, 24), cyan);
      elbow.position.set(side * 1.37, -0.02, 0.32);

      const lower = makeLink(0.78, 0.065, brushed);
      lower.rotation.z = side * -0.72;
      lower.position.set(side * 1.43, -0.42, 0.44);

      const wrist = new THREE.Mesh(new THREE.SphereGeometry(0.1, 24, 24), dark);
      wrist.position.set(side * 1.63, -0.76, 0.5);

      const gripperLeft = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.28, 0.05), cyan);
      gripperLeft.rotation.z = side * 0.28;
      gripperLeft.position.set(side * 1.55, -0.9, 0.55);

      const gripperRight = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.28, 0.05), cyan);
      gripperRight.rotation.z = side * -0.28;
      gripperRight.position.set(side * 1.72, -0.9, 0.55);

      arm.add(shoulder, upper, elbow, lower, wrist, gripperLeft, gripperRight);
      return arm;
    }

    function makeCan(bodyMaterial, accentMaterial) {
      const can = new THREE.Group();
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.58, 32), bodyMaterial);
      const top = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.025, 32), metal);
      top.position.y = 0.3;
      const label = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.13, 0.025), accentMaterial);
      label.position.set(0, 0.02, 0.18);
      can.add(body, top, label);
      return can;
    }

    function makeBottle() {
      const bottle = new THREE.Group();
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.2, 0.72, 32), waterMat);
      const neckBottle = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.24, 24), waterMat);
      neckBottle.position.y = 0.48;
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.07, 24), cyan);
      cap.position.y = 0.64;
      bottle.add(body, neckBottle, cap);
      return bottle;
    }

    function makeCocktail() {
      const drink = new THREE.Group();
      const cup = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.58, 4, 1, true), glass);
      cup.rotation.y = Math.PI / 4;
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.44, 18), brushed);
      stem.position.y = -0.5;
      const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.035, 24), brushed);
      foot.position.y = -0.74;
      const liquid = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.18, 4), magenta);
      liquid.rotation.y = Math.PI / 4;
      liquid.position.y = -0.08;
      drink.add(cup, stem, foot, liquid);
      return drink;
    }

    const rings = [];
    for (let i = 0; i < 3; i += 1) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.85 + i * 0.42, 0.008, 12, 120),
        new THREE.MeshBasicMaterial({ color: i % 2 ? 0xff5ba7 : 0x37e5ff, transparent: true, opacity: 0.55 })
      );
      ring.rotation.x = Math.PI / 2 + i * 0.2;
      ring.position.y = -0.6 + i * 0.4;
      group.add(ring);
      rings.push(ring);
    }

    const points = new THREE.Group();
    const dotGeo = new THREE.SphereGeometry(0.035, 12, 12);
    for (let i = 0; i < 34; i += 1) {
      const dot = new THREE.Mesh(dotGeo, i % 2 ? cyan : magenta);
      const a = (i / 34) * Math.PI * 2;
      const r = 2.6 + Math.sin(i) * 0.25;
      dot.position.set(Math.cos(a) * r, Math.sin(i * 1.7) * 1.15 + 0.25, Math.sin(a) * r);
      points.add(dot);
    }
    scene.add(points);

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    let frameId;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y = Math.sin(elapsed * 0.42) * 0.28;
      group.position.y = Math.sin(elapsed * 0.9) * 0.07;
      leftArm.rotation.z = Math.sin(elapsed * 1.15) * 0.08;
      rightArm.rotation.z = Math.cos(elapsed * 1.05) * 0.08;
      sensorDot.scale.setScalar(1 + Math.sin(elapsed * 3.2) * 0.14);
      cocktail.rotation.y = elapsed * 0.45;
      colaCan.position.y = -0.62 + Math.sin(elapsed * 1.2) * 0.025;
      waterBottle.position.y = -0.58 + Math.cos(elapsed * 1.1) * 0.025;
      rings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (0.24 + index * 0.1);
        ring.material.opacity = 0.35 + Math.sin(elapsed * 1.4 + index) * 0.12;
      });
      points.rotation.y = elapsed * 0.08;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return <div className="three-mount" ref={mountRef} />;
}

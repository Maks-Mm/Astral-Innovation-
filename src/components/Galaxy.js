import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Galaxy = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(3, 3, 3);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    // Shader Code (Vertex)
    const vertexShader = `
      uniform float uSize;
      uniform float uTime;
      uniform float uHoleSize;
      attribute float aScale;
      attribute vec3 aRandomness;
      varying vec3 vColor;

      void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        
        // Spin Effect
        float angle = atan(modelPosition.x, modelPosition.z);
        float distanceToCenter = length(modelPosition.xz) + uHoleSize;
        float uTimeOffset = uTime + (uHoleSize * 30.0);
        float angleOffset = (1.0 / distanceToCenter) * uTimeOffset * 0.05;

        angle += angleOffset;
        
        modelPosition.x = cos(angle) * distanceToCenter;
        modelPosition.z = sin(angle) * distanceToCenter;
        modelPosition.xyz += aRandomness;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;

        gl_Position = projectedPosition; 
        gl_PointSize = uSize * aScale;
        gl_PointSize *= ( 1.0 / - viewPosition.z );
        vColor = color;
      }
    `;

    // Shader Code (Fragment)
    const fragmentShader = `
      varying vec3 vColor;
      uniform sampler2D uTexture;

      void main() {
        gl_FragColor = vec4(vColor, 1.0);
        gl_FragColor *= texture2D(uTexture, gl_PointCoord);
      }
    `;

    // Parameters
    const parameters = {
      count: 250000,
      radius: 5,
      branches: 5,
      randomness: 0.8,
      randomnessPower: 4,
      insideColor: "#ec5300",
      outsideColor: "#2fb4fc",
    };

    let geometry = null;
    let material = null;
    let points = null;

    const generateGalaxy = () => {
      if (points) {
        geometry.dispose();
        material.dispose();
        scene.remove(points);
      }

      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(parameters.count * 3);
      const colors = new Float32Array(parameters.count * 3);
      const scales = new Float32Array(parameters.count);
      const randomness = new Float32Array(parameters.count * 3);

      const insideColor = new THREE.Color(parameters.insideColor);
      const outsideColor = new THREE.Color(parameters.outsideColor);

      for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3;
        const radius = Math.random() * parameters.radius;
        const branchAngle =
          ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

        positions[i3] = Math.cos(branchAngle) * radius;
        positions[i3 + 1] = 0;
        positions[i3 + 2] = Math.sin(branchAngle) * radius;

        const randomX =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness;
        const randomY =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness;
        const randomZ =
          Math.pow(Math.random(), parameters.randomnessPower) *
          (Math.random() < 0.5 ? 1 : -1) *
          parameters.randomness;

        randomness[i3] = randomX;
        randomness[i3 + 1] = randomY;
        randomness[i3 + 2] = randomZ;

        scales[i] = Math.random();

        const mixedColor = insideColor.clone();
        mixedColor.lerp(outsideColor, radius / parameters.radius);

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
      }

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
      geometry.setAttribute(
        "aRandomness",
        new THREE.BufferAttribute(randomness, 3)
      );

      material = new THREE.ShaderMaterial({
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true,
        vertexShader,
        fragmentShader,
        transparent: true,
        uniforms: {
          uTime: { value: 0 },
          uSize: { value: 30 * renderer.getPixelRatio() },
          uHoleSize: { value: 0.15 },
          uTexture: {
            value: new THREE.TextureLoader().load(
              "https://assets.codepen.io/22914/star_02.png"
            ),
          },
        },
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);
    };

    generateGalaxy();

    const clock = new THREE.Clock();

    const animate = () => {
      material.uniforms.uTime.value = clock.getElapsedTime();
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    //the code block is responsible for the scroll effect
    const handleScroll = (event) => {
      const page = document.querySelector(".page");
      const scrollY = page.scrollTop; // Используем scrollTop для получения позиции прокрутки элемента
      const angle = scrollY * 0.001; // Настройте множитель по необходимости
      camera.position.x = 3 * Math.cos(angle);
      camera.position.z = 3 * Math.sin(angle);
      camera.position.y = scrollY * 0.001; // Настройте множитель по необходимости
      camera.lookAt(scene.position);
      console.log("Scroll position:", scrollY);
    };

    setTimeout(() => {
      const page = document.querySelector(".page");
      page.addEventListener("scroll", handleScroll);
    }, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (points) scene.remove(points);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="webgl"
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  );
};

export default Galaxy;

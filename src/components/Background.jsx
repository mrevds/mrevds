import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';
import "../components/Background.css";

const Background = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Инициализация Vanta.js
    const vantaEffect = BIRDS({
      el: backgroundRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x0, // Черный фон
      separation: 98.00,
      alignment: 67.00,
      cohesion: 86.00
    });

    // Очистка при размонтировании компонента
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

  return <div ref={backgroundRef} className="background-vanta"></div>;
};

export default Background;
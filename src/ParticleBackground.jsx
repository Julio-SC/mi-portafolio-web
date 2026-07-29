import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = ({ darkMode }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  // Tonos personalizados: Naranja Amanecer para Dark Mode, Azul Tropical Claro para Light Mode
  const colorParticulas = darkMode ? "#FF8C42" : "#48CAE4"; 

  return (
    <Particles
      id="tsparticles"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" }, 
            resize: true,
          },
          modes: {
            push: { quantity: 5 },
            repulse: { 
              distance: 130, 
              duration: 0.8, // Hover smooth y fluido
              factor: 60,
              easing: "ease-out-quad" 
            },
          },
        },
        particles: {
          color: { value: colorParticulas },
          links: {
            color: colorParticulas,
            distance: 120,
            enable: true,
            opacity: 0.5,
            width: 1.2,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: true,
            speed: 1.2, // Movimiento constante pero relajado
            straight: false,
          },
          number: { 
            density: { enable: true, area: 800 }, 
            value: 160 // Muchas partículas
          },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 1.5, max: 3.5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = ({ darkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: darkMode ? "#0f172a" : "#f4f7f6",
        },
      },
      fpsLimit: 120, // Mayor fluidez
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 140,
            duration: 0.8, // Reacción más suave
          },
        },
      },
      particles: {
        color: {
          value: darkMode ? ["#FF7F50", "#00B4D8", "#94a3b8"] : ["#FF7F50", "#0077B6", "#A9A9A9"],
        },
        links: {
          color: darkMode ? "#334155" : "#A9A9A9",
          distance: 160,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8, // Movimiento constante más elegante
          direction: "none",
          outModes: {
            default: "bounce",
          },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 90, // Más partículas
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1.5, max: 3.5 },
        },
      },
      detectRetina: true,
    }),
    [darkMode]
  );

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
};

export default ParticleBackground;
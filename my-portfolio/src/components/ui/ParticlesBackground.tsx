"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();

  // Initialize the particle engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Configure particle behavior and appearance
  const options: ISourceOptions = useMemo(() => {
    const isDark = resolvedTheme === "dark";
    const particleColor = isDark ? "#ffffff" : "#0f172a"; // White in dark mode, slate-900 in light mode
    const linkColor = isDark ? "#ffffff" : "#0f172a";

    return {
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" }, // Click to add particles
          onHover: { enable: true, mode: "grab" }, // Hover to grab/connect lines
        },
        modes: {
          push: { quantity: 3 },
          grab: { distance: 150, links: { opacity: 0.5 } },
        },
      },
      particles: {
        color: { value: particleColor },
        links: {
          color: linkColor,
          distance: 150,
          enable: true,
          opacity: isDark ? 0.2 : 0.1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 0.6, // Slow, elegant movement
          straight: false,
        },
        number: {
          density: { enable: true, width: 800, height: 800 },
          value: 50, // Adjust this to increase/decrease particle count
        },
        opacity: { value: isDark ? 0.3 : 0.2 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    };
  }, [resolvedTheme]);

  if (!init) return null;

  return (
    <div className="absolute inset-0 -z-10 pointer-events-auto">
      <Particles id="tsparticles" options={options} className="h-full w-full" />
    </div>
  );
}
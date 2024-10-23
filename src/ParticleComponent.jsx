// ParticleComponent.js
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleComponent = ({
  particleColor = "#00ff99", // Default color
  particleSpeed = 2, // Default speed
  particleCount = 100, // Default particle count
  particleShape = "circle", // Default shape
  particleSize = 5, // Default size
  lineConnect = true, // Enable or disable lines
  repulseDistance = 200, // Distance on hover repulse
}) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particleOptions = {
    background: {
      color: { value: "#000000" }, // Black background
    },
    fullScreen: { enable: true },
    particles: {
      number: {
        value: particleCount, // Controlled by user input
        density: { enable: true, area: 800 },
      },
      color: { value: particleColor }, // Dynamic color
      shape: {
        type: particleShape, // Set shape dynamically
        options: {
          polygon: { sides: particleShape === "triangle" ? 3 : 4 }, // Handle polygon sides
        },
      },
      opacity: {
        value: 0.8,
        anim: { enable: true, speed: 1.5, opacity_min: 0.1 },
      },
      size: {
        value: particleSize, // Size parameter
        random: true,
        anim: { enable: true, speed: 10, size_min: 0.2 },
      },
      move: {
        enable: true,
        speed: particleSpeed, // Speed parameter
        direction: "none",
        outModes: { default: "bounce" },
        attract: { enable: true, rotateX: 3000, rotateY: 3000 },
      },
      links: {
        enable: lineConnect, // Control lines between particles
        distance: 150,
        color: "#ffffff",
        opacity: 0.5,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" }, // Repulse effect
        onClick: { enable: true, mode: "push" }, // Add particles on click
      },
      modes: {
        repulse: { distance: repulseDistance },
        push: { quantity: 4 },
      },
    },
    detectRetina: true, // Enable retina display
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
    />
  );
};

export default ParticleComponent;

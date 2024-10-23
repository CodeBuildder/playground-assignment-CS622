// App.js
import React, { useState } from "react";
import ParticleComponent from "./ParticleComponent";
import { SketchPicker } from "react-color"; // Color picker component
import "./App.css";

function App() {
  const [settings, setSettings] = useState({
    particleColor: "#00ff99",
    particleSpeed: 2,
    particleCount: 100,
    particleShape: "circle",
    particleSize: 5,
    lineConnect: true,
    repulseDistance: 200,
  });

  const handleColorChange = (color) => {
    setSettings((prev) => ({ ...prev, particleColor: color.hex }));
  };

  return (
    <div className="App">
      <h1>Interactive Particle Configurator</h1>
      <ParticleComponent {...settings} />

      <div className="controls">
        <label>Number of Particles:</label>
        <input
          type="number"
          value={settings.particleCount}
          onChange={(e) =>
            setSettings({ ...settings, particleCount: +e.target.value })
          }
        />

        <label>Particle Speed:</label>
        <input
          type="number"
          value={settings.particleSpeed}
          onChange={(e) =>
            setSettings({ ...settings, particleSpeed: +e.target.value })
          }
        />

        <label>Particle Shape:</label>
        <select
          value={settings.particleShape}
          onChange={(e) =>
            setSettings({ ...settings, particleShape: e.target.value })
          }
        >
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
        </select>

        <label>Particle Size:</label>
        <input
          type="number"
          value={settings.particleSize}
          onChange={(e) =>
            setSettings({ ...settings, particleSize: +e.target.value })
          }
        />

        <label>Particle Color:</label>
        <SketchPicker
          color={settings.particleColor}
          onChange={handleColorChange}
        />

        <label>Connect Lines Between Particles:</label>
        <input
          type="checkbox"
          checked={settings.lineConnect}
          onChange={(e) =>
            setSettings({ ...settings, lineConnect: e.target.checked })
          }
        />
      </div>
    </div>
  );
}

export default App;

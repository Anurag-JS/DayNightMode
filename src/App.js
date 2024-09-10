import "./styles.css";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("day");

  const toggleDayNight = () => {
    setMode((prevMode) => (prevMode === "day" ? "night" : "day"));
  };

  return (
    <div className={`App ${mode}`}>
      <h2>{mode === "day" ? "Day Mode" : "Night Mode"}</h2>
      <label className="switch">
        <input
          type="checkbox"
          checked={mode === "night"} // Sync the checkbox state with the mode
          onChange={toggleDayNight} // Use onChange instead of onClick
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

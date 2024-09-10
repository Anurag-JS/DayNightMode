import "./styles.css";
import { useState } from "react";

export default function App() {
  // Creating state for mode
  const [mode, setMode] = useState("day");

  const toggleDayNight = () => {
    // setting state to toggle
    setMode((prevMode) => (prevMode === "day" ? "night" : "day"));
  };

  return (
    <div className={`App ${mode}`}>
      <br></br> 
      <h1>{mode === "day" ? "Day Mode" : "Night Mode"}</h1> <br></br> <br></br>
      <label className="switch">
       <input
         type="checkbox"
         checked={mode === "day"} // Invert the logic here
         onChange={toggleDayNight} // Use onChange instead of onClick
        />
        <span className="slider"></span>
      </label>

    </div>
  );
}

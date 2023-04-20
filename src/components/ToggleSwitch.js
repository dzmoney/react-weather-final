import { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState("false");

  // Event handler function for when the toggle switch is clicked
  const HandleToggleSwitch = () => {
    setIsChecked(!isChecked);
    //!isChecked will toggle between true and false states each time it is clicked
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="toggle-switch"
        checked={isChecked}
        onChange={HandleToggleSwitch}
      />
      <label htmlFor="toggle-switch"></label>
    </div>
  );
};

export default ToggleSwitch;

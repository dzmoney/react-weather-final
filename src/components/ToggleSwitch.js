import { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isChecked, HandleToggleSwitch }) => {
  const [checked, setChecked] = useState(isChecked);

  // Event handler function for when the toggle switch is clicked
  const toggleChecked = () => {
    setChecked(!checked);
    HandleToggleSwitch();
    //!isChecked will toggle between true and false states each time it is clicked
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        id="toggle-switch"
        checked={checked}
        onChange={toggleChecked}
      />
      <label htmlFor="toggle-switch"></label>
    </div>
  );
};

export default ToggleSwitch;

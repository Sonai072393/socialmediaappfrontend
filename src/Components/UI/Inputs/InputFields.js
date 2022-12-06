import React from "react";

//css
import './inputs.css'
const InputFields = (props) => {
  return (
    <div className="gridContainer">
      <div className="gridItem">
        <label>{props.label}</label>
      </div>
      <div className="gridItem">
        <input
          type={props.type}
          className={props.className}
          placeholder={props.placeholder}
          onChange={props.onChange}
          name={props.name}
          value={props.value}
          style={props.style}
        />
      </div>
    </div>
  );
};

export default InputFields;

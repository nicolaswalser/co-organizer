import { useState } from "react";
import "./FieldText.css";
const FieldText = (props) => {
  const placeholderModifier = `${props.placeholder}...`;
  const handleChange = (e) => {
    props.setValue(e.target.value);
  };
  return (
    <div className="field-text">
      <label>{props.title}</label>
      <input
        placeholder={placeholderModifier}
        required={props.required}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FieldText;

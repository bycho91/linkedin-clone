import React from "react";
import "../styles/InputOption.css";

const InputOption = ({ Icon, title, color }) => {
  return (
    <div className="inputOption__main">
      <Icon fontSize="default" style={{ color: color }} />
      <h3>{title}</h3>
    </div>
  );
};

export default InputOption;

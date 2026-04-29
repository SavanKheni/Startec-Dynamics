import React from "react";

const PulseBox = ({ size = 100 }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="pulse-box"
    />
  );
};

export default PulseBox;

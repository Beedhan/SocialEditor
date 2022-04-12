import React from "react";
import Background from "./Background/Background";

const PanelHandler = () => {

  return (
    <div
      className="w-full flex justify-center"
      style={{ background: "#1a1b1e" }}
    >
      <Background />
    </div>
  );
};

export default PanelHandler;

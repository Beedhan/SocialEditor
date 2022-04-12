import React from "react";
import { useSelector } from "react-redux";

const MainCanvas = () => {
  const { canvasBg, backgroundType, aspectRatio } = useSelector(state => state.canvas)


  return (
    <div className="p-8 h-full w-full">
      <div className="rounded-xl m-auto overflow-hidden relative" style={{ maxHeight: "90%", maxWidth: "90%", aspectRatio: `${aspectRatio.size} /1` }} >
        <div className=" mainCanvas bg-cover relative min-h-full h-full w-full min-w-full" style={{ background: canvasBg, aspectRatio: `${aspectRatio.size} /1` }}>
          {backgroundType === "IMAGE" && canvasBg && (
            <img alt="background" src={canvasBg} className="object-cover h-full w-full min-h-full min-w-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCanvas;

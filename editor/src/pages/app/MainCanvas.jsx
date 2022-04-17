import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_MOVEABLE_TARGET } from "../../redux/actions/CanvasAction";
import ImageContainer from "../../components/canvas/ImageContainer";
import MoveableStuffs from "../../components/canvas/MoveableStuffs";

const MainCanvas = () => {
  const { canvasBg, backgroundType, aspectRatio, moveableTarget } = useSelector(
    (state) => state.canvas
  );
  const dispatch = useDispatch();

  const removeMoveAble = (e) => {
    e.stopPropagation();
    if (moveableTarget.target === null) {
      return;
    }
    if (e.target !== moveableTarget) {
      dispatch({
        type: SET_MOVEABLE_TARGET,
        payload: { target: null, type: null },
      });
    }
  };

  const getCanvasBg = () => {
    switch (backgroundType) {
      case "SOLID":
        return canvasBg.solid;
      case "GRADIENT":
        return canvasBg.gradient;
      case "IMAGE":
        return canvasBg.image;
      default:
        break;
    }
  };
  return (
    <div className="p-8 h-full w-full" onClick={removeMoveAble}>
      <div
        className="rounded-xl m-auto overflow-hidden relative"
        style={{
          maxHeight: "90%",
          maxWidth: "90%",
          aspectRatio: `${aspectRatio.size} /1`,
        }}
      >
        <div
          className="mainCanvas bg-cover relative min-h-full h-full w-full min-w-full"
          style={{
            background: getCanvasBg(),
            aspectRatio: `${aspectRatio.size} /1`,
          }}
        >
          {backgroundType === "IMAGE" && canvasBg && (
            <img
              alt="background"
              src={getCanvasBg()}
              className="object-cover h-full w-full min-h-full min-w-full absolute"
            />
          )}
          <ImageContainer />
          <MoveableStuffs />
        </div>
      </div>
    </div>
  );
};

export default MainCanvas;

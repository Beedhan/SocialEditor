import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyMoveable from "../../MyMoveable";
import {
  SET_MOVEABLE_TARGET,
  SET_NAV_PANEL,
} from "../../redux/actions/CanvasAction";

const MoveableStuffs = () => {
  const dispatch = useDispatch();
  const { moveableStuffs, moveableTarget } = useSelector(
    (state) => state.canvas
  );

  const setMoveableTextTarget = (e) => {
    const targetNode = e.target.parentNode;
    dispatch({
      type: SET_MOVEABLE_TARGET,
      payload: { target: targetNode, type: "text" },
    });
    dispatch({ type: SET_NAV_PANEL, payload: "TEXTS" });
  };

  return (
    <>
      {moveableStuffs.length > 0 &&
        moveableStuffs.map((stuff) => (
          <>
            {stuff.type === "text" && (
              <div className="text-black" key={stuff.id} data-id={stuff.id}>
                <p onClick={setMoveableTextTarget}>{stuff.text}</p>
              </div>
            )}
          </>
        ))}
      {moveableTarget.target !== null && (
        <MyMoveable target={moveableTarget.target} />
      )}
    </>
  );
};

export default MoveableStuffs;

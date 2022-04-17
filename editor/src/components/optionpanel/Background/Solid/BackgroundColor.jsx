import {
  Card,
  ColorPicker
} from "@mantine/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SET_CANVAS_BG } from "../../../../redux/actions/CanvasAction";

const BackgroundColor = () => {
  const dispatch = useDispatch();
  const onColorChange = (color) => {
    dispatch({ type: SET_CANVAS_BG, payload: { value: color, type: "SOLID" } })

  };

  useEffect(() => {
    // dispatch({ type: SET_CANVAS_BG, payload: "#228ae6" })
  }, [])


  return (
    <div className="h-5/6 w-11/12 mt-10 rounded-lg flex justify-center">
      <ColorPicker
        onChange={onColorChange}
        format="hex"
        fullWidth
        swatches={[
          "#25262b",
          "#868e96",
          "#fa5252",
          "#e64980",
          "#be4bdb",
          "#7950f2",
          "#4c6ef5",
          "#228be6",
          "#15aabf",
          "#12b886",
          "#40c057",
          "#82c91e",
          "#fab005",
          "#fd7e14",
        ]}
      />
    </div>
  );
};

export default BackgroundColor;

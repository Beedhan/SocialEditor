import { createStyles } from "@mantine/core";
import React from "react";
import { useSelector } from "react-redux";
import Background from "./Background/Background";
import SideImage from "./Image/SideImage";
import Texts from "./Text/Texts";
import Transformer from "./Transform/Transformer";


const useStyles = createStyles((theme) => ({
  panelBg: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    // borderLeft: 'solid black 1px',
    // borderRight: 'solid black 1px'
  },
}));


const PanelHandler = () => {
  const { activePanel } = useSelector(state => state.canvas)
  const { classes } = useStyles();
  const RenderPanel = () => {
    switch (activePanel) {
      case "BACKGROUND":
        return <Background />
      case "IMAGE":
        return <SideImage />
      case "TRANSFORM":
        return <Transformer />
      case "TEXTS":
        return <Texts />
      default:
        break;
    }
  }
  return (
    <div
      className={`w-full flex justify-center ${classes.panelBg}`}
    // style={{ background: "#1a1b1e" }}
    >
      {RenderPanel()}
    </div>
  );
};

export default PanelHandler;

import { Button, Menu } from "@mantine/core";
import React, { useState } from "react";
import BackgroundColor from "./Solid/BackgroundColor";
import GradientPicker from "./Gradient/GradientPicker";
import BackgroundImage from "./Image/BackgroundImage";
import { useDispatch } from "react-redux";
import { SET_CANVAS_BG_TYPE } from "../../../redux/actions/CanvasAction";

const Background = () => {
    const [activeType, setActiveType] = useState("Solid");
    const dispatch = useDispatch();
    const RenderType = () => {
        switch (activeType) {
            case "Solid":
                dispatch({ type: SET_CANVAS_BG_TYPE, payload: "COLOR" });
                return <BackgroundColor />;
            case "Gradient":
                dispatch({ type: SET_CANVAS_BG_TYPE, payload: "COLOR" });
                return <GradientPicker />;
            case "Image":
                dispatch({ type: SET_CANVAS_BG_TYPE, payload: "IMAGE" });
                return <BackgroundImage />;
            default:
                break;
        }
    };
    const handleActiveType = (type) => {
        setActiveType(type);
    };

    return (
        <div className="flex flex-col w-full h-full px-2">
            <Menu
                control={
                    <Button variant="filled" className="btn-primary mt-3" fullWidth>
                        {activeType.toUpperCase()}
                    </Button>
                }
                placement="center"
            >
                <Menu.Item onClick={() => handleActiveType("Solid")}>Solid</Menu.Item>
                <Menu.Item onClick={() => handleActiveType("Gradient")}>
                    Gradient
                </Menu.Item>
                <Menu.Item onClick={() => handleActiveType("Image")}>
                    Image
                </Menu.Item>
            </Menu>
            <div className="w-full h-full flex justify-center p-2">{RenderType()}</div>
        </div>
    );
};

export default Background;

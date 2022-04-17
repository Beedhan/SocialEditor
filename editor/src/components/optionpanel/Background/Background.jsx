import { Button, Menu } from "@mantine/core";
import React, { useRef, useState } from "react";
import BackgroundColor from "./Solid/BackgroundColor";
import GradientPicker from "./Gradient/GradientPicker";
import BackgroundImage from "./Image/BackgroundImage";
import { useDispatch, useSelector } from "react-redux";
import { SET_CANVAS_BG_TYPE } from "../../../redux/actions/CanvasAction";

const Background = () => {
    const { backgroundType } = useSelector(state => state.canvas)
    const activeType = useRef(backgroundType);

    const dispatch = useDispatch();

    const RenderType = () => {
        switch (activeType.current) {
            case "SOLID":
                return <BackgroundColor />;
            case "GRADIENT":
                return <GradientPicker />;
            case "IMAGE":
                return <BackgroundImage />;
            default:
                break;
        }
    };
    const handleActiveType = (type) => {
        activeType.current = (type);
        dispatch({ type: SET_CANVAS_BG_TYPE, payload: type });
    };

    return (
        <div className="flex flex-col w-full h-full px-2">
            <Menu
                control={
                    <Button variant="filled" className="btn-primary mt-3" fullWidth>
                        {activeType.current.toUpperCase()}
                    </Button>
                }
                placement="center"
            >
                <Menu.Item onClick={() => handleActiveType("SOLID")}>Solid</Menu.Item>
                <Menu.Item onClick={() => handleActiveType("GRADIENT")}>
                    Gradient
                </Menu.Item>
                <Menu.Item onClick={() => handleActiveType("IMAGE")}>
                    Image
                </Menu.Item>
            </Menu>
            <div className="w-full h-full flex justify-center p-2">{RenderType()}</div>
        </div>
    );
};

export default Background;

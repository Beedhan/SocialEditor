import ReactCircularSlider from "@fseehawer/react-circular-slider";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_CANVAS_BG } from "../../../../redux/actions/CanvasAction";
import { GradientToArray } from "../../../../utils/GradientArray";
import MapPoints from "./MapPoints";
import Suggestions from "./Suggestions";

const GradientPicker = () => {
    const { canvasBg } = useSelector(state => state.canvas)
    const [gradientDeg, setGradientDeg] = useState("0");
    const dispatch = useDispatch();
    const [points, setPoints] = useState([
        {
            color: "#228ae6",
        },
        {
            color: "#12b886",
        },
    ]);

    useEffect(() => {
        setPoints(GradientToArray(canvasBg.gradient))
    }, [])

    const addPoint = () => {
        let tempPoints = [...points];
        tempPoints.push({ color: tempPoints[points.length - 1].color });
        setPoints(tempPoints);
    };

    const handleSliderChange = (value) => {
        let color = canvasBg.gradient;
        let changedValue = color.replace(/([0-9]+deg)/g, `${value}deg`);
        dispatch({ type: SET_CANVAS_BG, payload: { value: changedValue, type: "GRADIENT" } })
        setGradientDeg(value);
    }



    return (
        <div className="w-full h-full">
            <div
                className="h-4 mt-20 mb-10 flex justify-between"
                style={{ background: canvasBg.gradient, cursor: "pointer" }}
                onClick={addPoint}
            >
                <MapPoints points={points} setPoints={setPoints} gradientDeg={gradientDeg} />
            </div>
            <ReactCircularSlider
                min={0}
                max={360}
                direction={1}
                knobPosition="right"
                appendToValue="°"
                valueFontSize="1.5rem"
                progressColorFrom="#00bfbd"
                progressColorTo="#005a58"
                progressSize={12}
                trackSize={12}
                knobSize={36}
                knobColor="#005a58"
                width={100}
                labelColor="white"
                label=""
                onChange={(val) => handleSliderChange(val)}
            />
            <Suggestions setPoints={setPoints} gradientDeg={gradientDeg} />
        </div>
    );
};

export default GradientPicker;

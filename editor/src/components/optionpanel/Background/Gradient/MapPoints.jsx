import { Button, Popover, ColorPicker } from '@mantine/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SET_CANVAS_BG } from '../../../../redux/actions/CanvasAction';

const MapPoints = ({ points, setPoints }) => {
    const dispatch = useDispatch();
    const [pickerOpen, setPicker] = useState(false)

    const handlePicker = (e, index) => {
        e.stopPropagation();
        let tempPoints = [...points];
        tempPoints[index].active = true;
        setPoints(tempPoints);
        setPicker(true);
    };
    const handlePickerClose = (e) => {
        let tempPoints = [...points];
        tempPoints.forEach(point => {
            point.active = false;
        });
        setPoints(tempPoints);
        setPicker(false);

    };

    const handleColorChange = (color) => {
        let tempPoints = [...points];
        tempPoints.forEach(point => {
            if (point.active) {
                point.color = color;
            }
        })
        setPoints(tempPoints);
        handleBackground();
    };
    const handleBackground = () => {
        let color = `linear-gradient(90deg,`;
        points.map((point, index) => {
            if (index === points.length - 1) {
                return (color += point.color + ")");
            } else {
                return (color += point.color + ",");
            }
        });
        dispatch({ type: SET_CANVAS_BG, payload: { value: color, type: "GRADIENT" } })
    };

    return (
        <>
            {points.map((point, index) => (
                <Popover
                    opened={point.active}
                    onClose={handlePickerClose}
                    target={<Button
                        style={{ marginTop: "-5px", backgroundColor: point.color }}
                        onClick={(e) => handlePicker(e, index)}
                        radius="xl"
                        size="xs"
                        key={point.color + `${index}`
                        }
                    />
                    }
                    width={240}
                    position="bottom"
                    onClick={(e) => e.stopPropagation()
                    }
                >
                    <ColorPicker
                        onClick={(e) => e.stopPropagation()}
                        onChange={(color) => handleColorChange(color)}
                        format="hex"
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
                </Popover>
            ))}
        </>
    );
}
export default MapPoints

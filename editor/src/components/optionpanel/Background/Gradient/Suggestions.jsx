import { ScrollArea, Text } from '@mantine/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { suggestionColors } from '../../../../constants/SuggestionColors';
import { SET_CANVAS_BG } from '../../../../redux/actions/CanvasAction';

const Suggestions = ({ setPoints, gradientDeg }) => {
    const dispatch = useDispatch();


    const createColorString = (points) => {
        let color = `linear-gradient(${gradientDeg}deg,`;
        points.map((point, index) => {
            if (index === points.length - 1) {
                return (color += point + ")");
            } else {
                return (color += point + ",");
            }
        });
        return color;
    }
    const mapToObject = (points) => {
        const tempPoints = points.map(point => {
            return { color: point }
        })
        setPoints(tempPoints)
    }
    const setGradientColor = (color) => {
        mapToObject(color)
        const stringColor = createColorString(color);
        dispatch({ type: SET_CANVAS_BG, payload: { value: stringColor, type: "GRADIENT" } })
    }
    return (
        <div className='text-white mt-5'>
            <Text sx={(theme) => (
                {
                    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark
                }
            )}>Suggestions</Text>
            <ScrollArea style={{ height: 300, width: "100%" }} type="scroll"
                scrollbarSize={4}
                scrollHideDelay={200}>
                <div className='mt-5 grid gap-3 grid-cols-7'>
                    {suggestionColors.map(suggestion => (
                        <div
                            className='w-8 h-8 rounded-md'
                            style={{ background: createColorString(suggestion.points) }}
                            onClick={() => setGradientColor(suggestion.points)} />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

export default Suggestions
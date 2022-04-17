import { Button, ScrollArea, Select, Slider, Text, Textarea } from '@mantine/core'
import _ from 'lodash';
import { Input } from '@mantine/core';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_MOVEABLE_STUFFS, RESET_MOVEABLE_TARGET, SET_MOVEABLE_STUFFS } from '../../../redux/actions/CanvasAction';
import Colorpicker from './Colorpicker';
import GoogleFonts from './GoogleFonts';

const Texts = () => {
    const { moveableStuffs, moveableTarget } = useSelector(state => state.canvas)

    const dispatch = useDispatch();

    const addText = () => {
        dispatch({ type: ADD_MOVEABLE_STUFFS, payload: { text: "Lorem Ipsum", type: "text", id: _.uniqueId('text-') } })
    }

    const deleteText = () => {
        const targetedId = moveableTarget.target.getAttribute("data-id");
        const tempStuffs = [...moveableStuffs];
        const filteredItems = _.filter(tempStuffs, ((stuff) => stuff.id !== targetedId));
        dispatch({ type: SET_MOVEABLE_STUFFS, payload: filteredItems });
        dispatch({ type: RESET_MOVEABLE_TARGET, payload: {} });
    }
    const handleText = (e) => {
        const targetedId = moveableTarget.target.getAttribute("data-id");
        const tempStuffs = [...moveableStuffs];
        const index = _.findIndex(tempStuffs, ((stuff) => stuff.id === targetedId));
        tempStuffs[index].text = e.target.value;
        dispatch({ type: SET_MOVEABLE_STUFFS, payload: tempStuffs });
    }

    const handleAlignment = (e) => {
        moveableTarget.target.style.textAlign = e
    }

    const handleFontSize = (e) => {
        moveableTarget.target.style.fontSize = e + "px"
    }

    const handleFontWeight = (e) => {
        moveableTarget.target.style.fontWeight = e
    }

    return (
        <div className='h-5/6 w-11/12 mt-10 rounded-lg'>
            <Button variant='filled' className='btn-primary w-full' onClick={addText}>Add Text</Button>
            {moveableTarget.type === "text" ? (
                <ScrollArea style={{ height: 500 }} className="pb-10" scrollbarSize={2} scrollHideDelay={300}>
                    <div className='flexed-container '>
                        <Text sx={(theme) => (
                            {
                                color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
                            }
                        )} className='text-center my-3 text-lg'>Text</Text >
                        <Textarea
                            defaultValue={moveableTarget?.target?.textContent}
                            variant="filled"
                            placeholder="Text"
                            className='w-full'
                            onChange={handleText}
                        />
                    </div>
                    <div className='flexed-container '>
                        <Text sx={(theme) => (
                            {
                                color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
                            }
                        )} className='text-center my-3 text-lg'>Alignment</Text >
                        <Select
                            label=""
                            className='w-full'
                            placeholder={moveableTarget.target.style.textAlign.toUpperCase()}
                            onChange={handleAlignment}
                            data={[
                                { value: 'left', label: 'LEFT' },
                                { value: 'center', label: 'CENTER' },
                                { value: 'right', label: 'RIGHT' },
                            ]}
                        />
                    </div>
                    <div className='flexed-container '>
                        <Text sx={(theme) => (
                            {
                                color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
                            }
                        )} className='text-center my-3 text-lg'>Font Weight</Text >
                        <Select
                            label=""
                            className='w-full'
                            placeholder={moveableTarget.target.style.fontWeight.toUpperCase()}
                            onChange={handleFontWeight}
                            data={[
                                { value: 'lighter', label: 'LIGHT' },
                                { value: 'normal', label: 'NORMAL' },
                                { value: 'bold', label: 'BOLD' },
                                { value: 'bolder', label: 'BOLDER' },
                            ]}
                        />
                    </div>
                    <div className='flexed-container '>
                        <Text sx={(theme) => (
                            {
                                color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
                            }
                        )} className='text-center my-3 text-lg'>Font Size</Text >
                        <Slider
                            radius="xl"
                            min={10}
                            max={100}
                            onChange={handleFontSize}
                            step={1}
                            defaultValue={parseInt(moveableTarget?.target?.style.fontSize.split('px')[0])}
                            marks={[
                                { value: 10, label: "0%" },
                                { value: 100, label: "100%" },
                            ]}
                        />
                    </div>
                    <div className='flexed-container '>
                        <Text sx={(theme) => (
                            {
                                color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
                            }
                        )} className='text-center my-3 text-lg'>Color Picker</Text >
                        <Colorpicker target={moveableTarget.target} />
                    </div>
                    <div className='flexed-container '>
                        <Text sx={(theme) => (
                            {
                                color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
                            }
                        )} className='text-center my-3 text-lg'>Font Family</Text >
                        <GoogleFonts target={moveableTarget.target} />
                    </div>
                    <div className='flexed-container '>
                        <Button variant='filled' className='bg-red-500 w-full hover:bg-red-400' onClick={deleteText}>Delete</Button>
                    </div>
                </ScrollArea>
            ) : (
                <Text sx={(theme) => (
                    {
                        color: theme.colorScheme !== "dark" ? theme.colors.dark : theme.white
                    }
                )} className='text-white text-lg text-center mt-5 font-bold'>Please select text field</Text >
            )}
        </div>
    )
}

export default Texts
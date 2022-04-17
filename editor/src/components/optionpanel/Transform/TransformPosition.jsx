import React from 'react'
import { SET_POS_X, SET_POS_Y } from '../../../redux/actions/CanvasAction';
import { createStyles, Slider } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = createStyles((theme) => ({
    bg: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : "#e3e3e3",
    },
    text: {
        color: theme.colorScheme !== "dark" ? theme.colors.dark[5] : "#e3e3e3",
    },
}));

const TransformPosition = () => {
    const { classes } = useStyles();
    const dispatch = useDispatch();
    const { posX, posY } = useSelector(state => state.canvas)

    const handlePosX = (value) => {
        dispatch({ type: SET_POS_X, payload: value });
    }
    const handlePosY = (value) => {
        dispatch({ type: SET_POS_Y, payload: value });
    }
    //!Adding reset button
    return (
        <>
            <section className={`container ${classes.bg}  flex justify-center items-center h-10 rounded-md`}>
                <p className={`${classes.text}white text-lg font-bold`}>Position</p>
            </section>
            <section >
                <div className='flex justify-between w-full items-center'>
                    <p className={` mr-5 ${classes.text}`}>X</p>
                    <Slider
                        radius="xl"
                        min={-100}
                        max={100}
                        onChange={handlePosX}
                        step={1}
                        defaultValue={posX}
                        className="w-full my-5"
                        marks={[
                            { value: -100, label: "-100%" },
                            { value: 0, label: "0%" },
                            { value: 100, label: "100%" },
                        ]}
                    />
                </div>
                <div className='flex justify-between w-full items-center'>
                    <p className={` mr-5 ${classes.text}`}>Y</p>
                    <Slider
                        radius="xl"
                        min={-100}
                        max={100}
                        onChange={handlePosY}
                        step={1}
                        defaultValue={posY}
                        className="w-full my-5"
                        marks={[
                            { value: -100, label: "-100%" },
                            { value: 0, label: "0%" },
                            { value: 100, label: "100%" },
                        ]}
                    />
                </div>
            </section>
        </>
    )
}

export default TransformPosition
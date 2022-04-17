import React from 'react'
import { SET_POS_X, SET_POS_Y, SET_ROT_X, SET_ROT_Y, SET_ROT_Z } from '../../../redux/actions/CanvasAction';
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

const Transform3d = () => {
    const dispatch = useDispatch();
    const { classes } = useStyles();
    const { rotX, rotY, rotZ } = useSelector(state => state.canvas)
    const handleRotationX = (value) => {
        dispatch({ type: SET_ROT_X, payload: value });
    }
    const handleRotationY = (value) => {
        dispatch({ type: SET_ROT_Y, payload: value });
    }
    const handleRotationZ = (value) => {
        dispatch({ type: SET_ROT_Z, payload: value });
    }
    //!Adding reset button

    return (
        <>
            <section className={`container mt-5 flex justify-center items-center h-10 rounded-md ${classes.bg}`}>
                <p className={` text-lg font-bold ${classes.text}`}>Rotation</p>
            </section>
            <section>
                <div className='flex justify-between w-full items-center'>
                    <p className={` mr-5 ${classes.text}`}>X</p>
                    <Slider
                        radius="xl"
                        min={-100}
                        max={100}
                        onChange={handleRotationX}
                        step={1}
                        defaultValue={rotX}
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
                        onChange={handleRotationY}
                        step={1}
                        defaultValue={rotY}
                        className="w-full my-5"
                        marks={[
                            { value: -100, label: "-100%" },
                            { value: 0, label: "0%" },
                            { value: 100, label: "100%" },
                        ]}
                    />
                </div>
                <div className='flex justify-between w-full items-center'>
                    <p className={` mr-5 ${classes.text}`}>Z</p>
                    <Slider
                        radius="xl"
                        min={-100}
                        max={100}
                        onChange={handleRotationZ}
                        step={1}
                        defaultValue={rotZ}
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

export default Transform3d
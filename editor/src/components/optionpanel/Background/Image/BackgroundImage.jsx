import { createStyles } from '@mantine/core';
import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { SET_CANVAS_BG } from '../../../../redux/actions/CanvasAction';
import Dropper from '../../../misc/FIleUpload/Dropper';




const BackgroundImage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch({ type: SET_CANVAS_BG, payload: `gray` });
    }, [])


    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        maxFiles: 1, accept: 'image/jpeg,image/png', onDrop: acceptedFiles => {
            acceptedFiles.map(file => {
                dispatch({ type: SET_CANVAS_BG, payload: { value: URL.createObjectURL(file), type: "IMAGE" } });
            })
        }
    });

    return (
        <div className="h-5/6 w-11/12 mt-10 rounded-lg">
            <Dropper getInputProps={getInputProps} getRootProps={getRootProps} />
        </div>
    )
}

export default BackgroundImage
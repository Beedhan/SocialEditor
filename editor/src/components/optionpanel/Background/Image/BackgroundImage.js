import React, { useEffect } from 'react'
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { SET_CANVAS_BG } from '../../../../redux/actions/CanvasAction';

const BackgroundImage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: SET_CANVAS_BG, payload: `gray` });
    }, [])

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        maxFiles: 1, accept: 'image/jpeg,image/png', onDrop: acceptedFiles => {
            acceptedFiles.map(file => {
                dispatch({ type: SET_CANVAS_BG, payload: URL.createObjectURL(file) });
            })
        }
    });

    return (
        <div className="h-5/6 w-11/12 mt-10 rounded-lg">
            <section className="container bg-neutral-700 flex justify-center items-center h-20 rounded-lg p-1 border-2 border-dashed border-neutral-800 hover:border-neutral-500 ">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p className='text-white'>Select or drag file</p>
                </div>
            </section>
        </div>
    )
}

export default BackgroundImage
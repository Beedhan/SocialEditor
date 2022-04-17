import { Button, Input } from '@mantine/core';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SET_CANVAS_ASPECT } from '../../../redux/actions/CanvasAction';

const Resolutions = ({ resolutions, setPreviewedSize }) => {
    const dispatch = useDispatch();
    const canvasSize = useRef({ height: 0, width: 0 });
    const setResolution = (size) => {
        const splittedSized = size.split(" ");
        const aspectRatioSize = parseInt(splittedSized[0]) / parseInt(splittedSized[2])
        dispatch({ type: SET_CANVAS_ASPECT, payload: { size: aspectRatioSize, res: size } });
    }
    const setPreviewed = (size) => {
        const splittedSized = size.split(" ");
        const aspectRatioSize = parseInt(splittedSized[0]) / parseInt(splittedSized[2])
        setPreviewedSize(aspectRatioSize);
    }

    const handleWidth = (e) => {
        canvasSize.current = { ...canvasSize.current, width: parseInt(e.target.value) }
        handleCustomWidthPreview();
    }

    const handleHeight = (e) => {
        canvasSize.current = { ...canvasSize.current, height: parseInt(e.target.value) }
        handleCustomWidthPreview();
    }

    const handleCustomWidthPreview = () => {
        setPreviewedSize(canvasSize.current.width / canvasSize.current.height);
    }

    const handleApplyButton = () => {
        const resString = canvasSize.current.width.toString() + " X " + canvasSize.current.height.toString();
        const sizeValue = canvasSize.current.width / canvasSize.current.height
        dispatch({ type: SET_CANVAS_ASPECT, payload: { size: sizeValue, res: resString } });

    }
    return (
        <div className='flex flex-col overflow-scroll pb-32 resolutionLists'>
            <div className='flex p-3 justify-between items-center'>
                <Input
                    variant="filled"
                    placeholder="width"
                    onChange={handleWidth}
                />
                <p className='font-bold mx-3'>X</p>
                <Input
                    variant="filled"
                    placeholder="height"
                    onChange={handleHeight}
                />
                <Button variant='filled' onClick={handleApplyButton} className='btn-primary ml-3'>Apply</Button>
            </div>

            {resolutions.map(resolution => (
                <section className='my-3'>
                    <h2 className='text-lg text-center'>{resolution.site}</h2>
                    <div className='flex flex-wrap '>
                        {resolution.res.map((r, index) => (
                            <Button
                                className="btn-primary m-2 w-5/12"
                                onClick={() => setResolution(r.size)}
                                onMouseEnter={() => setPreviewed(r.size)}
                            >
                                {r.name} {r.size}
                            </Button>
                        )
                        )}
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Resolutions
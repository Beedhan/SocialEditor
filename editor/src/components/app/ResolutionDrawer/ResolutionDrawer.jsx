import { Button, Drawer, Tooltip } from '@mantine/core'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { resolutions } from '../../../constants/Resolutions.constants';
import ResolutionPreview from './ResolutionPreview';
import Resolutions from './Resolutions';

const ResolutionDrawer = () => {
    const [opened, setOpened] = useState(false);
    const [toolTip, setToolTip] = useState(false);
    const [previewedSize, setPreviewedSize] = useState();
    const { aspectRatio } = useSelector(state => state.canvas)

    const handleDrawerOpen = () => {
        setOpened(true)
    }

    const handleDrawerClose = () => {
        setOpened(false)
    }
    return (
        <>
            <Tooltip
                opened={toolTip}
                label="Resolutions"
                position="bottom"
                gutter={10}
                arrowSize={3}
                withArrow
            >
                <Button
                    onClick={handleDrawerOpen}
                    onMouseEnter={() => setToolTip(true)}
                    onMouseLeave={() => setToolTip(false)}
                    variant="filled"
                    className="btn-primary"
                >
                    {aspectRatio.res}
                </Button>
            </Tooltip>
            <Drawer
                position="right"
                opened={opened}
                onClose={handleDrawerClose}
                size="50%"
            >
                <h1 className='text-center text-3xl font-bold'>Resolutions</h1>
                <div className="flex flex-row h-full">
                    <ResolutionPreview previewedSize={previewedSize} />
                    <Resolutions resolutions={resolutions} setPreviewedSize={setPreviewedSize} />
                </div>
            </Drawer>
        </>
    )
}

export default ResolutionDrawer
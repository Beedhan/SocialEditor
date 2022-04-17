import { Button, ColorInput, ColorPicker, Popover } from '@mantine/core'
import React, { useState } from 'react'
import { RbgToHex } from '../../../utils/RbgToHex';

const Colorpicker = ({ target }) => {
    const [opened, setOpened] = useState();

    const handleColorChange = (color) => {
        target.style.color = color;
    }
    return (
        <>
            {/* <Popover
            opened={opened}
            onClose={() => setOpened(false)}
            target={<Button
                style={{ marginTop: "-5px", backgroundColor: target.style.color || "white" }}
                onClick={() => setOpened(true)}
                size="xs"
                fullWidth
                key={target.style.color}
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
        </Popover> */}
            <ColorInput placeholder="Pick color"
                onChange={(color) => handleColorChange(color)}
                defaultValue={RbgToHex(target.style.color)}
                variant="filled" />
        </>
    )
}

export default Colorpicker
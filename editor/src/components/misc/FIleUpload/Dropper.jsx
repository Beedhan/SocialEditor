import { createStyles, Text } from '@mantine/core';
import React from 'react'


const useStyles = createStyles((theme) => ({
    dropper: {
        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : "#e3e3e3",
    },
    text: {
        color: theme.colorScheme !== "dark" ? theme.colors.dark[7] : "#e3e3e3",
    },
}));

const Dropper = ({ getRootProps, getInputProps }) => {
    const { classes } = useStyles();
    return (
        <section className={`${classes.dropper} container flex justify-center items-center h-20 rounded-lg p-1 border-2 border-dashed border-neutral-800 hover:border-neutral-500 `}>
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <Text className={classes.text}>Select or drag file</Text>
            </div>
        </section>
    )
}

export default Dropper
import React, { useState } from 'react';
import Moveable from 'react-moveable';

const MyMoveable = ({ target }) => {
    const [frame, setFrame] = useState({
        translate: [0, 0],
        scale: [1, 1],
    });

    const setTransform = target => {
        target.style.cssText = frame.toCSS();
        document.getElementById("info").innerHTML = frame.toCSS().toString();
    };

    return (
        <Moveable
            target={target}
            scalable={true}
            draggable={true}
            resizable={false}
            rotatable={true}
            keepRatio={true}
            throttleScale={0}
            renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
            edge={true}
            zoom={1}
            origin={true}
            padding={{ "left": 0, "top": 0, "right": 0, "bottom": 0 }}
            onDragStart={e => {
                e.set(frame.translate);
                e.setTransform(e.target.style.transform)
            }}
            onDrag={({ target, transform }) => {
                target.style.transform = transform;
            }}
            onDragEnd={({ lastEvent }) => {
                if (lastEvent) {
                    frame.translate = lastEvent.beforeTranslate;
                }
            }}
            // onScaleStart={e => {
            //     console.log("hhhh")
            //     e.target.style.transform = e.drag.transform;
            // }}
            onScale={({ target, delta, clientX, clientY, isPinch, transform }) => {
                target.style.transform = transform
            }}
            onRotateStart={e => {
                e.set(frame.rotate);
            }}
            onRotate={(e) => {
                const trans = e.transform.split(" ")[0] + e.transform.split(" ")[1];
                frame.rotate = e.beforeRotate;
                target.style.transform = `rotate(${e.absoluteRotate})deg`;
            }}
        />
    )
}

export default MyMoveable
import React, { useState } from 'react'
import Moveable from 'react-moveable';

const MyMoveable = ({ target }) => {
    const [frame, setFrame] = useState({
        translate: [0, 0],
        scale: [1, 1],
    });
    return (
        <Moveable
            target={target}
            scalable={false}
            draggable={true}
            resizable={true}
            rotatable={true}
            keepRatio={false}
            throttleScale={0}
            renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
            edge={true}
            zoom={1}
            origin={true}
            padding={{ "left": 0, "top": 0, "right": 0, "bottom": 0 }}
            onDragStart={e => {
                e.set(frame.translate);
            }}
            onDrag={({ target, transform }) => {
                target.style.transform = transform;
            }}
            onDragEnd={({ lastEvent }) => {
                if (lastEvent) {
                    frame.translate = lastEvent.beforeTranslate;
                }
            }}
            onScaleStart={e => {
                e.set(frame.scale);
                e.dragStart && e.dragStart.set(frame.translate);
            }}
            onScale={e => {
                const beforeTranslate = e.drag.beforeTranslate;
                frame.translate = beforeTranslate;
                frame.scale = e.scale;
                e.target.style.transform
                    = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`
                    + ` scale(${e.scale[0]}, ${e.scale[1]})`;
            }}
            onResizeStart={e => {
                e.setOrigin(["%", "%"]);
                e.dragStart && e.dragStart.set(frame.translate);
            }}
            onResize={e => {
                const beforeTranslate = e.drag.beforeTranslate;

                frame.translate = beforeTranslate;
                e.target.style.width = `${e.width}px`;
                e.target.style.height = `${e.height}px`;
                e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
            }}
            onRotateStart={e => {
                e.set(frame.rotate);
            }}
            onRotate={(e) => {
                const trans = e.transform.split(" ")[0] + e.transform.split(" ")[1];
                frame.rotate = e.beforeRotate;
                target.style.transform = `rotate(${e.absoluteRotate})deg`;
                console.log(target.style.transform)
            }}
        />
    )
}

export default MyMoveable
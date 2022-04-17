import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_NAV_PANEL } from '../../redux/actions/CanvasAction';

const ImageContainer = () => {
    const {
        selectedImages,
        canvasImageScale,
        posX,
        posY,
        rotX,
        rotY,
        rotZ,
    } = useSelector((state) => state.canvas);
    const dispatch = useDispatch();

    const handleImageClick = (e) => {
        dispatch({ type: SET_NAV_PANEL, payload: "IMAGE" })
    }

    return (
        <div
            id="ImageContainer"
            className="flex p-2 justify-center items-center h-full"
            style={{
                transform:
                    `scale(${canvasImageScale})
                    translateX(${posX}%)
                    translateY(${posY}%)
                    rotateX(${rotX}deg)
                    rotateY(${rotY}deg)
                    rotateZ(${rotZ}deg)
        `,
            }}
        >
            {selectedImages.length > 0 &&
                selectedImages.map((selected) => (
                    <img
                        src={selected.img}
                        alt={selected.id}
                        key={selected.id}
                        style={{
                            boxShadow:
                                " rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px",
                        }}
                        onClick={handleImageClick}
                        className="w-full mx-2 object-cover rounded-lg"
                    />
                ))}
        </div>
    )
}

export default ImageContainer
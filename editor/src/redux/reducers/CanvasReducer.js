export const INITIAL_STATE = {
    canvasBg: "#fff35a",
    activePanel: "background",
    backgroundType: "COLOR",
    aspectRatio: { size: "1", res: "1080 x 1080" }
}

const CanvasReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_CANVAS_BG":
            return { ...state, canvasBg: action.payload }
        case "SET_CANVAS_BG_TYPE":
            return { ...state, backgroundType: action.payload }
        case "SET_CANVAS_ASPECT":
            return { ...state, aspectRatio: action.payload }
        default:
            return state;
    }
}
export default CanvasReducer
export const INITIAL_STATE = {
    canvasBg: { solid: "#fff35a", gradient: "", image: "" },
    activePanel: "BACKGROUND",
    backgroundType: "SOLID",
    aspectRatio: { size: "1", res: "1080 x 1080" },
    selectedImages: [],
    canvasImageScale: 1,
    posX: 0,
    posY: 0,
    rotX: 0,
    rotY: 0,
    rotZ: 0,
    moveableTarget: { target: null, type: "" },
    moveableStuffs: [],
}

const CanvasReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_CANVAS_BG":
            let bg;
            if (action.payload.type === "SOLID") {
                bg = { ...state.canvasBg, solid: action.payload.value }
            } else if (action.payload.type === "GRADIENT") {
                bg = { ...state.canvasBg, gradient: action.payload.value }
            } else if (action.payload.type === "IMAGE") {
                bg = { ...state.canvasBg, image: action.payload.value }
            }
            return { ...state, canvasBg: bg }
        case "SET_CANVAS_BG_TYPE":
            return { ...state, backgroundType: action.payload }
        case "SET_CANVAS_ASPECT":
            return { ...state, aspectRatio: action.payload }
        case "SET_NAV_PANEL":
            return { ...state, activePanel: action.payload }
        case "SET_SELECTED_IMAGES":
            return { ...state, selectedImages: action.payload }
        case "SET_CANVAS_SCALE":
            return { ...state, canvasImageScale: action.payload }
        case "SET_POS_X":
            return { ...state, posX: action.payload }
        case "SET_POS_Y":
            return { ...state, posY: action.payload }
        case "SET_ROT_X":
            return { ...state, rotX: action.payload }
        case "SET_ROT_Y":
            return { ...state, rotY: action.payload }
        case "SET_ROT_Z":
            return { ...state, rotZ: action.payload }
        case "SET_MOVEABLE_TARGET":
            return { ...state, moveableTarget: action.payload }
        case "RESET_MOVEABLE_TARGET":
            return { ...state, moveableTarget: { target: null, type: "" } }
        case "SET_MOVEABLE_STUFFS":
            return { ...state, moveableStuffs: action.payload }
        case "ADD_MOVEABLE_STUFFS":
            const moveables = [...state.moveableStuffs];
            moveables.push(action.payload)
            return { ...state, moveableStuffs: moveables }

        default:
            return state;
    }
}
export default CanvasReducer
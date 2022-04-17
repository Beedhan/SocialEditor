export const RbgToHex = (rgb) => {
    if (rgb === "") return "#000"
    return '#' + rgb.match(/\d+/g).map(x => (+x).toString(16).padStart(2, 0)).join``
}
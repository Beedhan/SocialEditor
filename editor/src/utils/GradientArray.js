export const GradientToArray = (gradient) => {
    const colorsArray = gradient.split(',').splice(1)
    const colorsWithObject = colorsArray.map((color, index) => {
        if (index === colorsArray.length - 1) {
            const withoutBracket = color.slice(0, -1);
            return { color: withoutBracket }
        }
        return { color }
    })
    console.log(colorsWithObject);
    return colorsWithObject
}
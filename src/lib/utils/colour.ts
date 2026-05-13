import { randBetween } from "./maths";

export const randRangeRGBString = (
    redRange: [number, number] | number = [0, 255],
    greenRange: [number, number] | number = [0, 255],
    blueRange: [number, number] | number = [0, 255],
) => {
    const getValue = (range: [number, number] | number) => {
        return Array.isArray(range) ? randBetween(range[0], range[1]) : range;
    };

    const red = getValue(redRange);
    const green = getValue(greenRange);
    const blue = getValue(blueRange);
    return `rgb(${red}, ${green}, ${blue})`;
};

export interface PaintColourType {
    name: string,
    code: string,
    range?: string,
}

// https://acrylicosvallejo.com/wp-content/uploads/2021/09/CC070-Model_Color-Rev18-baja.pdf
// https://acrylicosvallejo.com/wp-content/uploads/2021/09/CC072-Game_Color-Rev20-baja.pdf
// https://acrylicosvallejo.com/en/hobby-color-charts/

export const PAINT_COLOURS: Record<string, PaintColourType> = {
    "vallejo_dark_green": {
        name: "Dark Green",
        range: "Vallejo Game Color",
        code: "#2e413c"
    },
    "vallejo_deep_green": {
        name: "Deep Green",
        range: "Vallejo Model Color",
        code: "#316552",
    },
    "vallejo_flat_earth": {
        name: "Flat Earth",
        range: "Vallejo Model Color",
        code: "#6a5440",
    },
    "vallejo_smokey_ink": {
        name: "Smokey Ink",
        range: "Vallejo Game Color",
        code: "#262123"
    },
    "vallejo_bone_white": {
        name: "Bone White",
        range: "Vallejo Game Color",
        code: "#cdbb95"
    },
}

export const DA_ARMOUR = [
    PAINT_COLOURS["vallejo_dark_green"],
    PAINT_COLOURS["vallejo_smokey_ink"],
    PAINT_COLOURS["vallejo_deep_green"],
    PAINT_COLOURS["vallejo_flat_earth"],
    PAINT_COLOURS["vallejo_bone_white"],
]
export interface PaintColourType {
    name: string,
    code: string,
    range?: string,
    url?: string
}

// https://acrylicosvallejo.com/wp-content/uploads/2021/09/CC070-Model_Color-Rev18-baja.pdf
// https://acrylicosvallejo.com/wp-content/uploads/2021/09/CC072-Game_Color-Rev20-baja.pdf
// https://acrylicosvallejo.com/en/hobby-color-charts/

export const PAINT_COLOURS: Record<string, PaintColourType> = {
    "vallejo_dark_green": {
        name: "Dark Green",
        range: "Vallejo Game Color",
        code: "#2e413c",
        url: "https://acrylicosvallejo.com/en/product/hobby/game-color-en/dark-green-72028/"
    },
    "vallejo_deep_green": {
        name: "Deep Green",
        range: "Vallejo Model Color",
        code: "#316552",
        url: "https://acrylicosvallejo.com/en/product/hobby/model-color-en/deep-green-70970/"
    },
    "vallejo_flat_earth": {
        name: "Flat Earth",
        range: "Vallejo Model Color",
        code: "#6a5440",
        url: "https://acrylicosvallejo.com/en/product/hobby/model-color-en/flat-earth-70983/"
    },
    "vallejo_smokey_ink": {
        name: "Smokey Ink",
        range: "Vallejo Game Color",
        code: "#262123",
        url: "https://acrylicosvallejo.com/en/product/hobby/game-color-en/smokey-ink-72068/"
    },
    "vallejo_bone_white": {
        name: "Bone White",
        range: "Vallejo Game Color",
        code: "#cdbb95",
        url: "https://acrylicosvallejo.com/en/product/hobby/game-color-en/bone-white-72034/"
    },
    "vallejo_pale_sand": {
        name: "Pale Sand",
        range: "Velljo Model Color",
        code: "#f5d8b6",
        url: "https://acrylicosvallejo.com/en/product/hobby/model-color-en/pale-sand-70837/"
    },
    "vallejo_leather_brown": {
        name: "Leather Brown",
        range: "Velljo Model Color",
        code: "#5c4f46",
        url: "https://acrylicosvallejo.com/en/product/hobby/model-color-en/leather-brown-70871/"
    },
    "vallejo_hull_red": {
        name: "Hull Red",
        range: "Velljo Model Color",
        code: "#502820",
        url: "https://acrylicosvallejo.com/en/product/hobby/model-color-en/hull-red-70985/"
    },
    "vallejo_black": {
        name: "Black",
        range: "Velljo Model Color",
        code: "#010101",
        url: "https://acrylicosvallejo.com/en/product/hobby/model-color-en/black-70950/"
    },
    "black_oil_wash": {
        name: "Black Oil Wash",
        range: "",
        code: "#000000",
    },
    "burnt_umber_oil_wash": {
        name: "Burnt Umber Oil Wash",
        range: "",
        code: "#43301f",
    },
    "vallejo_brown_iron_oxide_pigment": {
        name: "Brown Iron Oxide",
        range: "Velljo Pigment Powder",
        code: "#7b3a38",
        url: "https://acrylicosvallejo.com/en/product/hobby/pigments-en/brown-iron-oxide-73108/"
    },
    "army_painter_pallid_bone_speedpaint": {
        name: "Pallid Bone",
        range: "ArmyPainter Speedpaint",
        code: "#e1cc93",
        url: "https://www.thearmypainter.com/shop/us/wp2006p"
    },
}

export const DA_ARMOUR_PAINTS = [
    PAINT_COLOURS["vallejo_dark_green"],
    PAINT_COLOURS["vallejo_smokey_ink"],
    PAINT_COLOURS["vallejo_deep_green"],
    PAINT_COLOURS["vallejo_flat_earth"],
    PAINT_COLOURS["vallejo_bone_white"],
]

export const HIGHLAND_BASE_PAINTS = [
    PAINT_COLOURS["vallejo_black"],
    PAINT_COLOURS["vallejo_leather_brown"],
    PAINT_COLOURS["vallejo_hull_red"],
    PAINT_COLOURS["vallejo_pale_sand"],
    PAINT_COLOURS["vallejo_brown_iron_oxide_pigment"],
    PAINT_COLOURS["black_oil_wash"],
    PAINT_COLOURS["vallejo_flat_earth"],
    PAINT_COLOURS["vallejo_deep_green"],
]

export const DW_ARMOUR_PAINTS = [
    PAINT_COLOURS["army_painter_pallid_bone_speedpaint"],
    PAINT_COLOURS["vallejo_flat_earth"],
    PAINT_COLOURS["vallejo_bone_white"],
    PAINT_COLOURS["burnt_umber_oil_wash"],
    PAINT_COLOURS["vallejo_pale_sand"],
]
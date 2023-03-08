import { IconType, SoundType } from "../types";

export const categories = {
    nature: [
        "rain",
        "storm",
        "wind",
        "waves",
        "stream",
        "birds",
        "summer_night"
    ],
    travel: [
        "train",
        "boat",
        "city"
    ],
    interiors: [
        "coffee_shop",
        "fireplace"
    ],
    noise: [
        "pink_noise",
        "white_noise"
    ]
}

export default function categorize(name: SoundType | IconType): string | boolean {
    Object.entries(categories).forEach(([key, value]) => {
        if (value.includes(name)) {
            return key
        }
    })

    return false
}
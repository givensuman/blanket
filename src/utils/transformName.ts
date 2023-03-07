import type { Icon, Sound, IconsCategory, SoundsCategory } from "../types"

export default function transformName(name: Icon | Sound | IconsCategory | SoundsCategory): string {
    return name.split("_").map(str => (
        str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
    )).join(" ")
}
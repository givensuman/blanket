import type { Categories, IconType, SoundType } from "../types";

export default function transformName(
  name: IconType | SoundType | Categories
): string {
  return name
    .split("_")
    .map((str) => str.slice(0, 1).toUpperCase() + str.slice(1, str.length))
    .join(" ");
}

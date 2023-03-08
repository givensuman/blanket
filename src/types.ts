import icons from "./assets/icons";
import sounds from "./assets/sounds";
import { categories } from './utils/categorize';

export type UnionToIntersection<Union> = (
  Union extends unknown ? (_: Union) => void : never
) extends (_: infer Intersection) => void
  ? Intersection
  : never;

export type Icons = typeof icons;
export type IconType = keyof Icons;

export type Sounds = typeof sounds;
export type SoundType = keyof Sounds;

export type Categories = keyof typeof categories
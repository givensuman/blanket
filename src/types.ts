import icons from "./assets/icons";
import sounds from "./assets/sounds";

export type UnionToIntersection<Union> = (
  Union extends unknown ? (_: Union) => void : never
) extends (_: infer Intersection) => void
  ? Intersection
  : never;

export type Icons = typeof icons;

export type IconsCategory = keyof Icons;

export type IconType = keyof UnionToIntersection<Icons[keyof Icons]>;

export type Sounds = typeof sounds;

export type SoundsCategory = keyof Sounds;

export type SoundType = keyof UnionToIntersection<Sounds[keyof Sounds]>;

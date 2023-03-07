import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import type { SliderProps } from "@chakra-ui/react";

export interface Props extends SliderProps {
  label?: string;
}

const Volume = ({ label, ...props }: Props) => {
  return (
    <Slider aria-label={label} defaultValue={0} min={0} max={100} {...props}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb shadow="sm" border="1px" height={5} width={5} />
    </Slider>
  );
};

export default Volume;

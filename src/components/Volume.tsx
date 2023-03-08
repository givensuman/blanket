import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import type { SliderProps } from "@chakra-ui/react";
import useAudio from '../hooks/useAudio';
import { useColorModeValue } from '@chakra-ui/react';

export interface Props extends SliderProps {
  label?: string;
}

const Volume = ({ label, ...props }: Props) => {
  const { isPaused } = useAudio()

  const thumbBackgroundColor = useColorModeValue("white", "gray.200")
  const thumbBorderColor = useColorModeValue("gray.300", "gray.400")

  return (
    <Slider aria-label={label} defaultValue={0} min={0} max={100} disabled={isPaused} {...props}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb shadow="sm" border="1px" height={5} width={5} bgColor={thumbBackgroundColor} borderColor={thumbBorderColor} />
    </Slider>
  );
};

export default Volume;

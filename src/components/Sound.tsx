import { Heading, HStack, VStack } from "@chakra-ui/react";
import type { StackProps } from "@chakra-ui/react";

import Icon from "./Icon";
import Volume from "./Volume";

import useAudio from "../hooks/useAudio";
import transformName from "../utils/transformName";
import type { IconType, SoundType } from "../types";

export interface Props extends StackProps {
  icon: string;
  sound: string;
  name: IconType | SoundType;
}

const Sound = ({ icon, sound, name, ...props }: Props) => {
  const { audio, volume, changeVolume } = useAudio(sound);

  return (
    <HStack spacing={5} py={2} px={6} alignItems="center" {...props}>
      <Icon src={icon} active={volume > 0} />
      <VStack alignItems="flex-start" w="100%">
        <Heading fontWeight="normal" size="sm">
          {transformName(name)}
        </Heading>
        <Volume label={"Volume controls for " + name} onChange={changeVolume} />
      </VStack>
    </HStack>
  );
};

export default Sound;

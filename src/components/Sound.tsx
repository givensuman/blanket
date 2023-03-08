import { Heading, HStack, VStack, Badge, useColorModeValue } from '@chakra-ui/react';
import type { StackProps } from "@chakra-ui/react";
import { AnimatePresence, motion } from 'framer-motion';

import Icon from "./Icon";
import Volume from "./Volume";

import useAudio from "../hooks/useAudio";
import transformName from "../utils/transformName";
import type { SoundType } from "../types";
import { useState, useEffect } from 'react';

export interface Props extends StackProps {
  icon: string;
  sound: string;
  name: SoundType;
}

const Sound = ({ icon, sound, name, ...props }: Props) => {
  const { audio, isPaused } = useAudio(name)

  const [ volume, setVolume ] = useState(0)

  const changeVolume = (val: number) => {
    setVolume(val)
  }

  audio!.volume = volume / 100

  useEffect(() => {
    if (volume > 0) {
      audio!.play()
    } else {
      audio!.pause()
    }
  }, [volume])

  const badgeColor = useColorModeValue("blue.500", "blue.200")

  return (
    <HStack spacing={5} py={2} px={6} alignItems="center" position="relative" {...props}>
      <Icon src={icon} active={volume > 0} />
      <VStack alignItems="flex-start" w="100%">
        <Heading fontWeight="normal" size="sm">
          {transformName(name)}
        </Heading>
        <Volume label={"Volume controls for " + name} onChange={changeVolume} />
      </VStack>
      <AnimatePresence>
      {volume > 0 && (
        <motion.div
          key={name}
          initial={{ x: 2 }}
          animate={{ x: 0 }}
          exit={{ opacity: 0 }}
          style={{
            position: "absolute",
            left: -28
          }}
        >
          <Badge 
            colorScheme="blue"
            height={4}
            width={4}
            borderRadius="full"
            bgColor={isPaused ? "gray.200" : badgeColor}
            zIndex={1}
          />
        </motion.div>
      )}
      </AnimatePresence>
    </HStack>
  );
};

export default Sound;

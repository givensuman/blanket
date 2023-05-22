import {
  Heading,
  HStack,
  VStack,
  Badge,
  Skeleton,
  useColorModeValue,
} from "@chakra-ui/react";
import type { StackProps } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

import Icon from "./Icon";
import Volume from "./Volume";

import useAudio from "../hooks/useAudio";
import transformName from "../utils/transformName";
import type { SoundType } from "../types";
import { useState, useEffect } from "react";

export interface Props extends StackProps {
  icon: string;
  sound: string;
  name: SoundType;
}

const Sound = ({ icon, sound, name, ...props }: Props) => {
  const { getAudio, resetAudio, globalVolume } = useAudio();
  const audio = getAudio(name);

  const [volume, setVolume] = useState(0);
  const [isLoading, setIsLoading] = useState(true)
  const endLoading = () => setIsLoading(false)

  const changeVolume = (val: number) => {
    setVolume(val);
  };

  audio.volume = (globalVolume * volume) / 100;

  useEffect(() => {
    if (volume > 0) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [volume]);

  useEffect(() => {
    audio.addEventListener('canplaythrough', endLoading)

    return () => {
      audio.removeEventListener('canplaythrough', endLoading)
      resetAudio(name)
    }
  }, [])

  const badgeColor = useColorModeValue("blue.500", "blue.200");

  return (
    <Skeleton isLoaded={!isLoading}>
      <HStack
        spacing={5}
        py={3}
        px={6}
        alignItems="center"
        position="relative"
        {...props}
      >
        {!isLoading && <Icon src={icon} active={volume > 0} />}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "absolute",
                left: -28,
              }}
            >
              <Badge
                colorScheme="blue"
                height={4}
                width={4}
                borderRadius="full"
                bgColor={badgeColor}
                zIndex={1}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </HStack>
    </Skeleton>
  );
};

export default Sound;

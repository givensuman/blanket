import { useEffect } from "react"
import { IconButton, HStack, Popover, PopoverTrigger, PopoverContent, PopoverBody, useDisclosure, useColorModeValue } from "@chakra-ui/react";
import type { StackProps } from "@chakra-ui/react";
import { Pause, Play, List, SpeakerSimpleX, SpeakerSimpleLow, SpeakerSimpleHigh } from "phosphor-react";

import Menu from "./Menu";

import useHasScrolled from "../hooks/useHasScrolled";
import useAudio from "../hooks/useAudio";
import Volume from "./Volume";

interface Props extends StackProps {}

const Controls = ({ ...props }: Props) => {
  const hasScrolled = useHasScrolled();

  const { pauseAll, playAll, isPaused, globalVolume, changeGlobalVolume } = useAudio()

  const { onOpen, onClose, isOpen } = useDisclosure()

  const iconProps = {
    weight: "fill",
    size: hasScrolled ? 24 : 32,
    style: {
      transitionDuration: "200ms"
    }
  } as const

  const pausePlayIcon = isPaused
    ? <Play {...iconProps} />
    : <Pause {...iconProps} />

  const volumeIcon = globalVolume === 0
    ? <SpeakerSimpleX {...iconProps} />
    : globalVolume < 0.5 
      ? <SpeakerSimpleLow {...iconProps} />
      : <SpeakerSimpleHigh {...iconProps} />

  useEffect(() => {
    onClose()
  }, [hasScrolled])

  const popoverBackgroundColor = useColorModeValue("white", "#363636")

  return (
    <HStack pr={4} spacing={4} {...props}>
      <IconButton
        aria-label="Pause/play audio"
        variant="ghost"
        p={2}
        icon={pausePlayIcon}
        onClick={() => {
          if (isPaused) {
            playAll()
          } else {
            pauseAll()
          }
        }}
      />
      <Popover
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      >
        <PopoverTrigger>
          <IconButton
            aria-label="Change volume"
            variant="ghost"
            p={2}
            icon={volumeIcon}
          />
        </PopoverTrigger>
        <PopoverContent maxW={10} display="flex" alignItems="center" p={4} backgroundColor={popoverBackgroundColor}>
          <PopoverBody h={40}>
            <Volume 
              label="Global volume"
              min={0}
              max={1}
              step={0.01}
              onChange={changeGlobalVolume}
              orientation="vertical"
              neverDisabled
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Menu
        aria-label="Open/close menu"
        variant="ghost"
        p={2}
        icon={<List weight="fill" size={hasScrolled ? 24 : 32} />}
      />
    </HStack>
  );
};

export default Controls;

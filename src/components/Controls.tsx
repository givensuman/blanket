import { IconButton, HStack } from "@chakra-ui/react";
import type { StackProps } from "@chakra-ui/react";
import { Pause, Play, List } from "phosphor-react";

import Menu from "./Menu";

import useHasScrolled from "../hooks/useHasScrolled";
import useAudio from "../hooks/useAudio";

interface Props extends StackProps {}

const Controls = ({ ...props }: Props) => {
  const hasScrolled = useHasScrolled();

  const { pauseAll, playAll, isPaused } = useAudio()

  const iconProps = {
    weight: "fill",
    size: hasScrolled ? 24 : 32
  } as const

  const pausePlayIcon = isPaused
    ? <Play {...iconProps} />
    : <Pause {...iconProps} />

  console.log(isPaused)

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

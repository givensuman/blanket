import { Icon, IconButton, HStack } from "@chakra-ui/react"
import type { StackProps } from "@chakra-ui/react"
import { SpeakerSimpleHigh, SpeakerSimpleLow, SpeakerSimpleX, Pause, Play, List } from "phosphor-react"

import Menu from "./Menu"

import useHasScrolled from "../hooks/useHasScrolled"
import { useMemo } from 'react';

interface Props extends StackProps {}

const Controls = ({
    ...props
}: Props) => {

    const hasScrolled = useHasScrolled()

    return (
        <HStack 
            pr={4}
            spacing={4}
            {...props}
        >
            <IconButton
                aria-label="Pause/play audio"
                variant="ghost"
                p={2}
                icon={<Pause 
                    weight="fill"
                    size={hasScrolled ? 24 : 32}
                />}
            />
            <IconButton
                aria-label="Change volume"
                variant="ghost"
                p={2}
                icon={<SpeakerSimpleHigh 
                    weight="fill"
                    size={hasScrolled ? 24 : 32}
                />}
            />
            <Menu
                aria-label="Open/close menu"
                variant="ghost"
                p={2}
                icon={<List 
                    weight="fill"
                    size={hasScrolled ? 24 : 32}
                />}
            />
        </HStack>
    )
}

export default Controls
import { Heading, StackDivider, VStack, HStack, useColorModeValue } from "@chakra-ui/react"


import Sound from "./Sound"

import useAssets from "../hooks/useAssets"
import transformName from "../utils/transformName"
import type { IconType, SoundType, SoundsCategory } from "../types"

export interface Props {
    category: SoundsCategory
}

const Card = ({
    category
}: Props) => {

    const { sounds, icons } = useAssets()

    const gray = useColorModeValue("gray.200", "gray.700")

    return (
        <VStack 
            alignItems="flex-start"
            m={8}
            w={500}
        >
            <Heading 
                size="md"
                fontWeight="semibold"
            >
                {transformName(category)}
            </Heading>
            <VStack
                divider={<StackDivider />}
                spacing={4}
                py={3}
                align="stretch"
                borderRadius="lg"
                border="1px"
                borderColor={gray}
                shadow="lg"
                w="100%"
            >
                {(Object.keys(sounds[category]) as (SoundType | IconType)[]).map((name, i) => (
                    <Sound 
                        key={i}
                        // @ts-ignore
                        icon={icons[category][name]}
                        // @ts-ignore
                        sound={sounds[category][name]}
                        name={name}
                    />
                ))}
            </VStack>
        </VStack>
    )
}

export default Card
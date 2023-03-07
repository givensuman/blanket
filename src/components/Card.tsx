import { Heading, StackDivider, VStack, HStack } from "@chakra-ui/react"


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
                backgroundColor="whiteAlpha.800"
                borderRadius="lg"
                border="1px"
                shadow="lg"
                w="100%"
            >
                {(Object.keys(sounds[category]) as (SoundType | IconType)[]).map((name, i) => (
                    <Sound 
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
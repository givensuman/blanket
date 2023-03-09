import {
  Heading,
  StackDivider,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

import Sound from "./Sound";

import { categories } from "../utils/categorize";
import transformName from "../utils/transformName";
import icons from "../assets/icons";
import sounds from "../assets/sounds";
import type { Categories, SoundType } from "../types";

export interface Props {
  category: Categories;
}

const Card = ({ category }: Props) => {
  const cardBackgroundColor = useColorModeValue("white", "#363636")
  const cardBorderColor = useColorModeValue("gray.200", "gray.800")
  const cardDividerColor = useColorModeValue("gray.200", "gray.600")

  return (
    <VStack alignItems="flex-start" m={8} w={500}maxW="85vw">
      <Heading size="md" fontWeight="semibold">
        {transformName(category)}
      </Heading>
      <VStack
        divider={<StackDivider borderColor={cardDividerColor} />}
        spacing={4}
        py={3}
        align="stretch"
        borderRadius="lg"
        border="1px"
        borderColor={cardBorderColor}
        shadow="lg"
        w="100%"
        bgColor={cardBackgroundColor}
      >
        {(categories[category] as SoundType[]).map((name, i)=> (
          <Sound 
            key={i}
            name={name}
            icon={icons[name]}
            sound={sounds[name]}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default Card;

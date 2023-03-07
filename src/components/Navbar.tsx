import { HStack, Box, Image, Heading, Button } from "@chakra-ui/react";

import Controls from "./Controls";

import useHasScrolled from "../hooks/useHasScrolled";

const Navbar = () => {
  const hasScrolled = useHasScrolled();

  return (
    <HStack
      justifyContent="space-between"
      position="fixed"
      w="100%"
      top={0}
      p={hasScrolled ? 2 : 0}
      bg={"Window"}
      zIndex={10}
      transitionDuration="200ms"
      shadow={hasScrolled ? "lg" : "none"}
    >
      <HStack>
        <Image
          src="/logo.svg"
          alt="logo"
          height={hasScrolled ? "12" : "24"}
          transitionDuration="200ms"
        />
        <Heading
          size={hasScrolled ? "lg" : "2xl"}
          transitionDuration="200ms"
          userSelect="none"
        >
          Blanket
        </Heading>
      </HStack>
      <Controls />
    </HStack>
  );
};

export default Navbar;

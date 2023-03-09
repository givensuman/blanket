import {
  Stack,
  HStack,
  Image,
  Heading,
  useColorMode,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";

import Controls from "./Controls";

import useHasScrolled from "../hooks/useHasScrolled";

const Navbar = () => {
  const hasScrolled = useHasScrolled();

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isSmallScreen] = useMediaQuery("(max-width: 400px)");

  return (
    <Box
      position="fixed"
      top={0}
      display="flex"
      shadow={hasScrolled ? "lg" : "none"}
      backgroundColor={isDark ? "#242424" : "white"}
      zIndex={10}
      w="100%"
    >
      <Stack
        p={hasScrolled ? 2 : [1, 0]}
        transitionDuration="200ms"
        justifyContent="space-between"
        w="100%"
        maxW="6xl"
        mx="auto"
        direction={isSmallScreen ? "column" : "row"}
        alignItems="center"
      >
        <HStack>
          <Image
            src="/logo.svg"
            alt="logo"
            height={hasScrolled ? [8, 12] : [12, 24]}
            transitionDuration="200ms"
          />
          <Heading
            size={hasScrolled ? "lg" : ["xl", "2xl"]}
            transitionDuration="200ms"
            userSelect="none"
          >
            Blanket
          </Heading>
        </HStack>
        <Controls position="relative" left={isSmallScreen ? 4 : 0} />
      </Stack>
    </Box>
  );
};

export default Navbar;

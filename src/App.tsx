import { extendTheme, ChakraProvider, Center, VStack } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { AudioProvider } from "./hooks/useAudio";

import Card from "./components/Card";
import Navbar from "./components/Navbar";

const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#fff", "#242424")(props),
      },
    }),
  },
};

function App() {
  return (
    <ChakraProvider theme={extendTheme(config)}>
      <AudioProvider>
        <Navbar />
        <Center
          mt={32}
          alignItems={["initial", "flex-start"]}
          flexWrap="wrap"
          maxW="100%"
          overflowX="hidden"
          pb={12}
        >
          <Card category="nature" mb={8} />
          <VStack spacing={8}>
            <Card category="travel"/>
            <Card category="interiors" />
            <Card category="noise" />
          </VStack>
        </Center>
      </AudioProvider>
    </ChakraProvider>
  );
}

export default App;

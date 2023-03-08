import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system"
import { mode } from "@chakra-ui/theme-tools"
import { AssetsProvider } from "./hooks/useAssets";
import { Box } from "@chakra-ui/react";

import Card from "./components/Card";
import Navbar from "./components/Navbar";


const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("#fafafa", "#242424")(props)
      }
    })
  }
};



function App() {
  return (
    <>
    <ChakraProvider theme={extendTheme(config)}>
      <AssetsProvider>
        <Box w="100%" maxW="1000px">
          <Navbar />
          <Box display="flex" justifyContent="center" flexWrap="wrap" mt="15%" w="100%">
            <Card category="nature" />
            <div>
              <Card category="travel" />
              <Card category="interiors" />
              <Card category="noise" />
            </div>
          </Box>
        </Box>
      </AssetsProvider>
    </ChakraProvider>
    </>
  );
}

export default App;

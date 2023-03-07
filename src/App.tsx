import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { AssetsProvider } from "./hooks/useAssets";

import { Box } from "@chakra-ui/react";

import Card from "./components/Card";
import Navbar from "./components/Navbar";

const config = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

function App() {
  return (
    <ChakraProvider theme={extendTheme(config)}>
      <AssetsProvider>
        <Box px="auto" pt={14}>
          <Navbar />
          <Box display="flex" justifyContent="center" flexWrap="wrap" pt="10%">
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
  );
}

export default App;

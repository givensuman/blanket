import React from "react";
import {
  Menu as _Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Link,
} from "@chakra-ui/react";
import type { IconButtonProps, MenuItemProps } from "@chakra-ui/react";
import { SunHorizon, MoonStars, GitBranch, Info } from "phosphor-react";

interface Props extends IconButtonProps {}

interface ItemProps extends Omit<MenuItemProps, "icon"> {
  icon: JSX.Element;
  label: React.ReactNode;
}

const Item = ({ icon, label, ...props }: ItemProps) => {
  return (
    <MenuItem mt={1} {...props}>
      {React.cloneElement(icon, {
        weight: "fill",
        size: 24,
      })}
      <Text fontSize="lg" ml={3}>
        {label}
      </Text>
    </MenuItem>
  );
};

const Menu = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const linkColor = useColorModeValue("blue.500", "blue.200");

  return (
    <>
      <_Menu>
        <MenuButton as={IconButton} {...props} />
        <MenuList>
          <Item
            icon={colorMode === "light" ? <MoonStars /> : <SunHorizon />}
            label={`Switch to ${
              colorMode === "light" ? "dark mode" : "light mode"
            }`}
            onClick={toggleColorMode}
          />
          <Item icon={<Info />} label="About this app" onClick={onOpen} />
          <Item
            icon={<GitBranch />}
            label="View codebase"
            onClick={() =>
              window.open("https://www.github.com/givensuman/blanket", "_blank")
            }
          />
        </MenuList>
      </_Menu>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Blanket is an open-source application created by Rafael Mardojai.
              It's available for the GNOME desktop environment on most Linux
              distros.
            </p>
            <p>
              This web app is a re-creation of the original made with React and
              ChakraUI by Given Suman.
            </p>
            <p>
              For information on sound licensing, go{" "}
              <span>
                <Link color={linkColor} href="#">
                  here
                </Link>
              </span>
              .
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                window.open(
                  "https://github.com/rafaelmardojai/blanket",
                  "_blank"
                )
              }
            >
              Get GNOME app
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Menu;

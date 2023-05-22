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
  background,
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
  const menuBackgroundColor = useColorModeValue("white", "#363636");
  const altMenuBackgroundColor = useColorModeValue("gray.100", "#292929");

  const backgroundColors = {
    bgColor: menuBackgroundColor,
    _hover: {
      bgColor: altMenuBackgroundColor
    }
  }

  return (
    <>
      <_Menu>
        <MenuButton as={IconButton} {...props} />
        <MenuList bgColor={menuBackgroundColor}>
          <Item
            icon={colorMode === "light" ? <MoonStars /> : <SunHorizon />}
            label={`Switch to ${
              colorMode === "light" ? "dark mode" : "light mode"
            }`}
            onClick={toggleColorMode}
            {...backgroundColors}
          />
          <Item 
            icon={<Info />} 
            label="About this app" 
            onClick={onOpen} 
            {...backgroundColors}
          />
          <Item
            icon={<GitBranch />}
            label="View codebase"
            onClick={() =>
              window.open("https://www.github.com/givensuman/blanket", "_blank")
            }
            {...backgroundColors}
          />
        </MenuList>
      </_Menu>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={menuBackgroundColor}>
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
              For information on sound licensing, go
              <span>
                <Link 
                  color={linkColor} 
                  href="https://github.com/rafaelmardojai/blanket/blob/master/SOUNDS_LICENSING.md"
                  isExternal
                  ml={1}
                >
                  here
                </Link>
              </span>
              .
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              as={Link}
              href="https://github.com/rafaelmardojai/blanket"
              isExternal
              mr={3}
            >
              Get GNOME app
            </Button>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Menu;

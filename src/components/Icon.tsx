import { ReactSVG } from "react-svg";
import styled from "@emotion/styled";
import { Box, useTheme, useColorModeValue, BoxProps, SkeletonCircle } from "@chakra-ui/react";

interface Props extends BoxProps {
  color?: string;
  src?: string;
  active?: boolean;
}

const Wrapper = styled(Box)<Props>`
  svg {
    path {
      transition: all 200ms;
      fill: ${(props) => props.color} !important;
    }
  }
`;

const Placeholder = () => <SkeletonCircle h="64px" w="64px" />

const Icon = ({ color, src, active = false, ...props }: Props) => {
  const { __cssMap } = useTheme();

  const activeColor = useColorModeValue(
    __cssMap["colors.blue.500"].value,
    __cssMap["colors.blue.200"].value
  );
  const inactiveColor = useColorModeValue(
    __cssMap["colors.gray.700"].value,
    __cssMap["colors.gray.100"].value
  );

  return (
    <Wrapper color={active ? activeColor : inactiveColor} {...props}>
      <ReactSVG 
        src={src as string} 
        loading={Placeholder}
      />
    </Wrapper>
  );
};

export default Icon;

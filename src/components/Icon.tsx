import { ReactSVG } from "react-svg";
import styled from "@emotion/styled";
import { useTheme, useColorModeValue } from "@chakra-ui/react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  active?: boolean;
}

const Wrapper = styled.div<{ color: string }>`
  svg {
    path {
      transition: all 200ms;
      fill: ${(props) => props.color} !important;
    }
  }
`;

const Icon = ({ src, active = false, ...props }: Props) => {
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
      <ReactSVG src={src} />
    </Wrapper>
  );
};

export default Icon;

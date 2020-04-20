import styled from "styled-components";

const Title = styled.h1`
  align-self: ${props => props.alignStyle};
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  font-family: ${props => props.theme.fontFamily};
  margin: 0;
  font-size: ${props => props.fontSize};
  display: ${props => props.displayStyle};
`;

Title.defaultProps = {
  alignStyle: "center",
  displayStyle: "flex"
};

export default Title;

import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../style/theme';

interface ButtonProps {
  text: string
  onClick(): void
}

const StyledButton = styled.div`
  background: ${props => props.theme.buttonBackground};
  border-radius: 10px;
  cursor: pointer;
  margin: 10px auto;
  padding: 10px 15px;
  transition: 0.3s background ease-in;
  width: ${(props: { width?: string }) => props.width};

  :hover {
    background: ${props => props.theme.buttonBackgroundHover}
  }
`;

const Button = (props: ButtonProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledButton
      theme={theme}
      onClick={props.onClick}
    >
      {props.text}
    </StyledButton>
  );
}

export default Button;

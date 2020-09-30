import React, { ReactElement, useContext } from 'react';
import styled, { CSSProperties } from 'styled-components/macro';
import { ThemeContext } from '../../style/theme';
import noop from '../../utils/noop';

interface ButtonProps {
  text: string,
  onClick(): void,
  disabled?: boolean,
  style?: CSSProperties
}

const StyledButton = styled.div`
  background: ${props => props.theme.buttonBackground};
  border-radius: 10px;
  color: ${props => props.theme.color};
  cursor: pointer;
  font-size: 20px;
  padding: 10px 15px;
  transition: 0.3s background ease-in;
  user-select: none;
  width: ${(props: { width?: string }) => props.width};

  :hover {
    background: ${props => props.theme.buttonBackgroundHover}
  }
`;

const Button = (props: ButtonProps): ReactElement => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledButton
      theme={theme}
      onClick={!props.disabled ? props.onClick : noop}
      style={props.style}
    >
      {props.text}
    </StyledButton>
  );
};

export default Button;

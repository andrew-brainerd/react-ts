import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import noop from '../../utils/noop';
import { ThemeContext } from '../../style/theme';

interface TextInputProps {
  value: string,
  onChange(value: string): void,
  onPressEnter(): void
}

const TextInputContainer = styled.div`
  input {
    background: ${props => props.theme.buttonBackground};
    border-radius: 10px;
    border: 2px solid transparent;
    color: ${props => props.theme.color};
    font-size: 20px;
    padding: 10px 15px;
    transition: 0.3s all ease-in;
    user-select: none;
    width: ${(props: { width?: string }) => props.width};
  }
`;

const TextInput = ({ value, onChange, onPressEnter }: TextInputProps): ReactElement => {
  const { theme } = useContext(ThemeContext);

  const handleKeyPress = ({ key }: { key: string }): void => {
    if (key === 'Enter') {
      if (onPressEnter) {
        onPressEnter();
      } else {
        noop();
      }
    }
  };

  return (
    <TextInputContainer theme={theme}>
      <input
        type='text'
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </TextInputContainer>
  );
};

export default TextInput;

import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../style/theme';

interface TextInputProps {
  value: string,
  onChange(): void
}

const TextInputContainer = styled.div`
  position: relative;
`;

const TextInput = ({ value, onChange }: TextInputProps): ReactElement => {
  const { theme } = useContext(ThemeContext);

  return (
    <TextInputContainer theme={theme}>
      <input
        type='text'
        value={value}
        onChange={onChange}
      />
    </TextInputContainer>
  );
};

export default TextInput;

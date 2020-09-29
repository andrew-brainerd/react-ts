import React, { ReactElement, useContext } from 'react';
import styled from 'styled-components/macro';
import { themes, ThemeContext } from '../../style/theme';

const ThemeBlockContainer = styled.div`
  display: flex;
`;

interface SelectedProps {
  isSelected: boolean
}

const ThemeBlock = styled.div`
  background: ${props => props.theme.background};
  border: 3px solid ${(props: SelectedProps) => props.isSelected ? 'white' : 'black'};
  border-radius: 50%;
  cursor: pointer;
  height: 50px;
  margin: 0 5px;
  width: 50px;
`;

const ThemePicker = (): ReactElement => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ThemeBlockContainer>
      {Object.keys(themes).map((t, i) => (
        <ThemeBlock
          key={i}
          theme={themes[t]}
          onClick={() => setTheme(themes[t])}
          isSelected={themes[t].name === theme.name}
        />
      ))}
    </ThemeBlockContainer>
  );
};

export default ThemePicker;

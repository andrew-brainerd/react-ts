import React, { useContext } from 'react';
import styled from 'styled-components';
import { themes, ThemeContext } from '../style/theme';

const ThemeBlockContainer = styled.div`
  display: flex;
`;

const ThemeBlock = styled.div`
  background: ${props => props.theme.background};
  border: 5px solid black;
  cursor: pointer;
  height: 50px;
  margin: 0 5px;
  width: 50px;
`;

const ThemePicker = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <ThemeBlockContainer>
      {Object.keys(themes).map((t, i) => (
        <ThemeBlock
          key={i}
          theme={themes[t]}
          onClick={() => setTheme(themes[t])}
        />
      ))}
    </ThemeBlockContainer>
  );
}

export default ThemePicker;

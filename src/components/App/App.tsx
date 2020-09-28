import React, { useState } from 'react';
import styled from 'styled-components';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Theme, ThemeContext, themes } from '../../style/theme';
import Message from '../Message/Message';
import ThemePicker from '../ThemePicker/ThemePicker';

const AppContainer = styled.div`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  min-height: 100vh;
  text-align: center;
`;

const App = () => {
  const [storedTheme, setStoredTheme] = useLocalStorage('theme', themes.purple);
  const [appTheme, setAppTheme] = useState<Theme>(storedTheme);

  const setTheme = (theme: Theme) => {
    setStoredTheme(theme);
    setAppTheme(theme);
  };

  return (
    <AppContainer>
      <ThemeContext.Provider value={{ theme: appTheme, setTheme }}>
        <Message
          title={'Welcome'}
          text={'Hello, Typescript!'}
        />
        <ThemePicker />
      </ThemeContext.Provider>
    </AppContainer>
  );
}

export default App;

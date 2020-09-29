import React, { ReactElement, useState } from 'react';
import styled from 'styled-components/macro';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Theme, ThemeContext, themes } from '../../style/theme';
import ImageViewer from '../ImageViewer/container';
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

const App = (): ReactElement => {
  const [storedTheme, setStoredTheme] = useLocalStorage('theme', themes.purple);
  const [appTheme, setAppTheme] = useState<Theme>(storedTheme);

  const setTheme = (theme: Theme) => {
    setStoredTheme(theme);
    setAppTheme(theme);
  };

  return (
    <AppContainer>
      <ThemeContext.Provider value={{ theme: appTheme, setTheme }}>
        <ImageViewer />
        <ThemePicker />
      </ThemeContext.Provider>
    </AppContainer>
  );
};

export default App;

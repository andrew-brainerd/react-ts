import { createContext } from 'react';

interface ThemeList {
  [index: string]: Theme
};

export interface Theme {
  name: string,
  background: string,
  headerColor: string,
  color: string,
  buttonBackground: string,
  buttonBackgroundHover: string
};

interface Context {
  theme: Theme,
  setTheme: Function
};

export const themes: ThemeList = {
  purple: {
    name: 'purple',
    headerColor: '#4d277a',
    background: '#160b24',
    color: 'white',
    buttonBackground: '#3b2a50',
    buttonBackgroundHover: '#514263'
  },
  orange: {
    name: 'orange',
    headerColor: '#ffab2a',
    background: '#b98433',
    color: 'white',
    buttonBackground: '#c99f60',
    buttonBackgroundHover: '#d0ad77'
  },
  blue: {
    name: 'blue',
    headerColor: '#457cff',
    background: '#1b3166',
    color: 'white',
    buttonBackground: '#485a84',
    buttonBackgroundHover: '#7683a3'
  },
  green: {
    name: 'green',
    headerColor: '#769452',
    background: '#3b4a29',
    color: 'white',
    buttonBackground: '#626e53',
    buttonBackgroundHover: '#89927e'
  },
};

export const ThemeContext = createContext<Context>({
  theme: themes.purple,
  setTheme: (theme: Theme) => { }
});

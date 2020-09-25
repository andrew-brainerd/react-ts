import { createContext } from 'react';

export interface ThemeList {
  [index: string]: Theme
};

export interface Theme {
  name: string,
  background: string,
  headerColor: string,
  color: string
};

export const themes: ThemeList = {
  purple: {
    name: 'Purple',
    background: '#4d277a',
    headerColor: '#26133d',
    color: 'white'
  },
  orange: {
    name: 'orange',
    background: '#ffab2a',
    headerColor: '#b2771d',
    color: 'white'
  },
  blue: {
    name: 'blue',
    background: '#457cff',
    headerColor: '#1b3166',
    color: 'white'
  },
  green: {
    name: 'green',
    background: '#769452',
    headerColor: '#3b4a29',
    color: 'white'
  },
};

export const ThemeContext = createContext({
  theme: {},
  setTheme: (theme: Theme) => { }
});

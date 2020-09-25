import { createContext } from 'react';

interface ThemeList {
  [index: string]: Theme
};

export interface Theme {
  name: string,
  background: string,
  headerColor: string,
  color: string
};

interface Context {
  theme: object,
  setTheme: Function
};

export const themes: ThemeList = {
  purple: {
    name: 'Purple',
    headerColor: '#4d277a',
    background: '#26133d',
    color: 'white'
  },
  orange: {
    name: 'orange',
    headerColor: '#ffab2a',
    background: '#b2771d',
    color: 'white'
  },
  blue: {
    name: 'blue',
    headerColor: '#457cff',
    background: '#1b3166',
    color: 'white'
  },
  green: {
    name: 'green',
    headerColor: '#769452',
    background: '#3b4a29',
    color: 'white'
  },
};

export const ThemeContext = createContext<Context>({
  theme: {},
  setTheme: (theme: Theme) => { }
});

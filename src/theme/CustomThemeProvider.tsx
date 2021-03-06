import { useAppSelector } from '../store/hooks';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { PropsWithChildren } from 'react';
import { appColors, darkModeColors } from './colors';

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
  const darkMode = useAppSelector((state) => state.darkMode);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: appColors.primary,
      },
    },
    background: darkMode ? darkModeColors.background : appColors.background,
    font: darkMode ? darkModeColors.font : appColors.font,
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomThemeProvider;

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    background: string;
    font: string;
  }
  interface ThemeOptions {
    background: string;
    font: string;
  }
}

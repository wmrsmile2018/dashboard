import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/globalStyles';
import { Screen } from './components/Screen/Screen';
import { Board } from './components/Board';
import { DrawerProvider } from './components/Screen/components/Content/hooks/useDrawer';

export const App = () => {
  const { theme, colorMode } = useMode();
  return (
    <div className='App'>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <DrawerProvider>
            <GlobalStyles />
            <Screen>
              <Board />
            </Screen>
          </DrawerProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

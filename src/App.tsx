import { Card } from 'antd';
import './App.css';
import { ColorModeContext, useMode } from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/globalStyles';
import { Screen } from './components/Screen/Screen';

export const App = () => {
  const { theme, colorMode } = useMode();
  return (
    <div className='App'>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Screen>
            <Card
              title='Default size card'
              extra={<a href='#'>More</a>}
              style={{ width: 300 }}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Screen>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

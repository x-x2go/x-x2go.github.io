import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import Portfolio from './pages/Portfolio';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Portfolio />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
    


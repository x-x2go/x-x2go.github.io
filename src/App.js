import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;

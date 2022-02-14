import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Header from './components/header';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header/>
      <Button variant='contained'>Hello World</Button>
    </ThemeProvider>
  );
}
export default App;
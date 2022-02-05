import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import ResponsiveAppBar from './components/header'
import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { withWidth } from '@material-ui/core';
import App from 'next/app'


const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    }
  }
});

const MyApp=({ Component, pageProps }: AppProps) =>{
  return (
    <>
      <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Box sx={{ display: 'flex', marginTop: '10px',padding:'30px'}} justifyContent={"space-between"} style={{width:'100%'}}>
            <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default MyApp;

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

// export default App;
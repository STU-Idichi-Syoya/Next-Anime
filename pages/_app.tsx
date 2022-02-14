import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import ResponsiveAppBar from '../components/header'
import { Box, Button, CssBaseline } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from 'next/app'
import Header from '../components/header';
import { Grid } from '@mui/material'
import TwoColmnLayout from '../components/twoColmn'
import React from 'react';
import "easymde/dist/easymde.min.css";

// import 'modern-css-reset/dist/reset.min.css'


const theme = createTheme({
  palette: {
    mode: 'light',
    primary:{
      main: '#3E8735',
    },
  },
});


const MyApp=({ Component, pageProps }: any) =>{
  // デフォルトは2カラムレイアウトにする．
  const getLayout= Component.getLayout || ((page: any)=>TwoColmnLayout(page));
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <div style={{marginTop:'5%'}}/>
      {getLayout({Component,pageProps})}
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
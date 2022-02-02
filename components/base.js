import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container } from '@mui/material';

import * as theme from './theme';

const ComponentsHolder = ({ Component, pageProps }) => {
  const { darkTheme, lightTheme } = theme;
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default ComponentsHolder;

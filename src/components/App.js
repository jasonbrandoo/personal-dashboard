import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { AuthContext } from '../context/AuthContext';
import Main from './layout/Layout';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});

const App = () => (
  <AuthContext>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Main />
      </MuiThemeProvider>
    </BrowserRouter>
  </AuthContext>
);

export default App;

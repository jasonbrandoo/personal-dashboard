import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import Router from './routes/Router';
import { AuthContext } from './context/AuthContext';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});

console.log(theme);

const App = () => (
  <AuthContext>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Router />
      </MuiThemeProvider>
    </BrowserRouter>
  </AuthContext>
);

export default App;

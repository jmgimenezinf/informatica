import React from 'react';
import ReactDOM from 'react-dom';

import esLocale from 'date-fns/locale/es';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import App from './root/js/Menu.js';

import { createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';

const theme = createMuiTheme({
  primary: {
    main:'#ff4400'
  },
  secondary: {
    light: '#0066ff',
    main: '#0044ff',
    // dark: will be calculated from palette.secondary.main,
    contrastText: '#ffcc00'
  }
});
ReactDOM.render(
  <MuiPickersUtilsProvider theme={theme} utils={DateFnsUtils} locale={esLocale}>
    <App />
  </MuiPickersUtilsProvider>,
  document.getElementById('menu')
);





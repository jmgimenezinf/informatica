import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import esLocale from 'date-fns/locale/es';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import App from './root/js/Menu.js';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
    <App />
  </MuiPickersUtilsProvider>,
  document.getElementById('menu')
);





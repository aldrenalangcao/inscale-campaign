import React, { Fragment } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import Campaign from './containers/Campaign';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Container maxWidth="md">
          <Campaign />
        </Container>
      </MuiPickersUtilsProvider>
    </Fragment>
  );
}

export default App;

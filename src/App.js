import React from 'react';
import { Container } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import Campaign from './components/Campaign';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Container maxWidth="md">
        <Campaign />
      </Container>
    </MuiPickersUtilsProvider>
  );
}

export default App;

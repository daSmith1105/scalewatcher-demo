import React from 'react';
import Main from './Main';
import './App.css';
import { Grid } from 'react-flexbox-grid';

const App = (props) => {
  return (
    <Grid fluid>
        <Main />
    </Grid>
  );
}

export default App;

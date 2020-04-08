import React from 'react';
import Main from './Main';
import './App.css';
import { Grid } from 'react-flexbox-grid';

class App extends React.Component {
  render() {
    return (
      <Grid fluid style={{ height: '100%', width: '100%' }} >
          <Main />
      </Grid>
    );
  }
}

export default App;

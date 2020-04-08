import React from 'react';
import Main from './Main';
import Header from './components/Header';
import './App.css';
import { Grid } from 'react-flexbox-grid';

class App extends React.Component {
  render() {
    return (
      <Grid fluid >
        <Header />
          <Main />
      </Grid>
    );
  }
}

export default App;

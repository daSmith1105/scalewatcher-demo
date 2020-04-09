import React from 'react';
import Main from './Main';
import Header from './components/Header';
import './App.css';
import { Grid } from 'react-flexbox-grid';

class App extends React.Component {

  state = {
    activeView: 'table'
  }

  setActiveView = (view) => {
    this.setState({ activeView: view });
  };

  render() {
    return (
      <Grid fluid >
        <Header activeView={ this.state.activeView } setActiveView={ this.setActiveView }/>
          <Main activeView={ this.state.activeView } />
      </Grid>
    );
  }
}

export default App;

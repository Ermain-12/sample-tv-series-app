import React, { Component } from 'react';
import './App.css';
import Series from '../../containers/Series'
import Intro from '../Intro';
// import SeriesList from '../../components/SeriesList';
import 'whatwg-fetch';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here, you will find your most loved series!"/>
        <Series />
      </div>
    );
  }
}

export default App;

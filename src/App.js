import React, { Component } from 'react';
import PLACES from './data'
import './App.css';



class WeatherDisplay extends Component {
  render() {
    return (
      <h1>Zip: {this.props.zip}</h1>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherDisplay zip={"12345"} />
      </div>
    );
  }
}

export default App;

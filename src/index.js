// React Import
import React, {Component, Fragment } from 'react';
import { render } from 'react-dom';

// Styles Import
import './assets/reset.css';
import './assets/styles.scss';

//Plugins Import
import Header from './components/Header'

class App extends Component {
  render() {
    return <Header />;
  }
}

render(<App />, document.getElementById("app"));

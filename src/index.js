// React Import
import React, {Component, Fragment } from 'react';
import { render } from 'react-dom';

// Styles Import
import './assets/reset.css';
import './assets/styles.scss';

//Plugins Import
import Header from './components/Header'
import Post from './components/Post/Post'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Post />
        <Post />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));

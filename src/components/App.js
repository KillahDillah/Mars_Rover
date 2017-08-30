import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import '../styles/index.css';
import GetImageForm from './GetImageForm';


class App extends Component {
  render() {
    return (
      <div>
        <GetImageForm />
      </div>
    );
  }
}

export default App;

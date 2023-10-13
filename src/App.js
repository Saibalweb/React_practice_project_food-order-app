import React, { Component } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
       <Header></Header>
       <Meals/>
      </>
     
    );
  }
}

export default App;
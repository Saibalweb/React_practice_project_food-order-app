import React, { Component } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        {/* <Cart/> */}
       <Header></Header>
       <Meals/>
      </>
     
    );
  }
}

export default App;

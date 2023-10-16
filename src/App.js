import React,{useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './components/stores/CartProvider';
import './App.css';

const  App = ()=>  {
  const [showModal,changeShowModal]=useState(false);
  const showCartModal = ()=>{
     changeShowModal(true);
  }
  const hideCartModal = ()=>{
    console.log('hide');
    changeShowModal(false);
  }
  if(showModal){
    document.body.style.overflow='hidden';
  }else{
    document.body.style.overflow='auto';
  }
    return (
      <CartProvider>
        {showModal && <Cart onHideCart = {hideCartModal}/>}
       <Header onShowCart = {showCartModal}></Header>
       <Meals/>
      </CartProvider>
     
    );
}

export default App;

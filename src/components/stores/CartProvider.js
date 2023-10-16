import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {items:[],totalAmount:0}

const cartReducer = (state,action)=>{
    if(action.type==='ADD'){
        console.log(action.item);
       const updatedItems = state.items.concat(action.item);
       const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
       return{
        items:updatedItems,
        totalAmount:updatedTotalAmount,
       }
    }
    else if(action.type ==='REMOVE'){
        
    }
    return defaultCartState;
}
const CartProvider = (props)=>{
    const [cartState, cartStateDispatch]= useReducer(cartReducer,defaultCartState);

    const addItemHandler = (item)=>{
        cartStateDispatch({type:'ADD',item:item})
    };
    const removeItemHandler = (id)=>{
        cartStateDispatch({type:'REMOVE',item:item})
    };
    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;
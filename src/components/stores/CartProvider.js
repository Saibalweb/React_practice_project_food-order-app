import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {items:[],totalAmount:0}

const cartReducer = (state,action)=>{
    let updatedItems;
    if(action.type==='ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        const existCartIndex = state.items.findIndex(item=>item.id===action.item.id);
        const existCartItem = state.items[existCartIndex];

        if(existCartItem){
            let updatedItem = {
                ...existCartItem,
                amount:existCartItem.amount+action.item.amount,
            }
            updatedItems = [...state.items];
            updatedItems[existCartIndex]=updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }
        
       return{
        items:updatedItems,
        totalAmount:updatedTotalAmount,
       }
    }
    else if(action.type ==='REMOVE'){
        const cartIndex = state.items.findIndex(item=>item.id===action.id.id);
        const existCartItem = state.items[cartIndex];
        if(existCartItem.amount ===1){
            updatedItems = state.items.filter(item=>item.id!==action.id.id)
        }else if(existCartItem.amount>1){
            let updatedItem = {
                ...existCartItem,
                amount:existCartItem.amount-1,
            }
            updatedItems = [...state.items];
            updatedItems[cartIndex]= updatedItem;
        }
        const updatedAmount = state.totalAmount-existCartItem.price;
        return{
            items:updatedItems,
            totalAmount:updatedAmount,
        }
    }
    return defaultCartState;
}
const CartProvider = (props)=>{
    const [cartState, cartStateDispatch]= useReducer(cartReducer,defaultCartState);

    const addItemHandler = (item)=>{
        cartStateDispatch({type:'ADD',item:item})
    };
    const removeItemHandler = (id)=>{
        cartStateDispatch({type:'REMOVE',id:id})
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
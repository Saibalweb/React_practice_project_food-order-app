import { useContext,Fragment } from 'react';
import CartContext from '../stores/cart-context';

import Modal from '../UI/Modal'
import Card from '../UI/Card'
import styles from './Cart.module.css'
const Cart = (props)=>{
    const cartCtx = useContext(CartContext);
    const totalPrice = `${(cartCtx.totalAmount).toFixed(2)}`;
    const hasItem = cartCtx.items.length>0;
    const addButtonHandler=(item)=>{
       cartCtx.addItem({...item,amount:1})
    }
    const removeButtonHandler=(id)=>{
       cartCtx.removeItem({id})
    }

    return(
        <Modal onHideCart={props.onHideCart}>
            <Card className={styles.overLay}>
            {cartCtx.items.map((item)=>(
                <Fragment key={item.id}>
                <div className={styles.amount} >
                    <div className={styles.itemNameContainer}>
                        <h2 className={styles.itemName}>{item.name}</h2>
                        <p>Qty:<span>{item.amount}</span></p>
                    </div>
                    <div className={styles.amountDetails} >
                        <h2>{item.price}</h2>
                        <button className={styles.amountDetailsBtn} onClick={removeButtonHandler.bind(null,item.id)}>-</button>
                        <button className={styles.amountDetailsBtn} onClick={addButtonHandler.bind(null,item)}>+</button>
                    </div>
                </div>
                <hr/>
                </Fragment>   
            ))}
           
            <div className={styles.totalAmount}>
                <h1>Total Amount</h1>
                <h1>{totalPrice}</h1>
            </div>

            <div className={styles.btnContainer}>
                <button className={styles.cancelButton} onClick={props.onHideCart}>Cancel</button>
                {hasItem && <button className={styles.orderButton}>Order</button>}
            </div>
            </Card>
        </Modal>

    )
}
export default Cart;
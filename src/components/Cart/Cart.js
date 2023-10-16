import { useContext } from 'react';
import CartContext from '../stores/cart-context';

import Modal from '../UI/Modal'
import Card from '../UI/Card'
import styles from './Cart.module.css'
const Cart = (props)=>{
    const cartCtx = useContext(CartContext);
    const totalPrice = cartCtx.totalAmount;
    const hasItem = cartCtx.items.length>0;
    return(
        <Modal onHideCart={props.onHideCart}>
            <Card className={styles.overLay}>
            {cartCtx.items.map((item)=>(
                <>
                {console.log(item)}
                <div className={styles.amount} key={item.id}>
                    <div className={styles.itemNameContainer}>
                        <h2 className={styles.itemName}>{item.name}</h2>
                        <p>Qty:<span>{item.amount}</span></p>
                    </div>
                    <div className={styles.amountDetails} >
                        <h2>{item.price}</h2>
                        <button className={styles.amountDetailsBtn}>-</button>
                        <button className={styles.amountDetailsBtn}>+</button>
                    </div>
                </div>
                <hr/>
                </>   
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
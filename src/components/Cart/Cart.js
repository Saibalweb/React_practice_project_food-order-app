import Modal from '../UI/Modal'
import Card from '../UI/Card'
import styles from './Cart.module.css'
const Cart = (props)=>{
    return(
        <Modal onHideCart={props.onHideCart}>
            <Card className={styles.overLay}>
            <p>Products</p>
            <div className={styles.amount}>
                <h2>Chocolate</h2>
                <div className={styles.amountDetails} >
                <h2>4500</h2>
                <button className={styles.amountDetailsBtn}>Add</button>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.cancelButton} onClick={props.onHideCart}>Cancel</button>
                <button className={styles.orderButton}>Order</button>
            </div>
            </Card>
        </Modal>

    )
}
export default Cart;
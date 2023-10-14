import Card from '../UI/Card'
import styles from './Cart.module.css'
const Cart = ()=>{
    return(
        <>
        <div className={styles.backDrop}></div>
        <div className={styles.overLayFlex}>
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
                <button className={styles.orderButton}>Order</button>
                <button className={styles.cancelButton}>Cancel</button>
            </div>
        </Card>
        </div>
        
        </>
    )
}
export default Cart;
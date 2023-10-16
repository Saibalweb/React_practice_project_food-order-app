import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../stores/cart-context';
import styles from './MealItem.module.css';
const MealItem =(props)=>{
    const cartCtx = useContext(CartContext);
    const item = props.mealItem;
    const getAmountHandler=(amount)=>{
        const sentItem= {
            id: item.id,
            name:item.name,
            price:item.price,
            amount:amount,
        }
        cartCtx.addItem(sentItem);
    }
    return(
        <li className={styles.mealItem}>
            <div className={styles['flex-wrap']}>
            <div className={styles.itemDetails}>
            <h2 className={styles.itemName}>{item.name}</h2>
            <p className={styles.itemDescription}>{item.description}</p>
            <p className={styles.price}>&#8377;{item.price}</p>
            </div>
            <MealItemForm id={item.id} onGetAmount={getAmountHandler}/>
            </div> 
            <hr />
        </li>
    )
}
export default MealItem;
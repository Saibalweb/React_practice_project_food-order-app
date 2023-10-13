import MealItemForm from './MealItemForm'
import styles from './MealItem.module.css'
const MealItem =(props)=>{
    const item = props.mealItem
    return(
        <li className={styles.mealItem}>
            <div className={styles['flex-wrap']}>
            <div className={styles.itemDetails}>
            <h2 className={styles.itemName}>{item.name}</h2>
            <p className={styles.itemDescription}>{item.description}</p>
            <p className={styles.price}>&#8377;{item.price}</p>
            </div>
            <MealItemForm id={item.id}/>
            </div> 
            <hr />
        </li>
    )
}
export default MealItem;
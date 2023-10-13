import Input from "../UI/Input"
import styles from './MealItemForm.module.css'
const MealItemForm = (props)=>{
    return(
        <div>
            <form action="">
            <Input label="Amount"
                input={{
                    id:'amount_' +props.id,
                    type:'text',
                    inputMode:'numeric',
                    min:'1',
                    max:'10',
                    step:'1',
                    defaultValue:'1',
                }}
            />
            <button className={styles.mealItemFormBtn}>+ Add</button>
            </form>
        </div>
        
    )
}
export default MealItemForm
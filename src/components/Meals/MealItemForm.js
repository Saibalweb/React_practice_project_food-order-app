import { useRef } from "react"
import Input from "../UI/Input"
import styles from './MealItemForm.module.css'
const MealItemForm = (props)=>{
    const inputRef = useRef();
    const submitHandler = (e)=>{
        e.preventDefault();
        const enteredAmount = inputRef.current.value;
        const enteredAmountNum = +enteredAmount;
        console.log(enteredAmountNum);
        if(enteredAmount.trim().length===0 || enteredAmountNum >20 || enteredAmountNum<0){
            return;
        }
        props.onGetAmount(enteredAmountNum);
    }
    return(
        <div>
            <form action="" onSubmit={submitHandler}>
            <Input label="Amount"
                ref={inputRef}
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
            <button className={styles.mealItemFormBtn} type="submit">+ Add</button>
            </form>
        </div>
        
    )
}
export default MealItemForm
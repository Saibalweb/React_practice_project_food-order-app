import styles from './MealsSummary.module.css'
const MealsSummary = ()=>{
    return(
        <section className={styles.summary}>
            <h2>Delicous Food, Delivered To You</h2>
            <p>
                choose Your Favourite meal from our broad selection of available meals and enjoy a delicous lunch or dinner at home
            </p>
            <p>
                All our meals are cooked with High quality ingredients, just in time and of course by experienced chefs!
            </p>
        </section>
    )
};
export default MealsSummary;
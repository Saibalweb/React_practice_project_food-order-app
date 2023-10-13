import MealItem from './MealItem';
import Cart from '../UI/Cart';
import styles from './AvailableMeals.module.css'

const DUMMY_MEALS = [
{
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
},
{
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
},
{
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
},
{
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
},
];
const AvailableMeals = ()=>{
    const mealLists = DUMMY_MEALS;
    return(
        <Cart className={styles.meals}>
            <ul>
                {mealLists.map((meal)=>(
                    <MealItem mealItem={meal} key={meal.id}/>
                ))}
            </ul>
        </Cart>
    );
}
export default AvailableMeals;
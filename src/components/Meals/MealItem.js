const MealItem =(props)=>{
    const item = props.mealItem
    return(
        <li>
            <div className="ItemDetails">
            <h2 className="ItemName">{item.name}</h2>
            <p className="ItemDescription">{item.description}</p>
            </div>
        </li>
    )
}
export default MealItem;
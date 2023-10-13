import './Cart.css'
const Cart = (props)=>{
    return(
        <section className={`cart ${props.className}`}>
            {props.children}
        </section>
    )
}
export default Cart;
import CartButton from './CartButton';
import styles from './Header.module.css';
import backImg from '../../assets/emy-XoByiBymX20-unsplash.jpg';
const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>Food Meals</h1>
                <CartButton/>
            </header>
            <div className={styles['main-image']}>
                <img src={backImg} alt='A table of food' />
            </div>
        </>
    );

}
export default Header;
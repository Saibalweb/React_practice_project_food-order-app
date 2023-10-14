import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = (props)=>{
       return (<div className={styles.backDrop} onClick={props.onHideCart} ></div>);
};

const ModalOverlay = (props)=>{
    return(<>{props.children}</>);
};

const portalTargetPosition = document.getElementById('overlays');

const Modal = (props)=>{
    return(
        <>
        {ReactDOM.createPortal(<Backdrop onHideCart = {props.onHideCart} />,portalTargetPosition)}
        {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>,portalTargetPosition)}
        </>
    );
}
export default Modal;
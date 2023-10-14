import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = (props)=>{
       return <div className={styles.backDrop}></div>;
};

const ModalOverlay = (props)=>{
    return(<div className={styles.overLayFlex}>{props.children}</div>);
};

const portalTargetPosition = document.getElementById('overlays');

const Modal = (props)=>{
    return(
        <>
        {ReactDOM.createPortal(<Backdrop/>,portalTargetPosition)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalTargetPosition)}
        </>
    );
}
export default Modal;
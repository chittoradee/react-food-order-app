import { Fragment } from 'react';
import classes from './Modal.module.css';
import reactDOM from 'react-dom';
const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onCloseCart}></div>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays')
const Modal = props => {
    return (
        <Fragment>
            {reactDOM.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>,portalElement)}
            {reactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    );
};

export default Modal;
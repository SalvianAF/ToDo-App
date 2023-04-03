import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ConfirmationModal = (props) => {
    return (
        <Modal
            show={props.show} onHide={props.handleClose} animation={true}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body style={{textAlign:"center", paddingTop:30}}>
            <p>
                Confirm to clear all todos?
            </p>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
                <Button variant="outline-light" onClick={props.onHide} style={{width:120}}>Cancle</Button>
                <Button variant="danger" style={{width:120}} onClick={props.clearToDoList}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ConfirmationModal
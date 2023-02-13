import "bootstrap/dist/css/bootstrap.min.css";
import "./ModalJs.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";

function ModalJs(props) {
  const handleClose = () => props.setAtivo(false);
  return (
    <>
      <Modal show={props.ativo} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {props.cancelButton}
          </Button>
          <Button variant="primary" onClick={props.confirmAction}>
            {props.confirmButton}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalJs;

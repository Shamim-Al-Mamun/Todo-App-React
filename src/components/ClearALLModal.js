import React from "react";
import { Modal, Button } from "react-bootstrap";

function ClearALLModal(props) {
  console.log(props);
  const { show, setShow, setTodos, handleClose } = props;
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center w-100">Todo App</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-dark">
          Are you sure, want to delete all Todos.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setTodos([]);
              setShow(false);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClearALLModal;

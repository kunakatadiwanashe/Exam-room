import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ImpersonationWarning = () => {
  const handleClose = () => {
    // Handle the closing of the modal
    // You can implement any required logic here
  };

  return (
    <Modal show={true} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Impersonation Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Person in the camera is not recognized.</h6>
        <p>Ensure your face is clearly visible.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ImpersonationWarning;

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalActions(props) {
    function handleClose() {
        props.setOpenModal(false);
        console.log("Chau Modal");
    }
    return (
        <>
          <Modal show={props.openModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default ModalActions;
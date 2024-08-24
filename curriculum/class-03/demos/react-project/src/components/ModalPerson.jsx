import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ModalPerson(props) {
  function handleClose() {
    props.setModalPersona({});
    console.log("Chau Modal");
  }

  return (
    <>
      <Modal
        show={Object.keys(props.modalPersona).length !== 0}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.modalPersona.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card.Img variant="top" src="https://placehold.co/60x30" />
        <h2>Hijos: {props.modalPersona.hijos}</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

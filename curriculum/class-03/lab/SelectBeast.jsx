import { Modal, Button, Card } from "react-bootstrap"
function SelectBeast(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose} >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>{props.selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card onClick={props.mostrarModal}  style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.selectedBeast.image_url} />
                        <Card.Body>
                            <Card.Title>{props.selectedBeast.title}</Card.Title>
                            <Card.Text >
                                    <div>Descripción: {props.selectedBeast.description}</div>
                                    <div>Número de cuernos: {props.selectedBeast.horns}</div>
                                    <div>Palabra Clave: {props.selectedBeast.keyword}</div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.handleClose} variant="primary">Close</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    )
}
export default SelectBeast;
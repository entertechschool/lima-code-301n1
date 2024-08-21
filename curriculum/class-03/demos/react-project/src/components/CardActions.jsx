import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ModalActions from './ModalAction';

function CardActions(props) {

    const [openModal, setOpenModal] = useState(false);

    function aumentar() {
        props.aumentar();
        props.setContadorcito(props.contadorcito + 100);
    }

    function disminuir() {
        props.disminuir();
        props.setContadorcito(props.contadorcito - 100);
    }

    function handleModal() {
        setOpenModal(true);
    }

    return (
        <>
            <h3>soy CardActions.jsx (child)</h3>
            <p>Contadorcito: {props.contadorcito}</p>
            <Button variant="success" onClick={aumentar}>Aumentar padre +</Button>
            <Button variant="warning" onClick={disminuir}>Disminuir padre -</Button>
            <Button variant="primary" onClick={handleModal}>Abrir Modal</Button>
            <ModalActions openModal={openModal} setOpenModal={setOpenModal} />
        </>
    )
}

export default CardActions;


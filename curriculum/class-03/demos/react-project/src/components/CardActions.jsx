import Button from 'react-bootstrap/Button';

function CardActions(props) {

    function aumentar() {
        props.aumentar();
        props.setContadorcito(props.contadorcito + 100);
    }

    function disminuir() {
        props.disminuir();
        props.setContadorcito(props.contadorcito - 100);
    }

    return (
        <>
            <h3>soy CardActions.jsx (child)</h3>
            <p>Contadorcito: {props.contadorcito}</p>
            <Button variant="success" onClick={aumentar}>Aumentar padre +</Button>
            <Button variant="info" onClick={disminuir}>Disminuir padre -</Button>
        </>
    )
}

export default CardActions;


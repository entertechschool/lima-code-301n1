import Button from 'react-bootstrap/Button';

function CardActions(props) {
    return (
        <>
            <h3>soy CardActions.jsx (child)</h3>
            <Button variant="success" onClick={props.aumentar}>Aumentar conteo +</Button>
            <Button variant="info" onClick={props.disminuir}>Disminuir conteo -</Button>
        </>
    )
}

export default CardActions;


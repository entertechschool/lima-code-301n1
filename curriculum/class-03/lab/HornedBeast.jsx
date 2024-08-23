import { useState } from "react";
import { Card, Button } from 'react-bootstrap'
function HornedBeast(props) {
    const [clicks, setClicks] = useState(0);
    function addCounter() {
        setClicks(clicks + 1);
        console.log(clicks);
    }
    return (
        <>
            <Card onClick={()=>{props.mostrarModal(props.title);}} style={{ width: '18rem' }} >
                <Card.Img variant="top" src={props.imageUrl} alt={props.title} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        Descripción : {props.description}
                        Número de cuernos: {props.horns}
                        Palabra clave : {props.keyword}
                    </Card.Text>
                    <Button onClick={(e)=>{e.stopPropagation(); addCounter();}} variant="primary">Me gusta : {clicks}</Button>
                </Card.Body>
            </Card>
        </>
    );
}
export default HornedBeast;

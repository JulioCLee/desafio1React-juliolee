import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card} from 'react-bootstrap';


const CardImagen = ({img, title, text}) => {
    return (
        <div>
            <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{ fontSize: "14px", fontWeight: "bold", color: "black" }}>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button variant="secondary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardImagen
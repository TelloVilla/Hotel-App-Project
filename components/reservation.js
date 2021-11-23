import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"
export default function Reservation(props){
    return(
<<<<<<< HEAD
        <Card bg="dark" text="white">
=======
        <Card bg="dark" text="white" style={{ width: "350px" }}>
            <Card.Img variant="top" alt="Reserv Here" />
>>>>>>> origin/jose-branch
            <Card.Body>
                <Card.Header>Reservation ID: {props.reserv.id}</Card.Header>
                <Card.Header>Hotel: {props.reserv.hotel}</Card.Header>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Check In: {props.reserv.start}</ListGroupItem>
                <ListGroupItem>Check Out: {props.reserv.end}</ListGroupItem>
                <ListGroupItem>Room Type: {props.reserv.roomType}</ListGroupItem>
                <ListGroupItem>Room Price: {props.reserv.price}$</ListGroupItem>
                <ListGroupItem>Surcharge Applied: {props.reserv.surcharge ? "Yes" : "No"}</ListGroupItem>
            </ListGroup>
            <Button variant="primary">Edit Reservation</Button>
        </Card>

    )
}

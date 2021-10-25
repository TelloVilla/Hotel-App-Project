import { Card, ListGroup, ListGroupItem, Dropdown, Accordion, Button } from "react-bootstrap"
export default function Reservation(props){
    return(
        <Card bg="dark" text="white">
            <Card.Img variant="top" alt="Reserv Here" />
            <Card.Body>
                <Card.Header>Reservation ID: {props.reserv.id}</Card.Header>
                <Card.Header>Hotel: {props.reserv.hotel}</Card.Header>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Check In: {props.reserv.start}</ListGroupItem>
                <ListGroupItem>Check Out: {props.reserv.end}</ListGroupItem>
                <ListGroupItem>Room Type: {props.reserv.roomType}</ListGroupItem>
            </ListGroup>
            <Button variant="primary">Edit Reservation</Button>
        </Card>

    )
}
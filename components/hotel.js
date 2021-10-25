import { Card, ListGroup, ListGroupItem, Dropdown, Accordion, Button } from "react-bootstrap"
export default function Hotel(props){
    return(
        <Card border="dark">
            <Card.Img variant="top" alt="Hotel Here" />
            <Card.Body>
                <Card.Header>{props.hotel.name}</Card.Header>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Total Rooms: {props.hotel.rooms}</ListGroupItem>
                <ListGroupItem>Vacancy {props.hotel.vacancy}</ListGroupItem>
                <ListGroupItem>Surcharge Rate: {Math.ceil(((props.hotel.surcharge - 1) * 100)) + "%"}</ListGroupItem>
            </ListGroup>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Amenities</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup className="list-group-flush">
                            {props.hotel.amenities.pool && <ListGroupItem>Pool</ListGroupItem>}
                            {props.hotel.amenities.gym && <ListGroupItem>Gym</ListGroupItem>}
                            {props.hotel.amenities.spa && <ListGroupItem>Spa</ListGroupItem>}
                            {props.hotel.amenities.office && <ListGroupItem>Office</ListGroupItem>}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Prices</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup className="list-group-flush">
                            {props.hotel.price.standard && <ListGroupItem>Standard: {props.hotel.price.standard}
                            </ListGroupItem>}
                            {props.hotel.price.queen && <ListGroupItem>Queen: {props.hotel.price.queen}</ListGroupItem>}
                            {props.hotel.price.king && <ListGroupItem>King: {props.hotel.price.king}</ListGroupItem>}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>   
            <Button variant="primary">Book Reservation</Button>
        </Card>

    )
}
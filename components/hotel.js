import { Card, ListGroup, ListGroupItem, Dropdown, Accordion, Button } from "react-bootstrap"
import { withIronSession } from "next-iron-session"
export default function Hotel(props){
  //test data
    // let hotel = "The Magnolia All Suites"
    // let guest = "jim"
    // let roomType = "standard"
    // let start = "12-5-23"
    // let end = "12-7-23"
    // let surcharge = true;
    const addres = async event => {
        event.preventDefault()
  
        const res = await fetch("/api/addReservToUser", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                hotel: props.hotel,
                guest: "eugene",
                roomType: props.roomType,
                start: props.start,
                end: props.end,
                surcharge: props.surcharge,
            })
      })
    }    
    return(
        <Card border="dark">
            <Card.Img variant="top" src="/hotel.svg" alt="Hotel Here" />
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
                            {props.hotel.price.standard && <ListGroupItem>Standard: ${props.hotel.price.standard}
                            </ListGroupItem>}
                            {props.hotel.price.queen && <ListGroupItem>Queen: ${props.hotel.price.queen}</ListGroupItem>}
                            {props.hotel.price.king && <ListGroupItem>King: ${props.hotel.price.king}</ListGroupItem>}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>   
            <Button variant="primary" onClick={addres}>Book Reservation</Button>
        </Card>

    )
}


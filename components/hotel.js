import { Card, ListGroup, ListGroupItem, Dropdown, Accordion, Button } from "react-bootstrap"
import router from "next/router"
export default function Hotel(props){
    function handleManage(){
        router.push("/manageHotel?name=" + props.hotel.name);

    }
    function handleBook(){
        router.push("/bookingForm?name=" + props.hotel.name);
    }
    return(
        <Card border="dark">
            <Card.Img variant="top" src="/hotel.svg" alt="Hotel Here" />
            <Card.Body>
                <Card.Header text="dark">{props.hotel.name}</Card.Header>
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
                            {props.hotel.breakfast && <ListGroupItem>Free Continental Breakfast</ListGroupItem>}
                            {props.hotel.free_wifi && <ListGroupItem>Free Wifi Available</ListGroupItem>}
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Policies</Accordion.Header>
                    <Accordion.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{props.hotel.smoking ? "Smoking Avaiable":"Non-Smoking Only"}</ListGroupItem>
                            <ListGroupItem>{props.hotel.pets_allowed ? "Pet-Friendly":"No Pets Allowed"}</ListGroupItem>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
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
            {props.mode == "manage" && <Button onClick={handleManage}>Manage</Button>}
            {props.mode == "book" && <Button onClick={handleBook}>Book</Button>}
        </Card>

    )
}
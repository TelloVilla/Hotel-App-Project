import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import Link from "next/link";

export default function Admin(props) {
  return (
    <>
      <Container className="heading-container">
        <Row>
          <Col>
            <Image
              src="https://via.placeholder.com/225"
              className="user-image"
              alt="User Image Here"
              roundedCircle
            ></Image>
          </Col>
          <Col>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="user-welcome">Welcome, {props.user.username}!</h1>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Container className="body-container">
        <Row>
          <Col sm>
            <Card className="text-center" style={{ width: "350px" }}>
              <Card.Body>
                <Card.Title>Manage Users</Card.Title>
                <Card.Text>Create, View users.</Card.Text>
                <Button variant="dark" href="/manageUsers">
                  Manage Users
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="text-center" style={{ width: "350px" }}>
              <Card.Body>
                <Card.Title>Manage Hotels</Card.Title>
                <Card.Text>View list of assigned hotels.</Card.Text>
                <Button variant="dark" href="/manageHotel">
                  Manage Hotels
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="text-center" style={{ width: "350px" }}>
              <Card.Body>
                <Card.Title>Manage Reservations</Card.Title>
                <Card.Text>
                  Create, View, Update, and Delete reservations for your
                  hotels.
                </Card.Text>
                <Button variant="dark" href="/manageReservations">
                  Manage Reservations
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

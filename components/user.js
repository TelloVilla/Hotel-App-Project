import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import Link from "next/link";

export default function User(props) {
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
            <Card className="text-center" style={{ width: '350px' }}>
              <Card.Body>
                <Card.Title>View Hotels</Card.Title>
                <Card.Text>View available hotels in the area.</Card.Text>
                <Button variant="dark" href="/hotelsPage">
                  View Hotels
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="text-center" style={{ width: '350px' }}>
              <Card.Body>
                <Card.Title>Manage Reservations</Card.Title>
                <Card.Text>Manage your current reservations.</Card.Text>
                <Button variant="dark" href="/reservations">
                  Manage Reservations
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="text-center" style={{ width: '350px' }}>
              <Card.Body>
                <Card.Title>Edit Profile</Card.Title>
                <Card.Text>Update your name, username and address.</Card.Text>
                <Button variant="dark" href="/editProfile">
                  Edit Profile
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

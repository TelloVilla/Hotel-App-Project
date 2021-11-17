import { Container, Row, Col, Image } from "react-bootstrap";
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
            <h1 className="user-welcome">Welcome, {props.user.username}!</h1>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <h3>Employee Info</h3>
            <p>
              Employee Info placeholder text, not quite sure what to do here or
              just remove this seciton, well see.
            </p>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Container className="body-container">
        <Row>
          <Col>
            <h3 className="header-text">Reservations</h3>
            <hr></hr>
            <ul>
                <li>Create Reservation</li>
                <li>View Reservation</li>
                <li>Update Reservation</li>
                <li>Delete Reservation</li>
            </ul>
          </Col>
          <Col>
            <h3 className="header-text">Manage</h3>
            <hr></hr>
            <ul>
                <li>View Users</li>
                <li>View Hotels</li>
                <li>View Promotions</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Container className="footer">
        <Link href="/editProfile">Edit Profile</Link>
      </Container>
    </>
  );
}

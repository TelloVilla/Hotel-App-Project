import { Container, Row, Col, Image, Button } from "react-bootstrap";
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
            <h1 className="user-welcome">Welcome, {props.user.username}!</h1>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <h3>About Me</h3>
            <p className="user-about-me">
              He was an expert but not in a discipline that anyone could fully
              appreciate. He knew how to hold the cone just right so that the
              soft server ice-cream fell into it at the precise angle to form a
              perfect cone each and every time. It had taken years to perfect
              and he could now do it without even putting any thought behind it.
              Nobody seemed to fully understand the beauty of this
              accomplishment except for the new worker who watched in amazement.
            </p>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Container className="body-container">
        <Row>
          <Col>
            <h3 className="header-text">Account Info</h3>
            <hr></hr>
            <ul>
              <li>Personal Info</li>
              <li>Payment Methods</li>
              <li>Addresses</li>
              <li>Security</li>
              <li>Preferences</li>
            </ul>
          </Col>
          <Col>
            <h3 className="header-text">Manage</h3>
            <hr></hr>
            <ul>
              <li>
                <Link href="/reservations">Reservations</Link>
              </li>
              <li>
                <Link href="/hotelsPage">Hotels</Link>
              </li>
              <li>Coupons and Credits</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Container className="footer">
        <Button variant="dark" href="/editProfile">
          Edit Profile
        </Button>
      </Container>
    </>
  );
}

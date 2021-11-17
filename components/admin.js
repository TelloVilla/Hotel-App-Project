import { Container, Row, Col, Image, Button } from "react-bootstrap";
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
              Employee info placeholder text, not quite sure what to do here or
              just remove this section, well see. Also, finalize what to put in
              each menu/column for both admin and customer. Should be an easy
              fix since its just a matter of linking things to whatever I need
              them to be linked to.
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
              <li>
                <Link href="/manageUsers">Users</Link>
              </li>
              <li>
                <Link href="/manageHotel">Hotels</Link>
              </li>
              <li>
                <Link href="/manageReservations">Reservations</Link>
              </li>
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

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import HeadBar from "../components/headbar";

export default function ManageUsers() {
  return (
    <>
      <head>
        <title>Manage Users</title>
      </head>
      <HeadBar></HeadBar>
      <br></br>
      <Container>
        <Row>
          <Col>
            <Card className="text-center" style={{ width: "350px" }}>
              <Card.Body>
                <Card.Title>Create User</Card.Title>
                <Card.Text>Create a user account for a customer.</Card.Text>
                <Button variant="dark" href="/createUser">
                  Create User
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="text-center" style={{ width: "350px" }}>
              <Card.Body>
                <Card.Title>View Users</Card.Title>
                <Card.Text>View list of all users registered.</Card.Text>
                <Button variant="dark" href="/viewUsers">
                  View Users
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="text-center" style={{ width: "350px" }}>
              <Card.Body>
                <Card.Title>Update User</Card.Title>
                <Card.Text>Update a registered user&apos;s information</Card.Text>
                <Button variant="dark" href="/">
                  Update User
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card className="text-center" style={{ width: "350px" }}>
              <Card.Body>
                <Card.Title>Delete User</Card.Title>
                <Card.Text>Delete a registered user&apos;s account.</Card.Text>
                <Button variant="dark" href="/">
                  Delete User
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

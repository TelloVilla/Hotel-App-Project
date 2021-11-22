import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import HeadBar from "../components/headbar";

export default function CreateUser() {
  return (
    <>
      <head>
        <title>Create User</title>
      </head>
      <HeadBar></HeadBar>
      <br></br>
      <Container>
          <h2>Create User</h2>
          <br></br>
        <Form>
          <Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Admin?" />
          </Form.Group>

          <Button id="saveButton" variant="dark" size="lg" href="/manageUsers">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

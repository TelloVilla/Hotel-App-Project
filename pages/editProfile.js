import React from "react";
import { Container, Row, Form, Button, Alert, Col } from "react-bootstrap";
import HeadBar from "../components/headbar";

function editProfile() {
  return (
    <>
      <HeadBar></HeadBar>
      <br></br>
      <Container>
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
        <br></br>
        <Row>
          <Form.Group className="mb-3" controlId="formGridUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control/>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control/>
          </Form.Group>
        </Row>
        <br></br>
        <Row>
          <Button id="saveButton" variant="primary" size="lg" href="/userPage">
            Submit
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default editProfile;

import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import Header from "../components/header";

function editProfile() {

  const router = useRouter();
  const [description, setDescription] = useState('')

  const data = { description }

  const submitForm = async event => {
      event.preventDefault()

      const res = await fetch("/api/updateUser", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      })
  }

  return (
    <>
      <Header></Header>
      <br></br>
      <Container>
        <Row>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Upload Profile Picture</Form.Label>
            <Form.Control type="file" size="lg" />
          </Form.Group>
        </Row>
        <br></br>
        <Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>About Me</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
        </Row>
        <br></br>
        <Row>
          <Button variant="primary" size="lg">
            Submit
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default editProfile;

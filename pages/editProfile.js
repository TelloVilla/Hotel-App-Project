import { useRouter } from "next/router";
import { useState } from "react";
import React from "react";
import { Container, Row, Form, Button, Alert } from "react-bootstrap";
import Header from "../components/header";
import { useForm } from "react-hook-form";

function editProfile() {
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
          <Button id="saveButton" variant="primary" size="lg">
            Submit
          </Button>
        </Row>
        <br></br>
        <Row>
          <Alert variant="success" id="saveAlert" className="text-center">
            <Alert.Heading></Alert.Heading>
            <p>Changes Saved</p>
          </Alert>
        </Row>
      </Container>
    </>
  );
}

export default editProfile;

import React from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import HeadBar from "../components/headbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function editProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();
  const data = {
    username,
    firstName,
    lastName,
    address,
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/updateUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return router.push("/userPage");
    } else {
      return router.push("/something");
    }
  };

  return (
    <>
      <HeadBar></HeadBar>
      <br></br>
      <Container>
        <h2>Edit Profile</h2>
        <br></br>
        <Form id="editProfileForm" onSubmit={submitForm}>
          <Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your new first name"
                onChange={(e) => setFirstName(e.target.value)}
                id="inputField"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your new last name"
                onChange={(e) => setLastName(e.target.value)}
                id="inputField"
              />
            </Form.Group>
          </Row>
          <br></br>
          <Row>
            <Form.Group className="mb-3" controlId="formGridUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Enter your new username"
                onChange={(e) => setUsername(e.target.value)}
                id="inputField"
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="address"
                placeholder="Enter your new address"
                onChange={(e) => setAddress(e.target.value)}
                id="inputField"
              />
            </Form.Group>
          </Row>
          <br></br>
          <Row>
            <Button id="submitButton" type="submit" variant="dark" size="lg">
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default editProfile;

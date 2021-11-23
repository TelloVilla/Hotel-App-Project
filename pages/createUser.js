import { Container, Row, Col, Button, Form } from "react-bootstrap";
import HeadBar from "../components/headbar";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CreateUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const data = {
    username,
    password,
    firstName,
    lastName,
    admin: {
      status: isAdmin,
      hotels: [],
    },
  };
  
  const handleChange = () => {
    setIsAdmin(!isAdmin);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return router.push("/manageUsers");
    } else {
      return router.push("/something");
    }
  };

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
        <Form id="createUserForm" onSubmit={submitForm}>
          <Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your First Name"
                onChange={(e) => setFirstName(e.target.value)}
                id="inputField"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Last Name"
                onChange={(e) => setLastName(e.target.value)}
                id="inputField"
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
                id="inputField"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="inputField"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              type="checkbox"
              label="Admin?"
              adm={isAdmin}
              onChange={handleChange}
            />
          </Form.Group>

          <Button id="submitButton" type="submit" variant="dark" size="lg">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

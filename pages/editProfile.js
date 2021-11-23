import React from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import HeadBar from "../components/headbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { withIronSession } from "next-iron-session";

function EditProfile({ user }) {
  const username = user.username;
  const [newUsername, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [billaddress, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const data = {
    username,
    newUsername,
    firstname,
    lastname,
    billaddress,
    password,
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/updateUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    //if sucessfully updated, logout user and make them log in with new credentials
    if (res.ok) {
      //const onLogout = async (e) => {
      const response = await fetch("api/logout");
      if (response.ok) {
        return router.push("/");
      }
      //};
      //return router.push("/userPage");
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
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your new password"
                onChange={(e) => setPassword(e.target.value)}
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

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");

    if (!user) {
      return {
        redirect: {
          destination: "/loginForm",
          permanent: false,
        },
      };
    }
    return {
      props: { user },
    };
  },
  {
    cookieName: "hotel-cookie",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: process.env.APPLICATION_SECRET,
  }
);

export default EditProfile;

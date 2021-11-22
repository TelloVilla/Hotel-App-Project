import { useState, useCallback } from "react";
import React from "react";
import { useRouter } from "next/router";
import { Form, Button, Nav, Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";
//import styles from "../styles/registerpage.module.css"

export default function regForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [billingAddr, setBillingAddr] = useState("");
  const [isAdmin, setIsAdmin] = useState();
  const router = useRouter();

  const handleChange = () => {
    setIsAdmin(!isAdmin);
    document.getElementById("billingField").value = "";
    document.getElementById("billingField").disabled = !isAdmin;
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const data = {
      username,
      firstName,
      lastName,
      billingAddr,
      password,
      admin: {
        status: isAdmin,
        hotels: [],
      },
    };

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return router.push("/");
    }

    if (res.status === 400) {
      toast.error("Could Not Register", {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    }

    if (!username) {
      toast.warn("Username field is empty!", {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    }

    if (!password) {
      toast.warn("Password field is empty!", {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    }

    if (!firstName) {
      toast.warn("First Name field is empty!", {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    }

    if (!lastName) {
      toast.warn("Last Name field is empty!", {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    }

    if (!billingAddr && !isAdmin) {
      toast.warn("Billing Address field is empty!", {
        theme: "colored",
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <Container>
    <div>
      <Image
        src="/form_background.jpeg"
        alt="hotel background"
        layout="fill"
      ></Image>
      <div
        className="card"
        style={{
          display: "block",
          width: 600,
          padding: 100,
          marginTop: 100,
          backgroundColor: "white",
          opacity: 0.9,
        }}
        id="register"
      >
        <Form onSubmit={submitForm} id="form">
          <div>
            <Form.Group className="mb-3" id="input">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
                id="usernameField"
              />
            </Form.Group>
            <Form.Group className="mb-3" id="input">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                id="passwordField"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="input">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your First Name"
                onChange={(e) => setFirstName(e.target.value)}
                id="firstNameField"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="input">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Last Name"
                onChange={(e) => setLastName(e.target.value)}
                id="lastNameField"
              />
            </Form.Group>

            <Form.Group className="mb-3" id="input">
              <Form.Label>Billing Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Billing Address"
                onChange={(e) => setBillingAddr(e.target.value)}
                id="billingField"
              />
            </Form.Group>

            <Button variant="primary" type="submit" id="submitButton">
              Register
            </Button>
            <Form.Group className="col-6">
              <Form.Label id="Already">Already registered?</Form.Label>
              
              <Form.Group>
            <Form.Group className="col-6">
            <Link href="/loginForm" passHref>
                
                <Nav.Link>Log in</Nav.Link>
                
              </Link>
            </Form.Group>

                  
                <div>
                  <input
                    type="checkbox"
                    value="Admin"
                    onChange={handleChange}
                  ></input>{" "}
                  Admin
                </div>
              </Form.Group>
            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
    </Container>
  );
}

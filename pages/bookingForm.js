import { useState, useCallback } from "react";
import React from "react";
import { useRouter } from "next/router";
import { Form, Button, Nav, Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";
//import styles from "../styles/registerpage.module.css"

const  bookForm = ({user}) => {
  const user = user.username;
  const [hotel, setHotel] = useState("");
  const [roomType, setRoomType] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const router = useRouter();


  const submitForm = async (event) => {
    event.preventDefault();
    const reserv = {
      username,
      roomType,
      start,
      end,
    };

    const res = await fetch("/api/addReservToUser", {
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
        fluid="true"
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
              <Form.label>Hotel</Form.label>
              <Form.Control type="text" value={props.hotel}></Form.Control>
            </Form.Group>
            
            <Form.Group className="mb-3" id="input">
            <Form.Group className="mb-3" id="input">
              <Form.label>Start</Form.label>
              <Form.Control type="date"></Form.Control>
            </Form.Group>

             
            </Form.Group>

            <Form.Group className="mb-3" id="input">
              
            </Form.Group>

            <Form.Group className="mb-3" id="input">
              
            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
    </Container>
  );
}
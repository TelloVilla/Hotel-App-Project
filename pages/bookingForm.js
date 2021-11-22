import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { Form, Button, Nav, Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";
import { withIronSession } from "next-iron-session";
//import styles from "../styles/registerpage.module.css"

const BookForm = ({user})=>{
  const [hotel, setHotel] = useState("");
  const [roomType, setRoomType] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const router = useRouter();


  const submitForm = async (event) => {
    event.preventDefault();
    const reserv = {
      guest,
      roomType,
      start,
      end,
    };

    const res = await fetch("/api/addReservToUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reserv),
    });

    if (res.ok) {
      return router.push("/");
    }

    if (res.status === 400) {
      toast.error("Could Not Book", {
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
              <Form.Control type="text"></Form.Control>
            
            </Form.Group>
            <Form.Group className="mb-3" id="input">
              <Form.label>Start</Form.label>
              <Form.Control type="date"></Form.Control>
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
export const getServerSideProps = withIronSession(
    async ({req, res}) => {
      const user = req.session.get("user");
      
      if(!user){
        return {
          redirect:{
            destination: '/loginForm',
            permanent: false
          },
        }
  
      }
      return{props: user}
    },
    {
      cookieName: "hotel-cookie",
      cookieOptions: {
        secure: process.env.NODE_ENV === "production" ? true : false
      },
      password: process.env.APPLICATION_SECRET
    }
  )
  export default BookForm;
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { Form, Button, Nav, Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { withIronSession } from "next-iron-session";
//import styles from "../styles/registerpage.module.css"

const BookForm = ({user}) =>{
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

    
  };

  return (
    <Container>
        test
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
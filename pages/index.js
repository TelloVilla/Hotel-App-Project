import Hotel from "../components/hotel"
import { withIronSession } from "next-iron-session";
import { useEffect, useState } from "react";
import {Button, Container, Row, Col, Spinner} from "react-bootstrap"
import HeadBar from "../components/headbar";

const HotelsPage = (user) =>{
    const [admin, setAdmin] = useState(false);
    const [hotels, setHotels] = useState(null);
    const fetchData = async () =>{
      const res = await fetch("/api/getAllHotels");
      const data = await res.json()
      setHotels(data.map((h, i) => <Col key={i} ><Hotel key={i} hotel={h} mode="book"></Hotel></Col>))
  }
    useEffect(() => {        
        fetchData();
        setAdmin(user.admin);
    },[])

    function handleReservation(e){
      e.preventDefault;
      console.log(e.target.name);

    }
    
    
    

    if(!hotels){
        return(
            <Container>
                <HeadBar loggedIn={user}></HeadBar>
                <Spinner animation="border"></Spinner> Loading...
            </Container>
        )
    }
    
    return(
        <Container>
            <HeadBar loggedIn={user}></HeadBar>
            <Row>
              {hotels}
            </Row>
        </Container>
    )

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
  export default HotelsPage;

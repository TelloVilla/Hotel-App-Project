import Hotel from "../components/hotel"
import { withIronSession } from "next-iron-session";
import { useEffect, useState } from "react";
import {Button, Container, Spinner} from "react-bootstrap"

const HotelsPage = ({user}) =>{
    const [hotels, setHotels] = useState(null);
    const fetchData = async () =>{
      const res = await fetch("/api/getAllHotels");
      const data = await res.json()
      setHotels(data.map((h, i) => <Container><Hotel key={i} hotel={h}></Hotel><Button name={h.name} onClick={handleReservation}>Reserve</Button></Container>))
  }
    useEffect(() => {        
        fetchData();
    },[])

    function handleReservation(e){
      e.preventDefault;
      console.log(e.target.name);

    }
    
    
    

    if(!hotels){
        return(
            <div>
                <Spinner animation="border"></Spinner> Loading...
            </div>
        )
    }
    
    return(
        <div>
            {hotels}
        </div>
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
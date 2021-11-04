import Hotel from "../components/hotel"
import { withIronSession } from "next-iron-session";
import { useEffect, useState } from "react";
<<<<<<< HEAD
=======
import {Button, Container, Spinner} from "react-bootstrap"

>>>>>>> main
const hotelsPage = ({user}) =>{
    const [hotels, setHotels] = useState(null);
    const fetchData = async () =>{
      const res = await fetch("/api/getAllHotels");
      const data = await res.json()
<<<<<<< HEAD
      setHotels(data.map((h) => <Hotel hotel={h}></Hotel>))
=======
      setHotels(data.map((h) => <Container><Hotel hotel={h}></Hotel><Button name={h.name} onClick={handleReservation}>Reserve</Button></Container>))
>>>>>>> main
  }
    useEffect(() => {        
        fetchData();
    },[])
<<<<<<< HEAD
=======

    function handleReservation(e){
      e.preventDefault;
      console.log(e.target.name);

    }
>>>>>>> main
    
    
    

    if(!hotels){
        return(
<<<<<<< HEAD
          
            <div>
                Loading...
=======
            <div>
                <Spinner animation="border"></Spinner> Loading...
>>>>>>> main
            </div>
        )
    }
    
    return(
<<<<<<< HEAD

=======
>>>>>>> main
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
<<<<<<< HEAD
            destination: '/LoginForm',
=======
            destination: '/loginForm',
>>>>>>> main
            permanent: false
          },
        }
  
      }
      return{props: user}
<<<<<<< HEAD


      
=======
>>>>>>> main
    },
    {
      cookieName: "hotel-cookie",
      cookieOptions: {
        secure: process.env.NODE_ENV === "production" ? true : false
      },
<<<<<<< HEAD
      password: "9KDjQvxpVRz1D3DWvLL5t9k3hOfZPw3i"
=======
      password: process.env.APPLICATION_SECRET
>>>>>>> main
    }
  )
  export default hotelsPage;
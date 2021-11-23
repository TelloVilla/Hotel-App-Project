import Hotel from "../components/hotel"
import { withIronSession } from "next-iron-session";
import { useEffect, useState } from "react";
import {Button, Container, Spinner} from "react-bootstrap"
import router, { Router } from 'next/router'

const adminHotels = ({user}) =>{
    const [hotels, setHotels] = useState(null);
    const fetchData = async () =>{
      const res = await fetch("/api/getAdminHotels");
      const data = await res.json()
      setHotels(data.map((h) => <Hotel hotel={h} mode="manage"></Hotel>))
  }
    useEffect(() => {        
        fetchData();
    },[])

    async function handleManage(e){
      return router.push("/manageHotel?name="+e.target.name)
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
      if(!user.admin.status){
        return {
          redirect:{
            destination: '/loginForm',
            permanent: false
          }
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
  export default adminHotels;
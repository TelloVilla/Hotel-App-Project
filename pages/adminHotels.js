import Hotel from "../components/hotel";
import { withIronSession } from "next-iron-session";
import { useEffect, useState } from "react";
import {Button, Container, Spinner} from "react-bootstrap"
import router, { Router } from 'next/router'

const AdminHotels = ({user}) =>{
    const [hotels, setHotels] = useState(null);
    const fetchData = async () =>{
      const res = await fetch("/api/getAdminHotels");
      const data = await res.json()
      setHotels(data.map((h, i) => <Hotel key={i} hotel={h} mode="manage"></Hotel>))
  }
    useEffect(() => {        
        fetchData();
    },[])

    async function handleManage(e){
      // let hotel = {name: e.target.name}
      // const res = await fetch("/api/getHotel", {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify(hotel)
      // })
      // console.log(res)
      // const hotelName = e.target.name;
      // const [currentHotel, setCurrentHotel] = useLocalStorage("currentHotel", res.json());
      return router.push("/manageHotel?name="+e.target.name)
    }

  function handleReservation(e) {
    e.preventDefault;
    console.log(e.target.name);
  }

  if (!hotels) {
    return (
      <div>
        <Spinner animation="border"></Spinner> Loading...
      </div>
    );
  }

  return <div>{hotels}</div>;
};

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
  export default AdminHotels;

import Hotel from "../components/hotel";
import { withIronSession } from "next-iron-session";
import { useEffect, useState } from "react";
import {Button, Container, Spinner, Alert} from "react-bootstrap"
import router, { Router } from 'next/router'
import HeadBar from "../components/headbar";

const AdminHotels = ({user}) =>{
    const [hotels, setHotels] = useState(null);
    const fetchData = async () =>{
      const res = await fetch("/api/getAdminHotels");
      if(res.ok){
        const data = await res.json()
        setHotels(data.map((h, i) => <Hotel key={i} hotel={h} mode="manage"></Hotel>))
      }else{
        setHotels("none");
      }
      
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
  }

  if (!hotels) {
    return (
      <div>
        <HeadBar LoggedIn={user}></HeadBar>
        <Spinner animation="border"></Spinner> Loading...
      </div>
    );
  }
  if(hotels == "none"){
    return(
      <div>
        <HeadBar LoggedIn={user}></HeadBar>
        <Alert variant="warning">No Managed Hotels</Alert>
      </div>
    )
  }

  return <div><HeadBar LoggedIn={user}></HeadBar>{hotels}</div>;
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
        secure: false
      },
      password: process.env.APPLICATION_SECRET
    }
  )
  export default AdminHotels;

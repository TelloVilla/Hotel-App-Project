import { withIronSession } from 'next-iron-session'
import Hotel from "../components/hotel"
import Head from 'next/head'
import Header from '../components/header'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Form, Button, Nav, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const manageHotel = ({currentHotel}) => {

  const [hotelName, setHotelName] = useState('')
  const [hotelRooms, setHotelRooms] = useState('')
  const [hotelAmenities, setHotelAmenities] = useState('')
  const [hotelPrices, setHotelPrices] = useState('')
  const [hotelSurcharge, setHotelSurcharge] = useState('')

  const data = {
    hotelName,
    hotelRooms,
    hotelAmenities,
    hotelPrices,
    hotelSurcharge
  }

  const submitForm = async event => {
    event.preventDefault()

    const res = await fetch("/api/updateHotel", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })

    if(res.ok) {
      return router.push('/manageHotel')
    }
  }

  return (
    <div>
    <Header/>
    <div style={{ display: 'block', 
    width: 700, 
    paddingLeft: 100,
    paddingTop: 20 }}
    id="hotelInfo">
    <Form onSubmit={submitForm} id="form">
      
  <Form.Group className="mb-3" id="input">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Hotel Name"  onChange={e => setHotelName(e.target.value)} id="inputField"/>
    
  </Form.Group>
  <Form.Group className="mb-3" id="input">
  <Form.Label>Rooms</Form.Label>
    <Form.Control type="text" placeholder="Hotel Rooms"  onChange={e => setHotelRooms(e.target.value)} id="inputField"/>
  </Form.Group>
  <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Hotel Picture</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Form.Group className="mb-3" id="input">
    <Form.Label>Amenities</Form.Label>
    <Form.Check type="checkbox" label="Pool" />
    <Form.Check type="checkbox" label="Spa" />
    <Form.Check type="checkbox" label="Gym" />
    <Form.Check type="checkbox" label="Office" />
  </Form.Group>
  <Form.Label>Prices</Form.Label>
  <Row className="mb-3">
    <Form.Group as={Col} id="input">
      <Form.Label>Standard</Form.Label>
      <Form.Control type="text" placeholder="Standard Price"  onChange={e => setHotelRooms(e.target.value)} id="inputField"/>
    </Form.Group>

    <Form.Group as={Col} id="input">
      <Form.Label>King</Form.Label>
      <Form.Control type="text" placeholder="King Price"  onChange={e => setHotelRooms(e.target.value)} id="inputField"/>
    </Form.Group>

    <Form.Group as={Col} id="input">
      <Form.Label>Queen</Form.Label>
      <Form.Control type="text" placeholder="Queen Price"  onChange={e => setHotelRooms(e.target.value)} id="inputField"/>
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" id="input">
  <Button variant="primary" type="submit" id="submitButton" >
    Update
  </Button>
  <Button variant="primary" type="button" id="reservationsButton" >
    View/Edit Reservations
  </Button>
  </Form.Group>
</Form>
</div>
</div>
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

    // if(!currentHotel){
    //   return {
    //     redirect:{
    //       destination: '/',
    //       permanent: false
    //     },
    //   }
    // }

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
export default manageHotel;
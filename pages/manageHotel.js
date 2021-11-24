import { withIronSession } from 'next-iron-session'
import Hotel from "../components/hotel"
import Head from 'next/head'
import Header from '../components/header'
import router, {useRouter} from 'next/router'
import { useEffect, useState, React } from "react";
import { Form, Button, Nav, Row, Col, InputGroup, Alert} from 'react-bootstrap'
import Link from 'next/link'
import { isUndefined } from 'lodash'

const ManageHotel = ({user}) => {
  const {query} = useRouter()

  const fetchData = async () =>{
    const res = await fetch("/api/getHotelbyName", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(query.name)
    })
    let data = await res.json()
    if (isUndefined(data.name)) {
      return router.push("/adminHotels")
    }
    setHotel(data)
    setHotelName(data.name)
    setHotelRooms(data.rooms)
    setHotelAmenitiesPool(data.amenities.pool)
    setHotelAmenitiesSpa(data.amenities.spa)
    setHotelAmenitiesGym(data.amenities.gym)
    setHotelAmenitiesOffice(data.amenities.office)
    setHotelPriceStandard(data.price.standard)
    setHotelPriceKing(data.price.king)
    setHotelPriceQueen(data.price.queen)
    setHotelSurcharge(data.surcharge)
    setHotelSmoking(data.smoking)
    setHotelPetsAllowed(data.pets_allowed)
    setHotelFreeWifi(data.pets_allowed)
    setHotelBreakfast(data.breakfast)
  }
  useEffect(() => {        
    fetchData()
  },[])

  const [hotel, setHotel] = useState('')

  const [hotelName, setHotelName] = useState('')
  const [hotelRooms, setHotelRooms] = useState(0)
  const [hotelAmenitiesPool, setHotelAmenitiesPool] = useState(false)
  const [hotelAmenitiesSpa, setHotelAmenitiesSpa] = useState(false)
  const [hotelAmenitiesGym, setHotelAmenitiesGym] = useState(false)
  const [hotelAmenitiesOffice, setHotelAmenitiesOffice] = useState(false)
  const [hotelPriceStandard, setHotelPriceStandard] = useState(0)
  const [hotelPriceKing, setHotelPriceKing] = useState(0)
  const [hotelPriceQueen, setHotelPriceQueen] = useState(0)
  const [hotelSurcharge, setHotelSurcharge] = useState(0)
  const [hotelSmoking, setHotelSmoking] = useState(false)
  const [hotelPetsAllowed, setHotelPetsAllowed] = useState(false)
  const [hotelFreeWifi, setHotelFreeWifi] = useState(false)
  const [hotelBreakfast, setHotelBreakfast] = useState(false)

  const submitForm = async event => {
    event.preventDefault()

    hotel.rooms = parseInt(hotelRooms)
    hotel.amenities.pool = hotelAmenitiesPool
    hotel.amenities.spa = hotelAmenitiesSpa
    hotel.amenities.gym = hotelAmenitiesGym
    hotel.amenities.office = hotelAmenitiesOffice
    hotel.price.standard = parseInt(hotelPriceStandard)
    hotel.price.king = parseInt(hotelPriceKing)
    hotel.price.queen = parseInt(hotelPriceQueen)
    hotel.surcharge = parseFloat(hotelSurcharge)
    hotel.smoking = hotelSmoking
    hotel.pets_allowed = hotelPetsAllowed
    hotel.free_wifi = hotelFreeWifi
    hotel.breakfast = hotelBreakfast

    const res = await fetch("/api/updateHotel", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(hotel)
    })

    return router.push('/manageHotel?name='+hotelName+"&success="+res.ok)
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
  {query.success == "true" && 
    <Alert variant="success">Hotel information updated successfully.</Alert>
  }
  {query.success == "false" &&
    <Alert variant="danger">An unexpected error occurred updating the hotel information.</Alert>
  }
  <Form.Group className="mb-3" id="input">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Hotel Name" disabled id="inputField" style={{ width: '300px' }} value={hotelName}/>
  </Form.Group>
  <Form.Group className="mb-3" id="input">
  <Form.Label>Rooms</Form.Label>
    <InputGroup className="mb-3" style={{ width: '110px' }}>
      <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
      <Form.Control type="text" placeholder="Rooms"  onChange={e => setHotelRooms(e.target.value)} id="inputField" value={hotelRooms}/>
    </InputGroup>
  </Form.Group>
  <Form.Group className="mb-3" id="input">
    <Form.Label>Amenities</Form.Label>
    <Form.Check type="checkbox" label="Pool" onClick={e => setHotelAmenitiesPool(e.target.checked)} defaultChecked={hotelAmenitiesPool}/>
    <Form.Check type="checkbox" label="Spa" onClick={e => setHotelAmenitiesSpa(e.target.checked)} defaultChecked={hotelAmenitiesSpa}/>
    <Form.Check type="checkbox" label="Gym" onClick={e => setHotelAmenitiesGym(e.target.checked)} defaultChecked={hotelAmenitiesGym}/>
    <Form.Check type="checkbox" label="Office" onClick={e => setHotelAmenitiesOffice(e.target.checked)} defaultChecked={hotelAmenitiesOffice}/>
  </Form.Group>
  <Form.Label>Prices</Form.Label>
  <Row className="mb-3">
    <Form.Group as={Col} id="input">
      <Form.Label>Standard</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
        <Form.Control type="text" placeholder="Standard Price"  onChange={e => setHotelPriceStandard(e.target.value)} id="inputField" value={hotelPriceStandard}/>
      </InputGroup>
    </Form.Group>

    <Form.Group as={Col} id="input">
      <Form.Label>King</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
        <Form.Control type="text" placeholder="King Price"  onChange={e => setHotelPriceKing(e.target.value)} id="inputField" value={hotelPriceKing}/>
      </InputGroup>
    </Form.Group>

    <Form.Group as={Col} id="input">
      <Form.Label>Queen</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
        <Form.Control type="text" placeholder="Queen Price"  onChange={e => setHotelPriceQueen(e.target.value)} id="inputField" value={hotelPriceQueen}/>
      </InputGroup>
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" id="input">
  <Form.Label>Surcharge Rate</Form.Label>
    <Form.Control type="text" placeholder="Surcharge"  onChange={e => setHotelSurcharge(e.target.value)} id="inputField" value={hotelSurcharge}/>
  </Form.Group>
  <Form.Group className="mb-3" id="input">
    <Form.Check type="checkbox" label="Smoking Allowed" onClick={e => setHotelSmoking(e.target.checked)} defaultChecked={hotelSmoking}/>
    <Form.Check type="checkbox" label="Pets Allowed" onClick={e => setHotelPetsAllowed(e.target.checked)} defaultChecked={hotelPetsAllowed}/>
    <Form.Check type="checkbox" label="Free Wifi" onClick={e => setHotelFreeWifi(e.target.checked)} defaultChecked={hotelFreeWifi}/>
    <Form.Check type="checkbox" label="Breakfast" onClick={e => setHotelBreakfast(e.target.checked)} defaultChecked={hotelBreakfast}/>
  </Form.Group>
  <Form.Group className="mb-3" id="input">
  <Button variant="primary" type="submit" id="submitButton" >
    Update
  </Button>
  <Button variant="primary" type="button" id="reservationsButton" style={{ margin: '10px' }}>
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
export default ManageHotel;
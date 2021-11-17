import { withIronSession } from 'next-iron-session'
import Hotel from "../components/hotel"
import Head from 'next/head'
import Header from '../components/header'
import router, {useRouter} from 'next/router'
import { useEffect, useState } from "react";
import { Form, Button, Nav, Row, Col, InputGroup} from 'react-bootstrap'
import Link from 'next/link'

const manageHotel = ({user}) => {
  const {query} = useRouter()

  console.log(query.name)
  const fetchData = async () =>{
    const res = await fetch("/api/getHotelbyName", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(query.name)
    })
    // console.log(await res.json())
    let data = await res.json()
    console.log(data)
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
    console.log(hotel)

    const res = await fetch("/api/updateHotel", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(hotel)
    })

    // if(res.ok) {
    //   return router.push('/manageHotel?name='+hotelName)
    // }
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
    <Form.Check type="checkbox" label="Pool" onChange={e => setHotelAmenitiesPool(e.target.value)} defaultChecked={hotelAmenitiesPool}/>
    <Form.Check type="checkbox" label="Spa" onChange={e => setHotelAmenitiesSpa(e.target.value)} defaultChecked={hotelAmenitiesSpa}/>
    <Form.Check type="checkbox" label="Gym" onChange={e => setHotelAmenitiesGym(e.target.value)} defaultChecked={hotelAmenitiesGym}/>
    <Form.Check type="checkbox" label="Office" onChange={e => setHotelAmenitiesOffice(e.target.value)} defaultChecked={hotelAmenitiesOffice}/>
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
    {/* <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">%</InputGroup.Text> */}
      <Form.Control type="text" placeholder="Surcharge"  onChange={e => setHotelSurcharge(e.target.value)} id="inputField" value={hotelSurcharge}/>
    {/* </InputGroup> */}
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
import { useEffect, useState, useCallback, React } from "react";
import router, { useRouter } from "next/router";
import { Form, Button, Nav, Row, Col, Container, InputGroup, Alert } from "react-bootstrap";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";
import { withIronSession } from "next-iron-session";
import { isUndefined } from 'lodash'
import Header from '../components/header'
import DatePicker from "react-datepicker";

const BookForm = (user)=>{
  const {query} = useRouter()

  const fetchData = async () =>{
    const res = await fetch("/api/getHotelbyName", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(query.name)
    })
    let data = await res.json()
    if (isUndefined(data.name)) {
      return router.push("/")
    }
    
    setHotel(data)
    setHotelName(data.name)
    setName(data.name)
    setUserName(user.username)
  }
  useEffect(() => {        
    fetchData()
  },[])

  const [hotel, setHotel] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());
  const router = useRouter();


  const submitForm = async (event) => {
    event.preventDefault();
    const reserv = {
      hotelName,
      userName,
      roomType,
      start,
      end
    };

    const res = await fetch("/api/addReservToUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reserv),
    })

    router.push("/bookingForm?name=" +hotelName+"&success="+res.ok);
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
    <Alert variant="success">Reservation created successfully.</Alert>
  }
  {query.success == "false" &&
    <Alert variant="danger">An unexpected error occurred creating the reservation.</Alert>
  }
  <Form.Group className="mb-3" id="input">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Hotel Name" disabled id="inputField" style={{ width: '300px' }} value={name}/>
  </Form.Group>
  <Row className="mb-3">
    <Form.Group as={Col} id="input">
      <Form.Label>Start Date</Form.Label>
      <DatePicker selected={start} onChange={(e) => setStart(e)}/>
    </Form.Group>
    <Form.Group as={Col} id="input">
      <Form.Label>End Date</Form.Label>
      <DatePicker selected={end} onChange={(e) => setEnd(e)}/>
    </Form.Group>
  </Row>
  <Form.Group className="mb-3" id="input">
    <Form.Label>Room Type</Form.Label>
    <Form.Check type="radio" label="Standard" name="radios" onClick={function (e) {setRoomType("standard"); setPrice(hotel.price.standard)}}/>
    <Form.Check type="radio" label="Queen" name="radios" onClick={function (e) {setRoomType("queen"); setPrice(hotel.price.queen)}}/>
    <Form.Check type="radio" label="King" name="radios" onClick={function (e) {setRoomType("king"); setPrice(hotel.price.king)}}/>
  </Form.Group>
  <Form.Group className="mb-3" id="input">
      <Form.Label>Price Per Day</Form.Label>
      <InputGroup className="mb-3" style={{ width: '100px' }}>
        <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
        <Form.Control type="text" placeholder="Price" disabled id="inputField" value={price}/>
      </InputGroup>
    </Form.Group>
  <Form.Group className="mb-3" id="input">
  <Button variant="primary" type="submit" id="submitButton" >
    Create Reservation
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
  export default BookForm;
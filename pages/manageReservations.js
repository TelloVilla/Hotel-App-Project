import { useState } from "react"

export default function ManageReservations() {

    const [id, setId] = useState('')
    const 
// const addReservation = async(e) => {
    
//     const res = await fetch("/api/addReservToUser")



// }

// "id": "3643m",
// "guest": "jim",
// "hotel": "Hotel Inn",
// "roomType": "standard",
// "start": "12-5-23",
// "end": "12-7-23",
    return (
        <Form onSubmit={addReservation} id="form">
      
        <Form.Group className="mb-3" id="input">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Hotel ID"  onChange={e => setUsername(e.target.value)} id="inputField"/>
          
        </Form.Group>
        <Form.Group className="mb-3" id="input">
        <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={e => setPassword(e.target.value)} id="inputField"/>
        </Form.Group>
        <Button variant="primary" type="submit" id="submitButton" >
          Log in
        </Button>
        <Form.Group>
        <Form.Label>Not a user?</Form.Label>
        <Link href="/registerForm" passHref>
          <Nav.Link>
            Register
          </Nav.Link>
        </Link>
        </Form.Group>
      </Form>
    )
}

export async function getStaticProps() {
    
    return {
        props: {}
    }
}
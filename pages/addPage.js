import { Form, Button, Nav } from "react-bootstrap"
import Link from "next/link"
export default function addPage() {



    return (
        <div style={{
            display: 'block',
            width: 700,
            padding: 100
        }}
            id="register">
            <Form id="form">

                <Form.Group className="mb-3" id="input">
                    <Form.Label>Hotel Name</Form.Label>
                    <Form.Control type="username" onChange={e => setUsername(e.target.value)} id="inputField" />

                </Form.Group>
                <Form.Group className="mb-3" id="input">
                    <Form.Label>Room Type</Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} id="inputField" />
                </Form.Group>
                <Form.Group className="mb-3" id="input">
                    <Form.Label>Start</Form.Label>
                    <Form.Control type="password" id="inputField" />
                </Form.Group>
                <Form.Group className="mb-3" id="input">
                    <Form.Label>End</Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} id="inputField" />
                </Form.Group>
                <Form.Group className="mb-3" id="input">
                    <Form.Label>Surcharge</Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} id="inputField" />
                </Form.Group>
                <Form.Group>
                    <Button>Add Hotel</Button>
                </Form.Group>

            </Form>
        </div>
    )
}
  //test data
    // let hotel = "The Magnolia All Suites"
    // let guest = "jim"
    // let roomType = "standard"
    // let start = "12-5-23"
    // let end = "12-7-23"
    // let surcharge = true;
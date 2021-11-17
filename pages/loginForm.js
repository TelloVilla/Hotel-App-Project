import { useState } from "react";
import { useRouter } from "next/router";
import { Form, Button, Nav } from "react-bootstrap";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    username,
    password,
  };
  const submitForm = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return router.push("/");
    } else {
      return router.push("/something");
    }
  };

  return (
    // <form onSubmit={submitForm}>
    //   <label htmlFor="username">Username</label>
    //   <input id="username" type="text" autoComplete="username" required onChange={e => setUsername(e.target.value)}/>
    //   <br />
    //   <label htmlFor="password">Password</label>
    //   <input id="password" type="password" autoComplete="password" required onChange={e => setPassword(e.target.value)}/>
    //   <br />
    //   <button type="submit" >Login</button>
    // </form>

    <div style={{ display: "block", width: 700, padding: 100 }} id="register">
      <Form onSubmit={submitForm} id="form">
        <Form.Group className="mb-3" id="input">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            id="inputField"
          />
        </Form.Group>
        <Form.Group className="mb-3" id="input">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            id="inputField"
          />
        </Form.Group>
        <Button variant="primary" type="submit" id="submitButton">
          Log in
        </Button>
        <Form.Group>
          <Form.Label>Not a user?</Form.Label>
          <Link href="/registerForm" passHref>
            <Nav.Link>Register</Nav.Link>
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
}

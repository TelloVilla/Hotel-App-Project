import router, { Router } from 'next/router'
import Header from '../components/header'
const bcrypt = require("bcryptjs");

export default function Home() {
  const onLogin = async (e) => {
    e.preventDefault();

    const username = "jim";
    const password = "password";

    const response = await fetch("api/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    });

    if (response.ok){
      return router.push("/testPage")
    }

  }

  const onLogout = async(e) => {
    const response = await fetch("api/logout");

    if(response.ok){
      return router.push("/")
    }
  }
  return (
    <div className="container">
      <Header/>
      <button onClick={onLogin}>Click to sign in</button>
      <button onClick={onLogout}>Click to log out</button>
      
    </div>
  )
}

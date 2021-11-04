import router, { Router } from 'next/router'
import Header from '../components/header'
import { withIronSession } from 'next-iron-session';
const bcrypt = require("bcryptjs");

const Home = ({user}) => {
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

  const manageHotel = async e => {
    e.preventDefault()
    console.log(user)
    if(user.admin.status === false) {
      return router.push("/hotelsPage")
    }
    else {
      return router.push("/manageHotel")
    }

  }
  return (
    <div className="container">
      <Header/>
      <button onClick={onLogin}>Click to sign in</button>
      <button onClick={onLogout}>Click to log out</button>
      <button onClick={manageHotel}>Click to manage hotels</button>
    </div>
  )
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
    return {
      props: {user}
    };
  },
  {
    cookieName: "hotel-cookie",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
<<<<<<< HEAD
    password: "9KDjQvxpVRz1D3DWvLL5t9k3hOfZPw3i"
=======
    password: process.env.APPLICATION_SECRET
>>>>>>> main
  }
)
export default Home;

import router, { Router } from 'next/router';
import HeadBar from '../components/headbar';
import { withIronSession } from 'next-iron-session';
const bcrypt = require("bcryptjs");

const Home = ({user}) => {
  

  const onLogout = async(e) => {
    const response = await fetch("api/logout");
    if(response.ok){
      return router.push("/")
    }
  }
  return (
    <div>
      <HeadBar loggedIn={user}></HeadBar>

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
      secure: false
    },
    password: process.env.APPLICATION_SECRET
  }
)
export default Home;

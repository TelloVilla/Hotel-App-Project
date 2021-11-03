import { withIronSession } from 'next-iron-session'
import Head from 'next/head'
import Header from '../components/header'

const testPage = ({user}) => {
  return (
    <div className="container">
      <Header/>
      <h4>Hello {user.username}</h4>
      {user.admin.status &&
        <h3>You are an admin</h3>
      }
      This is a test page
      
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
    password: process.env.APPLICATION_SECRET
  }
)
export default testPage;
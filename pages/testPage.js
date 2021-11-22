import { withIronSession } from 'next-iron-session'
import HeadBar from '../components/headbar'

const TestPage = ({user}) => {
  return (
    <div className="container">
      <HeadBar/>
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
      secure: false
    },
    password: process.env.APPLICATION_SECRET
  }
)
export default TestPage;
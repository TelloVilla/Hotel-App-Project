import { withIronSession } from "next-iron-session"

const welcome = ({user}) => {
    return (
        <div>
            <h1>Welcome!</h1>
            <h2>You are {user.username} with id of {user.id}</h2>
        </div>
        
    )
}

export const getServerSideProps = withIronSession(async function ({req,res}) {
    const user = req.session.get("user")

    if(!user) {
        
        return {
            redirect:{
              destination: '/something',
              permanent: false
            },
          }
    }

    return {
        props: {user: req.session.get("user")}
    }

    
        
},
{
    password: '2ahIaTyP9JI!8wpWAVOGfpE#tT#U!-gb',
    cookieName: 'app-cookie',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production'
    }
})

export default welcome
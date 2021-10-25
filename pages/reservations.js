import Reservation from "../components/reservation";
import { withIronSession } from "next-iron-session";
import { useEffect, useState } from "react";

const reservations = ({user}) =>{
    const [reservs, setReservs] = useState(null);
    const fetchData = async () =>{
      const username = user.username;
        const res = await fetch("/api/getUserReservations", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username})
        });
        const data = await res.json()
        setReservs(data.map((r) => <Reservation reserv={r}></Reservation>))
    }
    useEffect(() => {        
        fetchData();
        console.log("hello")
    },[])
    
    if(!reservs){
        return(
            <div>
                Loading...
            </div>
        )
    }
    
    return(
        <div>
            {reservs}
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
export default reservations;
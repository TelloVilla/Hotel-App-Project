import Reservation from "../Components/Reservation";
import { withIronSession } from "next-iron-session";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

const Reservations = ({user}) =>{
    const [reservs, setReservs] = useState(null);
    const fetchData = async () =>{
      const username = user.username;
        const res = await fetch("/api/getUserReservations", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username})
        });
        const data = await res.json()
        if(res.ok){
          setReservs(data.map((r, i) => <Reservation key={i} reserv={r}></Reservation>))
        }else{
          setReservs("none")
        }
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

    if(reservs === "none"){
      return(
        <div>
          <Alert variant="warning">
            No current Reservations
          </Alert>
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
export default Reservations;
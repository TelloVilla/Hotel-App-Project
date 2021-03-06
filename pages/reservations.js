import Reservation from "../components/reservation";
import { withIronSession } from "next-iron-session";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import HeadBar from "../components/headbar";

const Reservations = ({ user }) => {
  const [reservs, setReservs] = useState(null);
  const fetchData = async () => {
    const username = user.username;
    const res = await fetch("/api/getUserReservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    const data = await res.json();
    if (res.ok) {
      setReservs(
        data.map((r, i) => <Reservation key={i} reserv={r}></Reservation>)
      );
    } else {
      setReservs("none");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!reservs) {
    return <div><HeadBar loggedIn={user}></HeadBar>Loading...</div>;
  }

  if (reservs === "none") {
    return (
      <div>
        <HeadBar loggedIn={user}></HeadBar>
        <Alert variant="warning">No current Reservations</Alert>
      </div>
    );
  }

  return <div><HeadBar loggedIn={user}></HeadBar>{reservs}</div>;
};

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");

    if (!user) {
      return {
        redirect: {
          destination: "/loginForm",
          permanent: false,
        },
      };
    }
    return {
      props: { user },
    };
  },
  {
    cookieName: "hotel-cookie",
    cookieOptions: {
      secure: false,
    },
    password: process.env.APPLICATION_SECRET,
  }
);
export default Reservations;

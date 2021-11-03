import Hotel from "../components/hotel";
import { withIronSession } from "next-iron-session";
import { useEffect, useState } from "react";

const hotelsPage = ({ user }) => {
  const [hotels, setHotels] = useState(null);
  const fetchData = async () => {
    const res = await fetch("/api/getAllHotels");
    const data = await res.json();
    setHotels(data.map((h) => <Hotel hotel={h}></Hotel>));
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!hotels) {
    return <div>Loading...</div>;
  }

  return <div>{hotels}</div>;
};

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");

    if (!user) {
      return {
        redirect: {
          destination: "/LoginForm",
          permanent: false,
        },
      };
    }
    return { props: user };
  },
  {
    cookieName: "hotel-cookie",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: process.env.APPLICATION_SECRET,
  }
);
export default hotelsPage;

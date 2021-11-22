import { Container } from "react-bootstrap";
import HeadBar from "../components/headbar";
import { withIronSession } from "next-iron-session";
import { useEffect, useState } from "react";
import displayUsers from "../components/displayUsers";

const ViewUsers = ({ user }) => {
  const [users, setUsers] = useState(null);
  const fetchData = async () => {
    const res = await fetch("/api/getAllUser");
    const data = await res.json();
    setUsers(
      data.map((u, i) => <displayUsers key={i} user={u}></displayUsers>)
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <head>
        <title>View Users</title>
      </head>
      <HeadBar></HeadBar>
      <br></br>
      <Container>
        <h2>Currently Registered Users</h2>
        <br></br>
        {users}
      </Container>
    </>
  );
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

export default ViewUsers;

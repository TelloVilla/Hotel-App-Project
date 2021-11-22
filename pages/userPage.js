import { withIronSession } from "next-iron-session";
import React from "react";
import Admin from "../components/admin";
import HeadBar from "../components/headbar";
import User from "../components/user";

const user = ({ user }) => {
  //check if admin, return admin page
  if (user.admin.status) {
    return (
      <>
        <head>
          <title>{user.username}'s Account</title>
        </head>
        <HeadBar></HeadBar>
        <br></br>
        <Admin user={user}></Admin>
      </>
    );
  }

  return (
    <>
      <head>
        <title>{user.username}'s Account</title>
      </head>
      <HeadBar></HeadBar>
      <br></br>
      <User user={user}></User>
    </>
  );
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
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: process.env.APPLICATION_SECRET,
  }
);

export default user;

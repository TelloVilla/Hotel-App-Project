import { withIronSession } from "next-iron-session";
import React from "react";
import HeadBar from "../components/headbar";
import User from "../components/user";
import styles from "../styles/user.module.css";

const user = ({ user }) => {

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

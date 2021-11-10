import { withIronSession } from "next-iron-session";
import React from "react";
import Header from "../components/header";
import User from "../components/user";
import styles from "../styles/user.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const user = ({ user }) => {
  return (
    <>
      <head>
        <title>User Account</title>
      </head>
      <Header></Header>
      <br></br>
      <User></User>
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

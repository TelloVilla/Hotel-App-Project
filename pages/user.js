import { withIronSession } from 'next-iron-session'
import React from 'react'
import styles from "../styles/user.module.css"

const user = ({user}) => {
    return (
        <div>
            <head>
                <title>User Account</title>
            </head>
            <div className="tile-header">
                <a href="/">Home</a>
                <h1>Welcome, {user.username}</h1>
                <div id="about-me-container">
                    <h3>About Me</h3>
                    <p>He was an expert but not in a discipline that anyone could fully appreciate.
                        He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time.
                        It had taken years to perfect and he could now do it without even putting any thought behind it.
                        Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement.
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="tile-account-info">
                <h3 className="header-text">Account Info</h3>
                <hr></hr>
                <ul>
                    <li>
                        Personal Info
                    </li>
                    <li>
                        Payment Methods
                    </li>
                    <li>
                        Addresses
                    </li>
                    <li>
                        Security
                    </li>
                    <li>
                        Preferences
                    </li>
                </ul>
            </div>

            <div className="tile-manage">
                <h3 className="header-text">Manage</h3>
                <hr></hr>
                <ul>
                    <li>
                        <a href="/reservations">Reservations</a>
                    </li>
                    <li>
                        <a href="/hotelsPage">Hotels</a>
                    </li>
                    <li>
                        Coupons and Credits
                    </li>
                </ul>
            </div>

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

export default user

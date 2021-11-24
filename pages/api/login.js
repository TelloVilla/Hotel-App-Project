import { withIronSession } from "next-iron-session";
import { UserDB } from "../../util/user_db";
import { ReservDB } from "../../util/reserv_db";
const bcrypt = require("bcryptjs");

async function handler(req, res) {
  let { username, password } = req.body;
  let auth = false;

  

  if(username === "" || password === ""){
    res.status(400).json({error: "Missing parameters"})
    return
  }

  let user = UserDB.find((u) => u.username === username);
  if(!user){
    res.status(400).json({error: "User not found"})
    return
  }
    
  if (user.username === username && await bcrypt.compare(password, user.hash)) {
    req.session.set("user", {
      admin: user.admin,
      username: username,
      firstname: user.firstname,
      lastname: user.lastname,
      billaddress: user.billaddress,
      reservations: user.reservations.map(ReservDB.getReservationInfo),
    });
    await req.session.save();
    const admin = req.session.get("user");
    res.status(200).send("Logged In");
    return;
  } else {
    res.status(400).send("");
    return;
  }
}

export default withIronSession(handler, {
  password: process.env.APPLICATION_SECRET,
  cookieName: "hotel-cookie",
  cookieOptions: {
    secure: false,
  },
});

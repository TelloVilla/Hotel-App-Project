import { withIronSession } from "next-iron-session";
import {UserDB} from '../../util/user_db';
const bcrypt = require('bcryptjs');

async function handler(req, res){

    let {username, password} = req.body;

    let user = UserDB.find(u => u.username === username)
    if(user.username === username && bcrypt.compare(password, user.hash)){
        req.session.set("user", {
            admin: user.admin,
            username: username,
            firstname: user.firstname,
            lastname: user.lastname,
            reservations: user.reservations
        });
        await req.session.save();
        const admin = req.session.get("user");
        res.status(200).send("Logged In");
        return;
    }else{
        res.status(401).send("")
        return;
    }
    



    
}

export default withIronSession(handler, {
    password: process.env.APPLICATION_SECRET,
    cookieName: "hotel-cookie",
    cookieOptions: {
        secure: false
    },
});
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
        });
        await req.session.save();
        const admin = req.session.get("user");
        res.status(200).send("Logged In");
    }else{
        res.status(401).send("")
    }
    



    
}

export default withIronSession(handler, {
    password: "2ahIaTyP9JI!8wpWAVOGfpE#tT#U!-gb",
    cookieName: "hotel-cookie",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production" 
    },
});
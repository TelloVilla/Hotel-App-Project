<<<<<<< HEAD
import { UserDB } from '../../util/user_db'
import { withIronSession } from "next-iron-session";
const bcrypt = require('bcrypt')

async function handler(req, res) {

    if(!req.body) {
        console.log("what")
        res.statusCode = 404
        res.end('Error')
        return
    }

    const {username, password, admin} = req.body;

    if(password === "secret") {
        UserDB.createUser(username, bcrypt.hashSync(password, 10), admin)

    }
    else {
        UserDB.createUser(username, bcrypt.hashSync(password, 10) , admin)

    }

    let user = UserDB.find(u => u.username === username)
    req.session.set("user", {
        admin: user.admin,
        username: username,
    });
    await req.session.save();
    console.log(req.session.get())
   
    res.send('Registered')
    
    

}

export default withIronSession(handler, {
    password: "2ahIaTyP9JI!8wpWAVOGfpE#tT#U!-gb",
    cookieName: "hotel-cookie",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production" 
    },
});


=======
import {UserDB} from '../../util/user_db'
const bcrypt = require('bcryptjs')

export default function handler(req, res){
    let {username, password, admin} = req.body;

    let success = UserDB.createUser(username, bcrypt.hashSync(password), admin)
    if(!success){
        res.status(400).json({error: "Invalid User"})
    }
    res.status(200).send("Logged out")
}
>>>>>>> main

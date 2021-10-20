import { UserDB } from '../../util/user_db'
import { withIronSession } from "next-iron-session";
const bcrypt = require('bcrypt')

export default function regHandler(req, res) {

    if(!req.body) {
        console.log("what")
        res.statusCode = 404
        res.end('Error')
        return
    }

    const {username, password} = req.body;

    if(password === "secret") {
        UserDB.createUser(username, bcrypt.hashSync(password, 10), true)
    }
    else {
        UserDB.createUser(username, bcrypt.hashSync(password, 10) , false)

    }
   
    res.send('Registered')
    
    

}


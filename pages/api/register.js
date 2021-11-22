import {UserDB} from '../../util/user_db'
const bcrypt = require('bcryptjs')

export default function handler(req, res){
    let {username, firstname, lastname, password, billingAddr, admin} = req.body;
    let success = UserDB.createUser(username, firstname, lastname, billingAddr, bcrypt.hashSync(password), admin)

    if(success.password != password) {
        res.status(401).json({error: "Wrong Password"})
    }

    if(success.username != username) {
        res.status(402).json({error: "Wrong Password"})
    }

    if(!success){
        res.status(400).json({error: "Invalid User"})
    }
    res.status(200).send("Logged out")
}

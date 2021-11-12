import {UserDB} from '../../util/user_db'
const bcrypt = require('bcryptjs')

export default function handler(req, res){
    let {username, firstname, lastname, password, admin} = req.body;

    let success = UserDB.createUser(username, firstname, lastname, bcrypt.hashSync(password), admin)
    if(!success){
        res.status(400).json({error: "Invalid User"})
    }
    res.status(200).send("Logged out")
}

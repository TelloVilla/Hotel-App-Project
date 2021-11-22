import {UserDB} from '../../util/user_db'
const bcrypt = require('bcryptjs')

export default function handler(req, res){
    let {username, firstname, lastname, billaddress, password, admin} = req.body;

    console.log(firstname, lastname);

    let success = UserDB.createUser(username, firstname, lastname, billaddress, bcrypt.hashSync(password), admin)
    if(!success){
        res.status(400).json({error: "Invalid User"})
    }
    res.status(200).send("Logged out")
}

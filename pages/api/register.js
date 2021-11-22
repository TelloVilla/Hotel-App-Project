import {UserDB} from '../../util/user_db'
const bcrypt = require('bcryptjs')

export default function handler(req, res){
    console.log(req.body);
    let {username, firstName, lastName, billingAddr, password, admin} = req.body;

    let success = UserDB.createUser(username, firstName, lastName, billingAddr, bcrypt.hashSync(password), admin)
    if(!success){
        res.status(400).json({error: "Invalid User"})
        return
    }
    res.status(200).send("Registered")
}

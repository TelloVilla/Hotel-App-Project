import {UserDB} from '../../util/user_db'
const bcrypt = require('bcryptjs')

export default function handler(req, res){
    let {username, hash, admin} = req.body;

    let success = UserDB.createUser(username, bcrypt.hashSync(hash), admin)
    if(!success){
        res.status(400).json({error: "Invalid User"})
    }
    res.status(200)


}
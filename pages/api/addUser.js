import {userDB} from '../../util/user_db'
const bcrypt = require('bcryptjs')

export default function handler(req, res){
    let password = "123abc"
    userDB.createUser("bob", bcrypt.hashSync(password), false)
    res.status(200).json({})


}
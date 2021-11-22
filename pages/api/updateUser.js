import {UserDB} from '../../util/user_db'
import { withIronSession } from 'next-iron-session'

export default function handler(req, res) {
    let {username, newUsername, password, firstname, lastname, address} = req.body

    let success = UserDB.updateUser(username, newUsername, password, firstname, lastname, address)
    if(!success) {
        res.status(400).json({error: "User not found"})
    }
    res.status(200).json(UserDB.getAll())
}
import {UserDB} from '../../util/user_db'
import { withIronSession } from 'next-iron-session'

export default function handler(req, res) {
    let {username, newUsername, firstname, lastname, billaddress, password } = req.body

    let success = UserDB.updateUser(username, newUsername, firstname, lastname, billaddress, password)
    if(!success) {
        res.status(400).json({error: "User not found"})
    }
    res.status(200).json(UserDB.getAll())
}
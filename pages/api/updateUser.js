import {UserDB} from '../../util/user_db'

export default function handler(req, res) {
    let {username, id} = req.body

    let success = UserDB.updateUser(username, id)
    if(!success) {
        res.status(400).json({error: "User not found"})
    }
    res.status(200).json(UserDB.getAll())
}
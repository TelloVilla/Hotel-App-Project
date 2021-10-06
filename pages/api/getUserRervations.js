import {userDB} from '../../util/user_db'


export default function handler(req, res){

    let {username} = req.body;

    res.status(200).json(userDB.getUserReservations(username))
}
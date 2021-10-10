import {UserDB} from '../../util/user_db'
import { ReservDB } from '../../util/reserv_db';


export default function handler(req, res){

    //let {username} = req.body;

    let username = "jim"

    let success = UserDB.getUserReservations(username);

    if(!success){
        res.status(400)
    }

    let reservations = success.map(ReservDB.getReservationInfo)

    res.status(200).json(reservations)
}
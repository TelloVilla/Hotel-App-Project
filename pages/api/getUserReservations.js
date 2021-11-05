import {UserDB} from '../../util/user_db'
import { ReservDB } from '../../util/reserv_db';


export default function handler(req, res){

    let {username} = req.body;

    let success = UserDB.getUserReservations(username);

    if(!success){
        res.status(400).json({error: "User not found"})
        return;
    }
    if(success.length == 0){
        res.status(400).json({error: "No valid reservations"})
        return;
    }

    let reservations = success.map(ReservDB.getReservationInfo)

    res.status(200).json(reservations)
}
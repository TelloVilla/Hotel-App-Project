import { ReservDB } from "../../util/reserv_db"
import { UserDB } from "../../util/user_db";
export default function handler(req, res){

    //let {reservID} = req.body;

    let reservID = "1272m";

    let success = ReservDB.deleteReservation(reservID)

    if(!success){
        res.status(400)
    }

    success = UserDB.deleteUserReservation(reservID)

    if(!success){
        res.status(400)
    }

    res.status(200).json({success: success})


}
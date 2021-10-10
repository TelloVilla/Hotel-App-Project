import { ReservDB } from "../../util/reserv_db"
export default function handler(req, res){

    let {reservID} = req.body;

    let success = ReservDB.deleteReservation(reservID)

    if(!success){
        res.status(400)
    }

    res.status(200).json(success)


}
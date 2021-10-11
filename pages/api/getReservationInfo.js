import { ReservDB } from "../../util/reserv_db"
export default function handler(req, res){

    let {reservID} = req.body;

    //test data
    //let reservID = "1272m";

    let success = ReservDB.getReservationInfo(reservID);

    if(!success){
        res.status(400)
    }

    res.status(200).json(success)


}
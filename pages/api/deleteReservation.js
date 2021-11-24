import { ReservDB } from "../../util/reserv_db"
import { UserDB } from "../../util/user_db";
import { HotelDB } from "../../util/hotel_db";
export default function handler(req, res){

    let {reservID} = req.body;

    // let reservID = "2296jim";

    let found = ReservDB.find(x => x.id === reservID)

    if(!found){
        res.status(400).json({error: "Reservation not found"})
        return;
    }
    let updateHotel = HotelDB.updateVacancy(found.hotel, "+");

    let success = ReservDB.deleteReservation(reservID)

    if(!success){
        res.status(400).json({error: "Reservation not found"})
        return;
    }

    success = UserDB.deleteUserReservation(reservID)

    if(!success){
        res.status(400).json({error: "User not found"})
        return;
    }

    res.status(200).json({success: success})


}
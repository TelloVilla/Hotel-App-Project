import {UserDB} from '../../util/user_db';
import {ReservDB} from '../../util/reserv_db';
import { HotelDB } from '../../util/hotel_db';
const bcrypt = require('bcryptjs')

export default function handler(req, res) {
    let {hotel, guest, roomType, start, end, surcharge} = req.body;

    //test data
    // let hotel = "The Magnolia All Suites"
    // let guest = "jim"
    // let roomType = "standard"
    // let start = "12-5-23"
    // let end = "12-7-23"
    // let surcharge = true;

    let foundUser = UserDB.find(u => u.username === guest);

    if (foundUser) {
        let updateHotel = HotelDB.updateVacancy(hotel, "-")
        if(updateHotel){
            
            let id = ReservDB.createReservation(hotel, guest, roomType, start, end, surcharge);
            let success = UserDB.addReservationToUser(guest, id);
            res.status(200).json({success: success})
        }
        res.status(400).json({error: "Hotel not found"})
        
    }
    res.status(400).json({error: "User not found"})

}
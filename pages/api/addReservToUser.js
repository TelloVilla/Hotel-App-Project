import {UserDB} from '../../util/user_db';
import {ReservDB} from '../../util/reserv_db';
import { HotelDB } from '../../util/hotel_db';
const bcrypt = require('bcryptjs')

export default function handler(req, res) {
    let {hotel, guest, roomType, start, end, price} = req.body;

    //test data
    // let hotel = "The Magnolia All Suites"
    // let guest = "jim"
    // let roomType = "standard"
    // let start = "11-13-21"
    // let end = "11-23-21"

    let startCheck = new Date(start);
    let endCheck = new Date(end);
    let surchargeDays = 0;
    let chargeDays = 0;
    let surcharge = false;

    while(startCheck < endCheck){
        let currentDay = startCheck.getDay();
        if(currentDay == 6 || currentDay == 0){
            surchargeDays++;
        }else{
            chargeDays++;
        }
        startCheck.setDate(startCheck.getDate() + 1)
    }
    if(surchargeDays > 0){
        surcharge = true;
    }

    let foundUser = UserDB.find(u => u.username === guest);

    if (foundUser) {
        let updateHotel = HotelDB.updateVacancy(hotel, "-")
        let hotelCharge = HotelDB.findHotelByName(hotel);
        if(updateHotel){
            let roomPrice = hotelCharge.price[roomType];
            let surchargeRate = hotelCharge.surcharge;
            let price = roomPrice * chargeDays + (roomPrice * surchargeDays * surchargeRate);
            let id = ReservDB.createReservation(hotel, guest, roomType, start, end, surcharge, price);
            let success = UserDB.addReservationToUser(guest, id);
            res.status(200).json({success: success})
            return
        }
        res.status(400).json({error: "Hotel not found"})
        return
        
    }
    res.status(400).json({error: "User not found"})
    return

}
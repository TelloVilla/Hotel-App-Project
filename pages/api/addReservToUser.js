import {UserDB} from '../../util/user_db';
import {ReservDB} from '../../util/reserv_db';
const bcrypt = require('bcryptjs')

export default function handler(req, res){
    //let {hotel, guest, roomType, start, end, surcharge} = req.body;

    //test data
    let hotel = "Hotel Inn"
    let guest = "jim"
    let roomType = "standard"
    let start = "12-5-23"
    let end = "12-7-23"
    let surcharge = true;


    let id = ReservDB.createReservation(hotel, guest, roomType, start, end, surcharge);
    let found = UserDB.addReservationToUser(guest, id);

    if(!found){
        res.status(400)
    }

    res.status(200)


}
import {UserDB} from '../../util/user_db';
import {ReservDB} from '../../util/reserv_db';
const bcrypt = require('bcryptjs')

export default function handler(req, res) {
    //let {hotel, guest, roomType, start, end, surcharge} = req.body;

    //test data
    let hotel = "Hotel Inn"
    let guest = "bob"
    let roomType = "standard"
    let start = "12-5-23"
    let end = "12-7-23"
    let surcharge = true;

    let found = UserDB.find(u => u.username === guest);

    if (found) {
        let id = ReservDB.createReservation(hotel, guest, roomType, start, end, surcharge);
        let success = UserDB.addReservationToUser(guest, id);
        res.status(200)
    }
    res.status(400)

}
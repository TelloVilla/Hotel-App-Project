import {ReservDB} from '../../util/reserv_db';


export default function handler(req, res){

    let {hotel} = req.body;

    let success = ReservDB.getReservationByHotel(hotel);

    if(success.length == 0){
        res.status(400).json({error: "No valid Hotels"})
    }

    res.status(200).json(success)
}
import { HotelDB } from "../../util/hotel_db";

export default function handler(req, res){
    let {hotel} = req.body;

    //let hotel = "The Magnolia All Suites";

    let success = HotelDB.findHotelByName(hotel);
    if(!success){
        res.status(400).json({error: "hotel not found"})
        return

    }
    res.status(200).json(success);

}
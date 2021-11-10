import { HotelDB } from "../../util/hotel_db";

export default function handler(req, res){

    let amenities = req.body;

    let success = HotelDB.findHotelByAmenitites(amenities);
    if(!success){
        res.status(400).json({error: "hotel not found"})
        return
    }
    res.status(200).json(success);

}
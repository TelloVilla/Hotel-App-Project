import { HotelDB } from "../../util/hotel_db";

export default function handler(req, res){
    //let {name, amenities} = req.body;

    let success = HotelDB.updateHotelAmenities(name, amenities);
    if(!success){
        res.status(400)
    }
    res.status(200).json(HotelDB.getAll())
}
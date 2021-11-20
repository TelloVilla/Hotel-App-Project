import { HotelDB } from "../../util/hotel_db";

export default function handler(req, res){
    let {name, smoking, pets, wifi, bfast} = req.body;

    let success = HotelDB.updateHotelPrices(name, smoking, pets, wifi, bfast);
    if(!success){
        res.status(400).json({error: "Hotel not found"})
        return
    }
    res.status(200).json(HotelDB.getAll())
}
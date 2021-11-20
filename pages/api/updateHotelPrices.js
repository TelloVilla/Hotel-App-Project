import { HotelDB } from "../../util/hotel_db";

export default function handler(req, res){
    let {name, price} = req.body;

    let success = HotelDB.updateHotelPrices(name, price);
    if(!success){
        res.status(400).json({error: "Hotel not found"})
        return
    }
    res.status(200).json(HotelDB.getAll())
}
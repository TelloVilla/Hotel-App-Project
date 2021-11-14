import { HotelDB } from "../../util/hotel_db";

export default function handler(req, res){
    let hotel = req.body;

    // let hotel = "The Magnolia All Suites";

    let success = HotelDB.findHotelByName(hotel);
    if(!success){
        res.status(400).json({error: "hotel not found"})
        return

    }
    let available = success.filter(h => h.vacancy <= 0)
    if(available < 1){
        res.status(400).json({error: "no vacancy"});
    }
    res.status(200).json(success);

}
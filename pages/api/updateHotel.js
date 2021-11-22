import { HotelDB } from "../../util/hotel_db";

export default function handler(req, res){
    
    console.log(req.body)
    let hotel = req.body;

    //test data
    //let name = "The Magnolia All Suites";
    // let newAmen = {
    //     pool: true,
    //     spa: true,
    //     gym: true,
    //     business_office: false
    // }

    let success = HotelDB.updateHotel(hotel);
    if(!success){
        res.status(400)
    }
    res.status(200).json({success: success})
}
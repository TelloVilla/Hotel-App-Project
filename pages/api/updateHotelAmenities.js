import { HotelDB } from "../../util/hotel_db";

export default function handler(req, res){
    
    let {name, amenities} = req.body;

    //test data
    //let name = "The Magnolia All Suites";
    // let newAmen = {
    //     pool: true,
    //     spa: true,
    //     gym: true,
    //     business_office: false
    // }

    let success = HotelDB.updateHotelAmenities(name, newAmen);
    if(!success){
        res.status(400)
    }
    res.status(200).json({success: success})
}
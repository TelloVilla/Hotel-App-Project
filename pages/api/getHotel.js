import { HotelDB } from "../../util/hotel_db";

export default function handler(res, name){
    res.status(200).json(HotelDB.findHotelByName(name))
}
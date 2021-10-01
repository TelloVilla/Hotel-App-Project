import { HotelDB } from "../../util/hotel_db";

export default function handler(req, res){
    res.status(200).json(HotelDB.getAll())
}
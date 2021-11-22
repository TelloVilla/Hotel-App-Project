import { HotelDB } from "../../util/hotel_db";

export default function handler(req, res) {
  let amenities = req.body;

  let success = HotelDB.findHotelByAmenitites(amenities);
  if (!success) {
    res.status(400).json({ error: "hotel not found" });
    return;
  }
  let available = success.filter((h) => h.vacancy >= 1);
  if (available < 1) {
    res.status(400).json({ error: "no vacancy" });
    return;
  }
  res.status(200).json(success);
  return;
}

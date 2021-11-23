import { UserDB } from "../../util/user_db";
import { ReservDB } from "../../util/reserv_db";
import { HotelDB } from "../../util/hotel_db";
const bcrypt = require("bcryptjs");

export default function handler(req, res) {
    let {hotelName, userName, roomType, start, end} = req.body;
    //test data
    // let hotel = "The Magnolia All Suites"
    // let guest = "TheUser"
    // let roomType = "standard"
    // let start = "11-13-21"
    // let end = "11-23-21"

  let startCheck = new Date(start);
  let endCheck = new Date(end);
  let surchargeDays = 0;
  let chargeDays = 0;
  let surcharge = false;

  while (startCheck < endCheck) {
    let currentDay = startCheck.getDay();
    if (currentDay == 6 || currentDay == 0) {
      surchargeDays++;
    } else {
      chargeDays++;
    }
    startCheck.setDate(startCheck.getDate() + 1);
  }
  if (surchargeDays > 0) {
    surcharge = true;
  }
  console.log(chargeDays, surchargeDays);

  let foundUser = UserDB.find((u) => u.username === userName);

  if (foundUser) {
    let updateHotel = HotelDB.updateVacancy(hotelName, "-");
    let hotelCharge = HotelDB.findHotelByName(hotelName);
    if (updateHotel) {
      let roomPrice = hotelCharge.price[roomType];
      console.log(roomPrice)
      let surchargeRate = hotelCharge.surcharge;
      console.log(surchargeRate)
      let price =
        roomPrice * chargeDays + roomPrice * surchargeDays * surchargeRate;
      let id = ReservDB.createReservation(
        hotelName,
        userName,
        roomType,
        start,
        end,
        surcharge,
        price
      );
      let success = UserDB.addReservationToUser(userName, id);
      res.status(200).json({ success: success });
      return;
    }
    res.status(400).json({ error: "Hotel not found" });
    return;
  }
  res.status(400).json({ error: "User not found" });
  return;
}

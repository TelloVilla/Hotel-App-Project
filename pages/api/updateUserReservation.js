import { ReservDB } from "../../util/reserv_db";
import { HotelDB } from "../../util/hotel_db";
import { UserDB } from "../../util/user_db";
export default function handler(req, res) {
  let { reservID, hotel, guest, roomType, start, end, price } = req.body;

  //test data
  // let reservID = "4133jim";
  // let hotel = "The Magnolia All Suites"
  // let guest = "jim"
  // let roomType = "standard"
  // let start = "11-12-21"
  // let end = "11-15-21"

  let success = ReservDB.getReservationInfo(reservID);

  if (!success) {
    res.status(400).json({ error: "Reservation not found" });
    return;
  }
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

  let foundUser = UserDB.find((u) => u.username === guest);

  if (foundUser) {
    let updateHotel;
    let oldHotel;
    console.log(success.hotel + " " + hotel);
    if (success.hotel != hotel) {
      oldHotel = HotelDB.updateVacancy(success.hotel, "+");
      updateHotel = HotelDB.updateVacancy(hotel, "-");
    } else {
      oldHotel = true;
      updateHotel = true;
    }

    let hotelCharge = HotelDB.findHotelByName(hotel);
    console.log(updateHotel + " " + oldHotel);
    if (updateHotel && oldHotel) {
      let roomPrice = hotelCharge.price[roomType];
      let surchargeRate = hotelCharge.surcharge;
      let price =
        roomPrice * chargeDays + roomPrice * surchargeDays * surchargeRate;
      success = ReservDB.updateReservation(
        reservID,
        guest,
        hotel,
        roomType,
        start,
        end,
        surcharge,
        price
      );
      if (!success) {
        res.status(400).json({ error: "Error updating reservation" });
        return;
      }
      res.status(200).json({ success: success });
      return;
    }
    res.status(400).json({ error: "Hotel not found" });
    return;
  }
  res.status(400).json({ error: "User not found" });
  return;
}

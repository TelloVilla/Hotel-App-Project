const fs = require("fs");
let isEqual = require("lodash/isEqual");
let hotels = require("../data/hotels.json");

export const HotelDB = {
  getAll: () => hotels,
  find: (x) => hotels.find(x),
  findHotelByName,
  findHotelByAmenitites,
  findHotelByPrice,
  updateHotelAmenities,
  updateHotelPolicies,
  updateHotelPrices,
  updateVacancy,
  addHotel,
  deleteHotel,
  saveData,
};

function updateVacancy(name, action) {
  let found = hotels.find((h) => h.name === name);
  if (!found) {
    return false;
  }
  if (action === "+") {
    found.vacancy++;
  } else if (action === "-") {
    found.vacancy--;
  }
  saveData();
  return true;
}

function findHotelByName(name) {
  let found = hotels.find((h) => h.name === name);
  if (!found) {
    return false;
  }
  return found;
}

function findHotelByAmenitites(amenities) {
  let found = hotels.filter((h) => isEqual(h.amenities, amenities));
  if (!found) {
    return false;
  }
  return found;
}

function findHotelByPrice(price) {
  const priceRange = (r) => r <= price;
  let found = hotels.filter((h) => Object.values(h.price).some(priceRange));
  if (!found) {
    return false;
  }
  return found;
}

function addHotel(name, rooms, amenities, price, surcharge) {
  let dup = hotels.find((h) => h.name === name);
  if (dup) {
    return false;
  }
  let newHotel = {
    name: name,
    rooms: rooms,
    amenities: amenities,
    price: price,
    surcharge: surcharge,
  };

  hotels.push(newHotel);
  return true;
}

function deleteHotel(name) {
  let found = hotels.find((h) => h.name === name);
  if (!found) {
    return false;
  }
  let index = hotels.indexOf(found);
  users.splice(index, 1);
  saveData();
  return true;
}

function updateHotelAmenities(name, amenities) {
  let found = hotels.find((h) => h.name === name);
  if (!found) {
    return false;
  }
  found.amenities = amenities;
  saveData();
  return true;
}
function updateHotelPolicies(name, smoking, pets, wifi, bfast) {
  let found = hotels.find((h) => h.name === name);
  if (!found) {
    return false;
  }
  found.smoking = smoking;
  found.pets_allowed = pets;
  found.free_wifi = wifi;
  found.breakfast = bfast;
  saveData();
  return true;
}

function updateHotelPrices(name, price) {
  let found = hotels.find((h) => h.name === name);
  if (!found) {
    return false;
  }
  found.price = price;
  saveData();
  return true;
}

function saveData() {
  fs.writeFileSync("data/hotels.json", JSON.stringify(hotels, null, 2));
}

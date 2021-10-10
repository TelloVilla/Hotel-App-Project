const fs = require('fs')
let hotels = require("../data/hotels.json")

export const HotelDB = {
    getAll: () => hotels,
    getHotelInfo,
    updateHotelAmenities,
}

function getHotelInfo(name){
    let found = hotels.find(h => h.name == name);
    if(!found){
        return false;
    }
    return found
}

function updateHotelAmenities(name, amenities){
    let found = hotels.find(h => h.name === name);
    if(!found){
        return false
    }
    found.amenities = amenities;
    return true

}
const fs = require('fs')
let hotels = require("../data/hotels.json")

export const HotelDB = {
    getAll: () => hotels,
    getHotelInfo,
    updateHotelAmenities,
    updateHotelPrices,
    addHotel,
    deleteHotel,
    saveData
}

function getHotelInfo(name){
    let found = hotels.find(h => h.name == name);
    if(!found){
        return false;
    }
    return found
}

function addHotel(name, rooms, amenities, price, surcharge){
    let dup = hotels.find(h => h.name === name)
    if(dup){
        return false
    }
    let newHotel = {
        name: name,
        rooms: rooms,
        amenities: amenities,
        price: price,
        surcharge: surcharge
    }

    hotels.push(newHotel)
    return true
}

function deleteHotel(name){
    let found = hotels.find(h => h.name === name)
    if(!found){
        return false
    }
    let index = hotels.indexOf(found);
    users.splice(index, 1);
    saveData();
    return true

}

function updateHotelAmenities(name, amenities){
    let found = hotels.find(h => h.name === name);
    if(!found){
        return false
    }
    found.amenities = amenities;
    saveData();
    return true

}

function updateHotelPrices(name, price){
    let found = hotels.find(h => h.name === name);
    if(!found){
        return false
    }
    found.price = price;
    saveData();
    return true

}

function saveData(){
    fs.writeFileSync('data/hotels.json', JSON.stringify(hotels, null, 2))

}
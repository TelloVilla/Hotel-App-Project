const fs = require('fs')
let hotels = require("../data/hotels.json")

export const HotelDB = {
    getAll: () => hotels,
}
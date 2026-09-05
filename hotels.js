const {initializeDatabase} = require("./db/db.connect")
const Hotel = require("./model/hotel.models")
initializeDatabase()


const newHotel = {
  name: "New Hotel",
  category: "Mid-Range",
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  reviews: [],
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$$$ (31-60)",
  reservationNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel-photo1.jpg", "https://example.com/hotel-photo2.jpg"],
};
const hotelResort = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
  priceRange: "$$$$ (61+)",
  reservationNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
};
const hotelLakeView = {
  name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
};
async function hotelDetails(hotel){
    try{
        const newHotels = new Hotel(hotel)
        const saveHotelData = await newHotels.save()
        console.log("Hotel Saved Succussfully: ", saveHotelData)
    }
    catch(error){
        throw error
    }
}
// hotelDetails(newHotel)
// hotelDetails(hotelResort)
// hotelDetails(hotelLakeView)

// 3. Create a function to read all hotels from the database. Console all the hotels. Use proper function and variable names.
async function readAllHotel(){
    try{
        const readAll = await Hotel.find()
        console.log(readAll)
    }
    catch(error){
        throw error
    }
}
// readAllHotel()

// Create a function to read a hotel by its name ("Lake View"). Console the restaurant details of Lake View hotel. Use proper function and variable names.
async function readAllHotelByName(hotelName){
    try{
        const readAllHotelName = await Hotel.findOne({name: hotelName})
        console.log(readAllHotelName)
    }
    catch(error){
        throw error
    }
}
// readAllHotelByName("Lake View")
// 5. Create a function to read all hotels which offers parking space. Console all the hotel details.
async function hotelParking(){
    try{
        const readHotelParking = await Hotel.find({isParkingAvailable: true})
        console.log(readHotelParking)
    }
    catch(error){
        throw error
    }
}
// hotelParking()

// 6. Create a function to read all hotels which has restaurant available. Console all the hotels.

async function hotelResturantAvailable(){
    try{
        const readAllResturant = await Hotel.find({isRestaurantAvailable: true})
        console.log(readAllResturant)
    }
    catch(error){
        throw error
    }
}
// hotelResturantAvailable()
// 7. Create a function to read all hotels by category ("Mid-Range"). Console all the mid range hotels
async function showHotelByCategory(hotelCategory){
    try{
        const readAllHotel = await Hotel.find({category: hotelCategory})
        console.log(readAllHotel)
    }
    catch(error){
        throw error
    }
}
// showHotelByCategory("Mid-Range")

// 8. Create a function to read all hotels by price range ("$$$$ (61+)"). Console all the hotels.

async function showHotelByPrice(price){
    try{
        const readAllHotelPrice = await Hotel.find({priceRange: price})
        console.log(readAllHotelPrice)
    }
    catch(error){
        throw error
    }
}
// showHotelByPrice("$$$$ (61+)")

// 9. Create a function to read all hotels with 4.0 rating. Console the hotels.
async function readAllHotelByRating(){
    try{
        const readHotelRating = await Hotel.find({rating: 4.0})
        console.log(readHotelRating)
    }
    catch(error){
        throw error
    }
}
// readAllHotelByRating()

// 10. Create a function to read a hotel by phone number ("+1299655890"). Console the hotel data.
async function readHotelByPhoneNumber(hotelNumber){
    try{
        const readAllHotelByPhone = await Hotel.findOne({phoneNumber: hotelNumber})
        console.log(readAllHotelByPhone)
    }
    catch(error){
        throw error
    }
}
// readHotelByPhoneNumber("+1234555890")

async function findHotelById(hotelId, dataToUpdate){
    try{
        const findHotelAndUpdate = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, {new: true})
        console.log(findHotelAndUpdate)
    }
    catch(error){
        throw error
    }
}
// findHotelById("6a9beeb4017f4d44c991e8fd", {checkOutTime: "11:00AM"})

async function findHotelByName(hotelName, dataToUpdate){
    try{
        const findHotelByNameAndUpdate = await Hotel.findOneAndUpdate({name: hotelName}, dataToUpdate, {new: true})
        console.log(findHotelByNameAndUpdate)
    }
    catch(error){
        throw error
    }
}
// findHotelByName("Lake View", {rating: 4.2})

async function findHotelByPhoneNumber(number, dataToUpdate){
    try{
        const findHotelByNumber = await Hotel.findOneAndUpdate({phoneNumber: number}, dataToUpdate, {new:true})
        console.log(findHotelByNumber)
    }
    catch(error){
        throw error
    }
}
// findHotelByPhoneNumber("+1234555890", {phoneNumber: "+1997687392"})

async function deleteHotelById(hotelId){
    try{
        const deleteByHotel = await Hotel.findByIdAndDelete(hotelId)
        console.log("Delete Succussfully: ", deleteByHotel)
    }
    catch(error){
        throw error
    }
}
// deleteHotelById("6a9bd266606ce1768233b7e4")

async function deleteHotelByPhoneNumber(hotelNumber){
    try{
        const deleteHotelByPhone = await Hotel.findOneAndDelete({phoneNumber: hotelNumber})
        console.log("Delete Succussfully: ", deleteHotelByPhone)
    }
    catch(error){
        throw error
    }
}
deleteHotelByPhoneNumber("+1299655890")
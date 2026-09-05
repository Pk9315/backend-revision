const {initializeDatabase} = require("./db/db.connect")
const Resturant = require("./model/restaurants.models")
initializeDatabase()
const newRestaurants = {
  name: "Cha Cha",
  cuisine: ["Spanish"],
  location: "123 Main Street, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://example.com",
  phoneNumber: "+1234567890",
  openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationNeeded: true,
  isDeliveryAvailable: true,
  menuUrl: "https://example.com/menu",
  photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
};
const somiResturant = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
};
const yoChinaResturant = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
};
async function createdResturant(resturant){
    try{
        const newResturant = new Resturant(resturant)
        const saveResturant = await newResturant.save()
        console.log("Saved Resturant: ", saveResturant)
    }
    catch(error){
        throw error
    }
}
// createdResturant(newRestaurants)
// createdResturant(somiResturant)
// createdResturant(yoChinaResturant)

// //  Create a function to read all restaurants from the database. Console all the restaurants. Use proper function and variable names.

// async function readAllData(){
//     try{
//         const readData = await Resturant.find()
//         console.log(readData)
//     }
//     catch(error){
//         throw(error)
//     }
// }
// // readAllData()
// // Create a function to read a restaurant by its name ("New Restaurant"). Console the restaurant details. Use proper function and variable names.
// async function readResturantByName(resturantName){
//     try{
//         const readResturant = await Resturant.findOne({name: resturantName})
//         console.log("Resturant Details: ", readResturant)
//     }
//     catch(error){
//         throw error
//     }
// }
// // readResturantByName("Cha Cha")

// 5. Create a function to read all restaurants which offers reservations. Console the restaurant details.
// async function readAllReservation(reservation){
//     try{
//         const reservationData = await Resturant.find({reservationNeeded: reservation})
//         console.log("Showing Reservation: ", reservationData)
//     }
//     catch(error){
//         throw error
//     }
// }
// readAllReservation(true)

// 6. Create a function to read all restaurants which offers delivery. Console the restaurant details.

async function readAllResturantOffer(resturantDelivery){
    try{
        const readAllOffer = await Resturant.find({isDeliveryAvailable: resturantDelivery})
        console.log("showing Delivery Resturant: ", readAllOffer)
    }
    catch(error){
        throw error
    }
}
// readAllResturantOffer(true)

// 7. Create a function to read a restaurant by phone number (+1288997392). Console the restaurant details.

async function readResturantByNumber(resturantNumber){
    try{
        const readResturant = await Resturant.findOne({phoneNumber: resturantNumber})
        console.log(readResturant)
    }
    catch(error){
        throw error
    }
}
// readResturantByNumber("+1288997392")

// Create a function to read all restaurants by cuisine ("Italian"). Console all the restaurants with Italian cuisine.
async function readAllResturantByCuisine(cuisineName){
    try{
        const readAllResturant = await Resturant.findOne({cuisine: cuisineName})
        console.log(readAllResturant)
    }
    catch(error){
        throw error
    }
}
// readAllResturantByCuisine("Italian")

async function resturantById(resturantId, dataToUpdate){
    try{
        const findResturant = await Resturant.findByIdAndUpdate(resturantId, dataToUpdate, {new: true})
        console.log("Updated Resturant Rating: ", findResturant)
    }
    catch(error){
        throw error
    }
}
// resturantById("6a9bd3c57bbbdf9fef1b1f0e", {rating: 4.1})

async function findResturantByName(resturantName, dataToUpdate){
    try{
        const resturantByName = await Resturant.findOneAndUpdate({name: resturantName}, dataToUpdate, {new: true})
        console.log(resturantByName)
    }
    catch(error){
        throw error
    }
}
// findResturantByName("Somi", {name: "Som Sarover"})

async function resturantByPhoneNumber(mobileNumber, dataToUpdate){
    try{
        const resturantByNumber = await Resturant.findOneAndUpdate({phoneNumber: mobileNumber}, dataToUpdate, {new: true})
        console.log(resturantByNumber)
    }
    catch(error){
        throw error
    }
}
// resturantByPhoneNumber("+1288997392", {isDeliveryAvailable:true})

async function deleteRestaurantById(resturantId){
    try{
        const resturantById = await Resturant.findByIdAndDelete(resturantId)
        console.log("Data Deleted Succussfully: ", resturantById)
    }
    catch(error){
        throw error
    }
}
// deleteRestaurantById("6a9bccf39153a9b24690d0f8")

async function deleteRestaurantByName(resturantName){
    try{
        const deleteResturantName = await Resturant.findOneAndDelete({name: resturantName})
        console.log("Deleted Succussfully: ", deleteResturantName)
    }
    catch(error){
        throw error
    }
}
deleteRestaurantByName("Cha Cha")
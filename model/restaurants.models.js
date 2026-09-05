const mongoose = require("mongoose")

const restaurantSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        cuisine: [{
            type: String,
            enum:['Italian', 'Mexican', 'Chinese', 'Indian', 'American', 'French', 'Japanese', 'Mediterranean', 'Thai', 'Vegetarian', 'Vegan', 'Spanish' ,'Greek','Other']
        }],
        location: {
            type: String,
            required: true,
        },
        owner: {
            type: String,
           
        },
        phoneNumber: {
            type: String,
        },
        website: {
            type: String,
        },
        openHours: {
            type: String,
        },
        rating:{
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },
        reviews: [{
            type: String,
        }],
        priceRange:{
            type: String,
            enum:['$ (0-10)', '$$ (11-30)', '$$$ (31-60)', '$$$$ (61+)','Other'],
        },
        reservationNeeded:{
            type: Boolean,
            default: false,
        },
        isDeliveryAvailable:{
            type: Boolean,
            defualt: false,
        },
        menuUrl:{
            type: String,
            default: false,
        },
        photoUrls: [{
            type: String,
        }],

    }, {timestamps: true}
)

const Restaurant = mongoose.model("Restaurant", restaurantSchema)

module.exports = Restaurant
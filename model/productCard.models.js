const mongoose = require("mongoose")

const productCardSchema = new mongoose.Schema(
    {
        productImage: String, 
        productName: String,
        productDescription: String,
        price: Number,
        rating: Number,
        reviewCount: Number,
        resolution: String,
        sensorType: String,
        isWifiAvailable: Boolean,
        videoResolution: String, 
        warranty: String,
    }
)

const ProductCard = mongoose.model("ProductCard", productCard)

module.exports = ProductCard
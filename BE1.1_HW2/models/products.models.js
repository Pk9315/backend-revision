const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        productImageUrl: String,
        productName: String,
        rating: Number,
        reviewCount: Number,
        price: Number,
        originalPrice: Number,
        discount: Number,
        offer: String,
        warranty: String,
        variant: String,
        isWifiConnectivity: Boolean,
    }
)

const Product = mongoose.model("Product", productSchema)

module.exports = Product
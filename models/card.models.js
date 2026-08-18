const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema(
    {
        cardName: String,
        cardNumber: String,
        expiryDate: String,
        cardHolderName: String,
    }
)

const Card = mongoose.model("Card", cardSchema)

module.exports = Card
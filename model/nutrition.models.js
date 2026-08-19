const mongoose = require("mongoose")

const nutritionSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        calories: Number,
        carbohydrates: Number,
        protein: Number,
        fat: Number,
    }

)

const Nutrition = mongoose.model("Nutrition", nutritionSchema)

module.exports = Nutrition
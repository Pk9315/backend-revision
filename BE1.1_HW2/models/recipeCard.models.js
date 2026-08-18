const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema(
    {
        recipeImageUrl: String,
        recipeName: String,
        description: String,
        servings: Number,
        prepTime: Number,
        cookingTime: Number,
        ingredients: [{
            type: String,
        }],
        directions: [{
            type: String,
        }],
        notes: {
            type: String,
        }
    }
)


const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe
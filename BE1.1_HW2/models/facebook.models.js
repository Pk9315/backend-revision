const mongoose = require("mongoose")

const facebookSchema = new mongoose.Schema(
    {
        username: String,
        profileImageUrl: String,
        post: String,
        postImageUrl: String,
        likes: Number,
        comments: Number,
        shares: Number,
    }
)

const Facebook = mongoose.model("Facebook", facebookSchema)

module.exports= Facebook
const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema(
    {
        profileImageUrl: String,
        fullName: String,
        username: String,
        bio: String,
        companyName: String,
        city: String,
        portfolioUrl: String,
        handle: String,
        followerCount: Number,
        followingCount: Number,
        location: String,
        isOnline: Boolean,
    }
)


const Profile = mongoose.model("Profile", profileSchema)

module.exports = Profile
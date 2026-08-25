const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema(
    {
        profileImageUrl: String,
        fullName: String,
        userName: String,
        bio: String,
        companyName: String,
        city: String,
        profileLink: String,
        handle: String,
        followersCount: Number,
        followingCount: Number,
        isOnline: Boolean
    }
)


const Profile = mongoose.model("Profile", profileSchema)

module.exports = Profile
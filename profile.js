const {initializeDatabase} = require("./db/db.connect")
// const fs = require("fs")
const Profile = require("./model/profile.models")

initializeDatabase()


// const jsonData = fs.readFileSync("profile.json", "utf-8")
// const profilesData = JSON.parse(jsonData)

// function profileData(){
//     try{
//         for(let profileData of profilesData){
//             const newProfile = new Profile({
//                 fullName: profileData.fullName,
//                 username: profileData.username,
//                 bio: profileData.bio,
//                 profilePicUrl: profileData.profilePicUrl,
//                 followingCount: profileData.followingCount,
//                 followerCount: profileData.followerCount,
//                 companyName: profileData.companyName,
//                 location: profileData.location,
//                 portfolioUrl: profileData.portfolioUrl,
//             })
//            newProfile.save()
//         }
        
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// profileData()

const profileDetails = {
    fullName: "Alice Johnson",
    username: "alice_j",
    bio: "Passionate software engineer exploring new technologies.",
    profilePicUrl: "https://example.com/alice_profile.jpg",
    followingCount: 300,
    followerCount: 1500,
    companyName: "TechCo",
    location: "San Francisco, CA",
    portfolioUrl: "https://alice.portfolio.com"
  }

  async function profileData(profiles){
    try{
      const newProfile = new Profile(profiles)
      const saveProfile = await newProfile.save()
      console.log("Saved Profile: ", saveProfile)
      
    }
    catch(error){
      console.log(error)
    }
  }
  profileData(profileDetails)
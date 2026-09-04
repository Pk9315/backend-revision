const {initializeDatabase} = require("./db/db.connect")
const fs = require("fs")
const Song = require("./model/song.models")
initializeDatabase()

const jsonData = fs.readFileSync("song.json", "utf-8")
const songsDetails = JSON.parse(jsonData)

function songData(){
    try{
        for(let songDetails of songsDetails){
            const newSongPlaylist = new Song({
                title: songDetails.title,
                artist: songDetails.artist,
                album: songDetails.album,
                duration: songDetails.duration,
                language: songDetails.language,
            })
            newSongPlaylist.save()
            
        }
    }
    catch(error){
        console.log(error)
    }
}
songData()
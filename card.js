const {initializeDatabase} = require("./db/db.connect")
const Card = require("./model/card.models")
const fs = require("fs")

initializeDatabase()

const jsonData = fs.readFileSync("cards.json", "utf-8")
const cardsData = JSON.parse(jsonData)

function cardDetails(){
    try{
        for(let cardData of cardsData){
            const newCard = new Card ({
                cardName: cardData.cardName,
                cardNumber: cardData.cardNumber,
                expiryDate: cardData.expiryDate,
                cardHolderName: cardData.cardHolderName
            })
            newCard.save()
        }
    }
    catch(error){
        console.log(error)
    }
}
cardDetails()
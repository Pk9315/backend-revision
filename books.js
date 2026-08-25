const {initializeDatabase} = require("./db/db.connect")
const fs = require("fs")
const Book = require("./model/books.models")

initializeDatabase()

const jsonData = fs.readFileSync("books.json", "utf-8")
const booksData = JSON.parse(jsonData)

function bookDetails(){
    try{
        for(let bookData of booksData){
            const newBook = new Book({
                title: bookData.title,
                author: bookData.author,
                publishedYear: bookData.publishedYear,
                genre: bookData.genre,
                language: bookData.language,
                country: bookData.country,
                summary: bookData.summary,
                coverImageUrl: bookData.coverImageUrl,

            })
            newBook.save()
        }
    }
    catch(error){
        console.log(error)
    }
}
bookDetails()
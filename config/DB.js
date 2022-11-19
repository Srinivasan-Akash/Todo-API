const mongoose = require("mongoose")

function connectToDatabase() { 
    mongoose.connect("mongodb+srv://akashSrinivasan:d0OKjXCMGpEirjxc@cluster0.5txyemk.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected To DB Sucessfully....")
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = connectToDatabase
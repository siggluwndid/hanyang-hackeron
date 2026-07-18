require('dotenv').config()
const mongoose = require('mongoose')

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.DB)
        console.log("DbConnected")
    }
    catch (err){
        console.log("dbconnect failed")
        console.log(err)
    }
};

module.exports = dbconnect;
const mongoose = require('mongoose');

const URI = 'mongodb+srv://aftabameen:41453@cluster0.snj8d.mongodb.net/RentCarDBTest?retryWrites=true&w=majority';


const connectDB = async () => {
  try {
    //connect to mongodb database
    mongoose.connect(URI);
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
    })
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
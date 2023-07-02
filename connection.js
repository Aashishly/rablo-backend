const mongoose = require('mongoose');

const connectMongoDB = async (url) => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDb');
    } catch (error) {
        console.log('Failed to connect to MongoDb', error);
        throw error;
    }
}


module.exports = connectMongoDB;
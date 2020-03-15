const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })

        console.log('MongoDB Connected...Yeh, it works')
    } catch (err) {
        console.error(err.message)
        // Exit process with failue
        process.exit(1)
    }
}

module.exports = connectDB
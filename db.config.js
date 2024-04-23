import mongoose from 'mongoose'

(async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB Database: --> ${db.connection.name}`)
    }

    catch(error) {
        console.error(error)
    }
})()
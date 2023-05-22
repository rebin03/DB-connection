const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://rebin:mongodb123@cluster0.jfxhagk.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        console.log("Database connected")
    } catch (error) {
        console.log(`Error: ${error}`)
        process.exit()
    }
}
module.exports = connectDB
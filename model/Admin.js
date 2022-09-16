const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true },
    },
)  

module.exports = mongoose.model("Admin", AdminSchema)
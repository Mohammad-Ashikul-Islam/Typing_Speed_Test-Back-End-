const mongoose = require("mongoose")

const PassageSchema = new mongoose.Schema({
    text: {type: String, required: true, unique: true }
    },
    {timestamps: true}
)

module.exports = mongoose.model("Passage", PassageSchema);
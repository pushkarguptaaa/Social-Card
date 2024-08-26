const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://pushkardps8:********%40@cluster0.fid6d.mongodb.net/social-card");

const cardSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    socialMedia: [{
        platform: {type: String, required: true},
        link: {type: String, required: true}
    }],
    interests: [{type: String, required: true}]

})

const Card = mongoose.model("cards", cardSchema)

module.exports = {
    Card
}
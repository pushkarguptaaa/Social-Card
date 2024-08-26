const express = require("express");
const { CardSchema } = require("./types");
const { Card } = require("./db");

const router = express.Router();

router.post("/cards", async (req, res) => {
    const parsedData = CardSchema.safeParse(req.body)

    if(!parsedData.success) res.status(411).send("wrong inputs")

    const newCard = new Card(parsedData.data)
    await newCard.save()

    res.status(200).json(newCard)

})

router.get("/cards", async (req, res) => {
    const cards = await Card.find()

    res.status(200).json(cards)
})

router.put("/cards/:id", async (req, res) => {
    const {id} = req.params
    const parsedData = CardSchema.safeParse(req.body)

    if(!parsedData.success) res.status(411).send("wrong inputs")
    
    const updatedCard = await Card.findByIdAndUpdate(id, parsedData.data, {new: true})

    if(!updatedCard) res.status(404).json({error: "Card not found"})
    
    res.status(200).json({msg: "Card updated succesfully"})
})

router.delete("/cards/:id", async (req, res) => {
    const {id} = req.params

    const deletedCard = await Card.findByIdAndDelete(id)

    if(!deletedCard) res.status(404).json({error: "Card not found"})
    
    res.status(200).json({msg: "Card deleted successfully"})
})

module.exports = {
    router
}
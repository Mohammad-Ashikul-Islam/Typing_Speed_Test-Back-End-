const Passage = require("../model/Passage");
const router = require("express").Router();

router.post("/add", async (req, res) => {
    const newPassage = new Passage(req.body);
    try {
        const savedPassage = await newPassage.save();
        res.status(200).json(savedPassage);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
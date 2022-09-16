const router = require("express").Router();
const Passage = require("../model/Passage")

router.get("/passage", async (req, res) => {
   let temp =Passage.aggregate([{ $sample: {size: 1} }]);
   let text;
    (await temp).forEach(doc => {
      text = doc.text;
      // console.log(doc)
      // res.status(200).json(doc);
    })
   res.status(200).send(text);
})

module.exports = router;
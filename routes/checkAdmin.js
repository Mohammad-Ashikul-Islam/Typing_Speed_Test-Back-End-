const Admin = require("../model/Admin");
const router = require("express").Router();

router.post("/admin", async (req, res) => {
    let receivedEmail = req.body;
    receivedEmail = receivedEmail.email;
    try {
        let verdict = await Admin.findOne({ email: receivedEmail }).exec() === null? false: true;
        res.status(200).json(verdict);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;
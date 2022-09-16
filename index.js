const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const addPassage = require("./routes/addPassage");
const checkAdmin = require("./routes/checkAdmin")
const generatePassage = require("./routes/generatePassage");
dotenv.config();

mongoose
.connect(process.env.MONGO_URL, {dbName: "Typing_Test_Project"})
.then( () => console.log("Database Connected !") )
.catch( (error) => console.log(error) )

app.use(cors());
app.use(express.json());
app.use("/api", addPassage);
app.use("/generate", generatePassage);
app.use("/api", checkAdmin);

app.listen(process.env.PORT || 5000, (req,res) => {
    console.log("Backend Server is Running");
})
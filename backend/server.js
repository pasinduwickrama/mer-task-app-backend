const dotenv = require("dotenv").config();
const { json } = require("express");
const express = require('express');
const mongoose = require("mongoose");
const connectDB = require("./config/connectDB")
const Task = require('./models/taskModel');
const taskRoutes = require('./routes/taskRoute');
const cors = require("cors");


const app = express();


// middler
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use("/api/tasks", taskRoutes);


/** 
const logger = (req, res, next) => {
    console.log("Middleware ran");
    console.log(req.method);
    next();
};
*/

app.get("/", (req,res) => {
    res.send("Home page");
});




const PORT = process.env.PORT || 5000;

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`server running on Port ${PORT}`);
    });

})
 .catch((err) => console.log(err));



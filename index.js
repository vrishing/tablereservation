const mongoose = require("mongoose");
const express = require("express");
const customerRoute = require("./controller/customerRoute")
const bodyParser = require("body-parser");
const cors = require("cors");

app = express();

mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://restodemo:12345@cluster0.gbg52ck.mongodb.net/restodemoseats")
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to database"));
db.on("error",()=>console.log("Error"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/customerRoute",customerRoute);

app.listen(4000,()=>{
    console.log("Server started at 4000");
})
const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    "date": {type:Date},
    "timeSlot": {type:String},
    "imageId":{type:String}
},{
    collection:"demoseats"
})

module.exports = mongoose.model("customerSchema",customerSchema);
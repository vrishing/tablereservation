const express = require("express");
const customerSchema = require("../model/customerSchema");
const customerRoute = express.Router();
const mongoose = require("mongoose");

customerRoute.post("/create-customer",(req,res)=>{
    customerSchema.create(req.body, (err,data) => {
        if(err)
            return err;
        else
            res.json(data);
    })
})
customerRoute.get("/",(req,res)=>{
    customerSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
})
})
customerRoute.route("/update-customer/:id")
.get((req,res)=>{
    customerSchema.find(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
}).put((req,res)=>{
    customerSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

customerRoute.delete("/delete-customer/:id",(req,res)=>{
    customerSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

module.exports = customerRoute;
const port=4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors= require("cors");
const { error } = require("console");


app.use(express.json());
app.use(cors());

//Database Connection With MongoDB
mongoose.connect("mongodb+srv://sishajjad002:ddXbuRv6NFHPFZMQ@cluster0.edvnaeg.mongodb.net/ECOMMERCE")

//API Creation

app.get("/",(req,res)=>{
        res.send("Express App is Running")
})


//Image Storage Engine

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage})


//Creating Upload EndPoint for images


app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})


//Schema for Creating Products

const Product= mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    }
})


app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port " +port)
    }
    else{
        console.log("Error : "+error)
    }
})

const express = require("express");
const ejs = require("ejs");
const path = require("path");
const qrcode = require("qrcode")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"view"));
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/generate-qr",(req,res)=>{
    const input_text = req.body.text;
    qrcode.toDataURL(input_text,(err,qrcodedata)=>{
        res.render("generate-qr",{
            qr_string:qrcodedata
        })
    })
})
app.listen(3000);
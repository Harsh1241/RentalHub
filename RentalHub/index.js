const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const collection = require('./src/mongodb');
const Listing = require('./src/mongodb');
const initData = require('./src/mongodb')
// const wrapAsync = require("./utils/wrapAsync.js");
// const ExpressError = require("./utils/ExpressError.js");


const { urlencoded } = require('body-parser');
const ejsMate = require("ejs-mate");
   

app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(path.join(__dirname,'/public')))

app.use('/',require(path.join(__dirname,'./routes/app.js')))
   
app.set("view engine", "ejs")
app.engine("ejs",ejsMate);
// app.use(express.static(path.join(__dirname,'css')))
app.use(express.static(path.join(__dirname,'listings')))
// app.use(urlencoded({extended:false}))


// app.post('/signup/submit',async(req,res)=>{
//     const data = {
//          email:req.body.email,
//          password:req.body.password
//     }
//     await collection.insertMany([data])
//     res.render('index')
// })

// app.post('/login/submit',async(req,res)=>{
//     try{
//         const check = await collection.findOne({email:req.body.email})
//         if(check.password===req.body.password){
//             res.render('index')
//         }
//         else{
//             res.send("wrong password")
//         }
//     }
//    catch{
//     res.send("invalid credentials")
//    }
// })

app.listen(port,()=>{
    console.log(`rental hub waiting for you on port http://localhost:${8080}`);
})


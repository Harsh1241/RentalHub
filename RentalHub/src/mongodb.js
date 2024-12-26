const mongoose = require('mongoose')
const MONGO_URL = "mongodb://127.0.0.1:27017/rentalhub";
const methodOverride = require("method-override")

const initaudiData = require("../models/audidata.js");
const initmeetingData = require("../models/meetingdata.js");  
const initresortsData = require("../models/resortsdata.js");

const Listing = require("../models/schema.js"); 
mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("mongo db connected");
})
.catch(()=>{
    console.log("mongodb isn't connected");
})
const loginschema = new mongoose.Schema({
     email:{
       type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     }
})
const collection = new mongoose.model("Login credentials",loginschema)

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}  
const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initaudiData.data);
  await Listing.insertMany(initmeetingData.data);
  await Listing.insertMany(initresortsData.data);
  console.log("data was initialized");
};  
initDB();
module.exports = MONGO_URL
module.exports= Listing
module.exports = collection
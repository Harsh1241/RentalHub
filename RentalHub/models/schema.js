const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { number } = require("joi");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    categories: {
        type:String,
        default: "audi",
        required: true
    },
    image: {
        filename: String,
        url: {
            type: String,
            default: "https://media.istockphoto.com/id/655930942/photo/tropical-beach-at-sunset-with-palm-trees-silhouettes.jpg?s=1024x1024&w=is&k=20&c=8gbJeiWNFV_q0pfpDll6WUCCR-c2wPXjkhedmTq_UqA=",
        }
    },
    price: Number,
    location: String,
    country: String,

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    book : [
        {
            name:String,
            email:String,
            checkin:Number,
            checkout:Number,
            rooms:Number,
        },
    ]
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
    await Review.deleteMany({_id : {$in: listing.reviews}});
    }
});



const book = mongoose.model("book", listingSchema);

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

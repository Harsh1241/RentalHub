const express = require('express');
const path = require('path');
const router = express.Router(); 
const ejsMate = require("ejs-mate");
const Listing = require("../models/schema.js");
const methodOverride = require("method-override")
router.use(express.urlencoded({extended: true}));
router.use(methodOverride("_method"));
const app = express(); 
const collection = require('../src/mongodb');


app.use(express.static(path.join(__dirname,'/public')))

 
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const Review = require("../models/review.js");
// const books = require("../models/review.js");

const { wrap } = require('module');
 
// end testing

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

const validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

   

router.get('/',(req,res)=>{
    res.render('index',{
        subjects : 'ejs for rental  hub home page',
        name : 'rent hub',
        link : '../views/index.ejs'
        // link : '../views/index2.ejs'
    
    });

})

router.get('/login',(req,res)=>{
    res.render('login',{
        subjects : 'ejs for rental hub loginin page',
        name : 'rent hub',
        link : '../views/login.ejs'
    });
})
router.get('/signup',(req,res)=>{
    res.render("signup")  
})
router.get('/logout',(req,res)=>{
    res.render("login")  
})

// login Authentication from db
router.post('/signup/submit',async(req,res)=>{
    const data = {
         email:req.body.email,
         password:req.body.password
    }
    await collection.insertMany([data])
    res.render('index')
})

router.post('/login/submit',async(req,res)=>{
    try{
        const check = await collection.findOne({email:req.body.email})
        if(check.password===req.body.password){
            res.render('index')
        }
        else{
            res.send("wrong password")
        }
    }
   catch{
    res.send("invalid credentials")
   }
})

//end auth

router.get('/feedback',(req,res)=>{
    res.render('feedback',{
        subjects : 'ejs for rental hub feedback page',
        name : 'rent hub',
        link : '../views/feedback.ejs'
    });
})

router.get('/about',(req,res)=>{
    res.render('about',{
        subjects : 'ejs for rental hub',
        name : 'rent hub',
        link : '../views/about.ejs'
    });
})

router.get('/blogs',(req,res)=>{
    res.render('blogs',{
        subjects : 'ejs for rental hub',
        name : 'rent hub',
        link : '../views/blogs.ejs'
    });
    // res.sendFile(path.join(__dirname,'../views/index.ejs'))
})

router.get('/help',(req,res)=>{
    res.render('help',{
        subjects : 'ejs for rental hub',
        name : 'rent hub',
        link : '../views/help.ejs'
    });
    // res.sendFile(path.join(__dirname,'../views/index.ejs'))
})

router.get('/privacy',(req,res)=>{
    res.render('privacy',{
        subjects : 'ejs for rental hub',
        name : 'rent hub',
        link : '../views/privacy.ejs'
    });
    // res.sendFile(path.join(__dirname,'../views/index.ejs'))
})
router.get('/t&c',(req,res)=>{
    res.render('t&c',{
        subjects : 'ejs for rental hub',
        name : 'rent hub',
        link : '../views/t&c.ejs'
    });
    // res.sendFile(path.join(__dirname,'../views/index.ejs'))
})

router.get('/Book',(req,res)=>{
    res.render('book',{
        subjects : 'ejs for rental  hub home page',
        name : 'rent hub',
        link : '../views/book.ejs'
        // link : '../views/index2.ejs'
    
    });

})

// _______________Auditorium Routing____________


router.get ("/listings/Audi", wrapAsync(async(req, res) => {
    const allListings = await Listing.find({categories:"audi"});
    res.render("../views/listings/audi/audihome.ejs",{allListings});
    // res.render("../views/listings/audi/audihome.ejs", {categories:'audi'});

}));
//book
// router.post ("/login/submit", async(req, res) => {
//     const allListings = await Listing.find({categories:"audi"});
//     res.render("../views/listings/audi/audihome.ejs",{allListings});
//     // res.render("../views/listings/audi/audihome.ejs", {categories:'audi'});

// }); 

//new.ejs
router.get("/listings/Audi/new", (req, res) => {
    res.render("../views/listings/audi/audinew.ejs");
});

//show.ejs
router.get("/listings/Audi/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/audi/audishow.ejs", { listing });
}));

//add route
router.post("/listings/Audi", wrapAsync(async(req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings/Audi");
}));
 
//edit
router.get("/listings/Audi/:id/edit",wrapAsync( async (req, res) => {
    let { id } = req.params; 
    const listing = await Listing.findById(id);
    res.render("listings/audi/audiedit.ejs", { listing });
}));

//update
// router.put("/listings/Audi/:id", async (req, res) => {
//     let { id } = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     res.redirect(`/listings/Audi/${id}`);
// });  
 
router.put("/listings/Audi/:id", wrapAsync(async(req, res, next) => {
    let {id} = req.params;
    let {title, image, description, location, country, price}  = req.body.listing;
    
    let newL = await Listing.findByIdAndUpdate(id, {
        title:title,
        description:description,
        location:location,
        country:country,
        price:price,
        'image.url' :image
    }, {new:true});
    console.log(newL);
    res.redirect(`/listings/Audi/${id}`);
    }
)); 

//Delete
router.delete("/listings/Audi/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings/Audi");
})); 

//Reviews
//Post route
router.post("/listings/Audi/:id/reviews", validateReview, wrapAsync(async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    // console.log("new Review saved");
    // res.send("new review saved");
    res.redirect(`/listings/Audi/${listing._id}`);
}));

//Delete Review Route
router.delete("/listings/Audi/:id/reviews/:reviewId", wrapAsync(async(req, res) => {
    let { id,reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/Audi/${id}`);
}));

// booking
// router.post("/listings/Audi/:id", validateReview, wrapAsync(async(req, res) => {
//     let listing = await Listing.findById(req.params.id);
//     let newbook = new book(req.body.book);

//     listing.reviews.push(newbook);
//     await newbook.save();
//     await listing.save();

//     // console.log("new Review saved");
//     // res.send("new review saved");
//     res.redirect(`/listings/Audi/${listing._id}`);
// }));



// _________________ Meeting blocks Routing ______________________

router.get ("/listings/Meet", wrapAsync(async(req, res) => {
    const allListings = await Listing.find({categories:"meeting blocks"});
    res.render("../views/listings/meetingblocks/meethome.ejs", {allListings});
}));

//new.ejs
router.get("/listings/Meet/new", (req, res) => {
    res.render("../views/listings/meetingblocks/meetnew.ejs");
});

//show.ejs
router.get("/listings/Meet/:id", wrapAsync(async(req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/meetingblocks/meetshow.ejs", { listing });
}));

//add route
router.post("/listings/Meet", wrapAsync(async(req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings/Meet");
}));

//edit
router.get("/listings/Meet/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params; 
    const listing = await Listing.findById(id);
    res.render("listings/meetingblocks/meetedit.ejs", { listing });
})); 

//update
// router.put("/listings/Meet/:id", async (req, res) => {
//     let { id } = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     res.redirect(`/listings/Meet/${id}`);
// });

router.put("/listings/Meet/:id",  wrapAsync((async (req, res, next) => {
    let {id} = req.params;
    let {title, image, description, location, country, price}  = req.body.listing;
    
    let newL = await Listing.findByIdAndUpdate(id, {
        title:title,
        description:description,
        location:location,
        country:country,
        price:price,
        'image.url' :image
    }, {new:true});
    console.log(newL);
    res.redirect(`/listings/Meet/${id}`);
    })
));

//Delete
router.delete("/listings/Meet/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings/Meet");
})); 

//Reviews
//Post route
router.post("/listings/Meet/:id/reviews", validateReview, wrapAsync(async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    // console.log("new Review saved");
    // res.send("new review saved");
    res.redirect(`/listings/Meet/${listing._id}`);
})); 

//Delete Review Route
router.delete("/listings/Meet/:id/reviews/:reviewId", wrapAsync(async(req, res) => {
    let { id,reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/Meet/${id}`);
}));  

// ________________Resorts routing __________________

router.get ("/listings/Resorts", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({categories:"resorts"});
    res.render("../views/listings/resorts/resortshome.ejs", {allListings});
}));

//new.ejs
router.get("/listings/Resorts/new", (req, res) => {
    res.render("../views/listings/resorts/resortsnew.ejs");
});

//show.ejs
router.get("/listings/Resorts/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/resorts/resortsshow.ejs", { listing });
}));

//add route
router.post("/listings/Resorts", wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings/Resorts");
}));

//edit
router.get("/listings/Resorts/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params; 
    const listing = await Listing.findById(id);
    res.render("listings/resorts/resortsedit.ejs", { listing });
}));  

//update
// router.put("/listings/Resorts/:id", async (req, res) => {
//     let { id } = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing});
//     res.redirect(`/listings/Resorts/${id}`);
// });

router.put("/listings/Resorts/:id",  wrapAsync((async (req, res, next) => {
    let {id} = req.params;
    let {title, image, description, location, country, price}  = req.body.listing;
    
    let newL = await Listing.findByIdAndUpdate(id, {
        title:title,
        description:description,
        location:location,
        country:country,
        price:price,
        'image.url' :image
    }, {new:true});
    console.log(newL);
    res.redirect(`/listings/Resorts/${id}`);
    })
));

//Delete
router.delete("/listings/Resorts/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings/Resorts");
})); 


//Reviews
//Post route
router.post("/listings/Resorts/:id/reviews", validateReview, wrapAsync(async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    // console.log("new Review saved");
    // res.send("new review saved");
    res.redirect(`/listings/Resorts/${listing._id}`);
}));

//Delete Review Route
router.delete("/listings/Resorts/:id/reviews/:reviewId", wrapAsync(async(req, res) => {
    let { id,reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/Resorts/${id}`);
}));  

 
router.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

router.use((err, req, res, next) => {
    let {statusCode=500, message="Something went Wrong!"} = err;
    res.status(statusCode).render("error.ejs", {message});
    //res.status(statusCode).send(message);
});
 

module.exports = router; 
   
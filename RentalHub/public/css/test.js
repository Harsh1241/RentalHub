router.get ("/listings/Resorts", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("../views/listings/resorts/audihome.ejs", {allListings});
});

//new.ejs
router.get("/listings/Resorts/new", (req, res) => {
    res.render("../views/listings/resorts/audinew.ejs");
});

//show.ejs
router.get("/listings/Resorts/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/resorts/resortsshow.ejs", { listing });
});

//add route
router.post("/listings/Resorts", async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings/Resorts");
});

//edit
router.get("/listings/Resorts/:id/edit", async (req, res) => {
    let { id } = req.params; 
    const listing = await Listing.findById(id);
    res.render("listings/resorts/resortsedit.ejs", { listing });
}); 

//update
router.put("/listings/Resorts/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/Resorts/${id}`);
});

//Delete
router.delete("/listings/Resorts/:id", async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings/Resorts");
}); 
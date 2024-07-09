const router = require("express").Router();
const show = require("../model/showModel");


// add show
router.post("/add-show", async (req, res) => {})

// delete show
router.post("/delete-show", async (req, res) => {})

// update show
router.put("/update-show", async (req, res) => {})

// get all show by theatre
router.post("/get-all-shows-by-theatres", async (req, res) => {})

// get all theatre by movie
router.post("/get-all-theatres-by-movie", async (req, res) => {})

// get show by id
router.post("/get-show-by-id", async (req, res) => {})


module.exports = router;
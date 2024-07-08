const theatreRouter = require("express").Router();
const Theatre = require("../model/theatreModel");

router.post("/add-theatre", async (req, res) => { });

router.put("/update-theatre", async (req, res) => { });

router.delete("/delete-theatre/:theatreId", async (req, res) => { });

router.get("/get-all-theatres", async (req, res) => { });

router.get("/get-all-theatre-by-owner/:ownerId", async (req, res) => { });


module.exports = theatreRouter;


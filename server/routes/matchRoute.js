const express = require("express");
const { createMatch } = require("../controllers/matchController");

const router = express.Router();
router.post("/create", createMatch);
// router.get("/show", getAllMatches);
// router.get("/search/:id", getMatchById);
// router.delete("/delete/:id", deleteMatch);
// router.put("/update/:id", updateMatch);

module.exports = router;

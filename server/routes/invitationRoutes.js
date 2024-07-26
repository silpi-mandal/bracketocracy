const express = require("express");
const { addinvitation, showall, deleteinvite } = require("../controllers/invitationController");

const Router = express.Router();

Router.post("/:id/invite", addinvitation);
Router.get("/view", showall);
Router.delete("/delete/:id", deleteinvite);

module.exports = Router;
console.log("router invitation is ready to use");
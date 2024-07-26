const mongoose = require("mongoose");
const team = require("./teams");
const userSchema = mongoose.Schema({
  teamOneId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teams",
    required: true,
  },
  teamTwoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teams",
    required: true,
  },
  team1score: {
    type: Number,
  },
  team2score: {
    type: Number,
  },
  finalscore: {
    type: Number,
  },
  decidedWinner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teams",
    required: true,
  },
  status: Number,
  roundSlug: {
    type: String,
  },
  zoneSlug: {
    type: String,
  },
  matchNo: {
    type: Number,
  },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

const userModel = mongoose.model("matches", userSchema);

module.exports = userModel;

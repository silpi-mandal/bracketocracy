const mongoose = require("../database/connect");

const messageSchema = mongoose.Schema({
  leagueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "leagues",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,  // users id present in the league
    ref: "leagues",
  },
  message: {
    type: String,
  },
  status: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

const message = mongoose.model("messages", messageSchema);
module.exports = message;

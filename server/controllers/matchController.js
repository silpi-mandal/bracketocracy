// controllers/matchController.js

const Match = require("../model/matches");
const Team = require("../model/teams");
const Round = require("../model/rounds");
const Season = require("../model/season");
const Zone = require("../model/zones");

// Create a new match
exports.createMatch = async (req, res) => {
  try {
    // Log the request body
    console.log("Request Body:", req.body);

    const {
      teamOneId,
      teamTwoId,
      teamOneScore,
      teamTwoScore,
      decidedWinner,
      status,
      roundSlug,
      zoneSlug,
      seasonId,
      matchNo,
    } = req.body;

    // Validate that IDs are present
    if (!teamOneId || !teamTwoId || !decidedWinner) {
      return res
        .status(400)
        .json({ message: "Team IDs and decided winner are required" });
    }

    // Fetch documents from the database
    const teamOne = await Team.findById(teamOneId).exec();
    const teamTwo = await Team.findById(teamTwoId).exec();
    const season = seasonId ? await Season.findById(seasonId).exec() : null;
    const round = roundSlug
      ? await Round.findOne({ slug: roundSlug }).exec()
      : null;
    const zone = zoneSlug
      ? await Zone.findOne({ slug: zoneSlug }).exec()
      : null;

    // Log fetched documents
    console.log("Fetched Documents:", {
      teamOne,
      teamTwo,
      season,
      round,
      zone,
    });

    // Check if teams exist
    if (!teamOne || !teamTwo) {
      return res.status(404).json({ message: "One or both teams not found" });
    }

    // Check if decidedWinner exists
    if (
      !teamOne ||
      !teamTwo ||
      (teamOne._id.toString() !== decidedWinner.toString() &&
        teamTwo._id.toString() !== decidedWinner.toString())
    ) {
      return res
        .status(404)
        .json({ message: "Decided winner not found among the teams" });
    }

    // Check if season exists
    if (seasonId && !season) {
      return res.status(404).json({ message: "Season not found" });
    }

    // Create and save the match document
    const match = new Match({
      teamOneId,
      teamTwoId,
      teamOneScore: teamOneScore || 0,
      teamTwoScore: teamTwoScore || 0,
      decidedWinner,
      status,
      roundSlug,
      zoneSlug,
      seasonId,
      matchNo,
    });

    const savedMatch = await match.save();

    // Respond with the saved match
    res.status(201).json(savedMatch);
  } catch (error) {
    // Log error details
    console.error("Error occurred while creating match:", error);

    // Respond with error message
    res.status(400).json({ error: error.message });
  }
};

// Get a single match by ID
// exports.getMatchById = async (req, res) => {
//   try {
//     const match = await Match.findById(req.params.id)
//       .populate("teamOneId")
//       .populate("teamTwoId")
//       .populate("decidedWinner")
//       .populate("seasonId")
//       .populate("roundId")
//       .populate("zoneId");
//     if (!match) {
//       return res.status(404).json({ message: "Match not found" });
//     }
//     res.status(200).json(match);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// Update a match by ID
// exports.updateMatch = async (req, res) => {
//   try {
//     const match = await Match.findById(req.params.id);
//     if (!match) {
//       return res.status(404).json({ message: "Match not found" });
//     }

//     const { teamOneId, teamTwoId, decidedWinner, roundId, zoneId, seasonId } =
//       req.body;

//     // Validate updated data
//     if (teamOneId && !(await Team.findById(teamOneId))) {
//       return res.status(404).json({ message: "Team One not found" });
//     }

//     if (teamTwoId && !(await Team.findById(teamTwoId))) {
//       return res.status(404).json({ message: "Team Two not found" });
//     }

//     if (seasonId && !(await Season.findById(seasonId))) {
//       return res.status(404).json({ message: "Season not found" });
//     }

//     if (roundId && !(await Round.findById(roundId))) {
//       return res.status(404).json({ message: "Round not found" });
//     }

//     if (zoneId && !(await Zone.findById(zoneId))) {
//       return res.status(404).json({ message: "Zone not found" });
//     }

//     const updatedMatch = await Match.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     res.status(200).json(updatedMatch);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// Delete a match by ID
// exports.deleteMatch = async (req, res) => {
//   try {
//     const match = await Match.findByIdAndDelete(req.params.id);
//     if (!match) {
//       return res.status(404).json({ message: "Match not found" });
//     }
//     res.status(200).json({ message: "Match deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

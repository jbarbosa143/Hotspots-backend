const mongoose = require("mongoose");

const spotSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  water: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

const Spot = mongoose.model("Spot", spotSchema);

const fetchAllSpots = (req, res) =>
  Spot.find()
    .then((allSpots) => res.send(allSpots))
    .catch((error) => {
      console.log("Error grabing the Spots from the DB");
    });

const SpotService = {
  fetchAllSpots,
};

module.exports = SpotService;

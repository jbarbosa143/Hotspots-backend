const mongoose = require("mongoose");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  state: {type: String, required: true},
  city:{type: String, required: true},
  zip:{type:Number, require:true},
  favoriteLocations: { type: Array, default: [] },
});

const UserModel = mongoose.model("User", userSchema);

const UserController = {
  UserModel,
};

module.exports = UserController;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  surname: String,
  phone: String,
  address: String,
  company: String,
  email: String,
  pin: String,
  password: String,
  package: String,
});

module.exports = mongoose.model("User", userSchema);
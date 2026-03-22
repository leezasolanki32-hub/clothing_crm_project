const express = require("express");
const router = express.Router();
const User = require("../models/User");

// ✅ Register API
router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User Registered ✅" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Login API
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      $or: [{ email: username }, { phone: username }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found ❌" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password ❌" });
    }

    res.json({ message: "Login Successful ✅", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
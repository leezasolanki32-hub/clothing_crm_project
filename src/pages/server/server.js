const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/clothingCRM", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.log(err));


// ✅ ADD HERE 👇 (after middleware, before routes/endpoints)
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);


// ✅ Test route
app.get("/", (req, res) => {
  res.send("API Working 🚀");
});


// ✅ Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
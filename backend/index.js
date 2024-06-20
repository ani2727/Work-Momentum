const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const {UserModel} = require("./models/user")

const app = express();

app.use(express.json());

const corsOptions = {
  origin:"https://work-momentum-sigma.vercel.app",
  optionsSuccessStatus:200
};

app.use(cors(corsOptions));

// MongoDB connection URL (replace with your actual credentials and database name)
const dbUrl = "mongodb+srv://anil:anil1234@clusterworkmomentum.ffz9qde.mongodb.net/WorkMomentum";

mongoose.connect(dbUrl)
.then(() => {
  console.log("MongoDB connected");
})
.catch((e) => {
  console.log("MongoDB Connection Error", e);
});


app.post("/user/register", async (req, res) => {
  try {
      const {userName,email} = req.body;
      const user = await UserModel.create({userName,email});
      res.send("Success")
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" }); // Handle server errors
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is Running at ${PORT}`);
});

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const app = express();
const port = 8080;
const cors = require("cors");
const barreRoutes = require("./server/routes/barre");
const coreRoutes = require("./server/routes/core");
const workoutRoutes = require("./server/routes/workout");
const yelpRoutes = require("./server/routes/findSchools");

app.use(cors());

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/barre", barreRoutes);

app.use("/api/core", coreRoutes);

app.use("/api/workout", workoutRoutes);

app.use("/api/yelp", yelpRoutes);

app.listen(port, () => {
  console.log(`Express is running on port 8080`);
});

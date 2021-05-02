const router = require("express").Router();
const fs = require("fs");
const path = require("path").resolve(__dirname, "../data");

router.get("/", (req, res) => {
  const workoutData = fs.readFileSync(path + "/workout.json", "utf-8");
  const workoutArr = JSON.parse(workoutData);
  console.log(workoutArr);
  res.json(workoutArr);
});

router.get("/:id", (req, res) => {
  const videoData = fs.readFileSync(path + "/workout.json", "utf-8");
  const videoArr = JSON.parse(videoData);
  const singleVideo = videoArr.find((item) => item.id === req.params.id);
  res.json(singleVideo);
});
module.exports = router;

const router = require("express").Router();
const fs = require("fs");
const path = require("path").resolve(__dirname, "../data");

// SINGLE VIDEO FROM VIDEO LIST

router.get("/:id", (req, res) => {
  const videoData = fs.readFileSync(path + "/video.json", "utf-8");
  const videoArr = JSON.parse(videoData);
  const singleVideo = videoArr.find((item) => item.id === req.params.id);
  res.json(singleVideo);
});
module.exports = router;

const router = require("express").Router();
const fs = require("fs");
const path = require("path").resolve(__dirname, "../data");

//get the whole file
router.get("/", (req, res) => {
  const barreData = fs.readFileSync(path + "/barre.json", "utf-8");
  const barreArr = JSON.parse(barreData);
  console.log(barreArr);
  res.json(barreArr);
});

//get single Item in a file
router.get("/:id", (req, res) => {
  const barreData = fs.readFileSync(path + "/barre.json", "utf-8");
  const barreArr = JSON.parse(barreData);
  const barreVideo = barreArr.find((item) => item.id === req.params.id);
  console.log(barreVideo);
  res.json(barreVideo);
});
module.exports = router;

const router = require("express").Router();
const fs = require("fs");
const path = require("path").resolve(__dirname, "../data");

router.get("/", (req, res) => {
  const coreData = fs.readFileSync(path + "/core.json", "utf-8");
  const coreArr = JSON.parse(coreData);
  console.log(coreArr);
  res.json(coreArr);
});

router.get("/:id", (req, res) => {
  console.log("core");
  const coreData = fs.readFileSync(path + "/core.json", "utf-8");
  const coreArr = JSON.parse(coreData);
  const coreVideo = coreArr.find((item) => item.id === req.params.id);
  res.json(coreVideo);
});
module.exports = router;

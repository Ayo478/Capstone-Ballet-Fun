require("dotenv").config();
("use strict");
const router = require("express").Router();

const yelp = require("yelp-fusion");
const client = yelp.client(
  "-OHSNydacJNnv8lPYA4kdre1Kq0AI88Mtfy1iKFDKqVBDBjNdGI16Vki2po2a2c_DSa2blwWjVbIODRooXSuSNEFmoE75Ks8RPHHHSIMKmGjLHGoZRNxa4SH3rmEYHYx"
);

router.post("/", async (req, res) => {
  const response = await client.search({
    term: "Dance Studios",
    location: req.body.location,
  });
  res.json(response.jsonBody.businesses);
});

module.exports = router;

var express = require('express');
var router = express.Router();
  const ratingsController = require("../../controllers/ratings/ratingsController");

  // /api/ratings/
  router.get("/allratings",ratingsController.getRatings);
  router.get("/allcustomerratings",ratingsController.getRatingsCustomer);
  router.get("/rating",ratingsController.getRating);
  router.put("/changeratings",ratingsController.changeRating);
  router.post("/rate",ratingsController.rate);
  router.delete("/removeratings",ratingsController.removeRating);

module.exports = router;


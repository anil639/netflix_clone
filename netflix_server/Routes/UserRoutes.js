const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
} = require("../Controllers/UserController");

const router = require("express").Router();

router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikedMovies);
router.put("/remove", removeFromLikedMovies);

module.exports = router;

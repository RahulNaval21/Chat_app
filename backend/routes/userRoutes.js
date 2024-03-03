const express = require("express");
const {
  regiesterUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(regiesterUser).get(protect, allUsers);
router.post("/login", authUser);

module.exports = router;

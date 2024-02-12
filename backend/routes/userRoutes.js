const express = require("express");
const { regiesterUser, authUser } = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(regiesterUser);
router.post("/login", authUser);

module.exports = router;

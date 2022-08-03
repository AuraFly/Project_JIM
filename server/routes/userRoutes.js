const express = require('express');
const { registerUser, authUser, updateUserProfile } = require('../controllers/userControllers');
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/profile").post(updateUserProfile); //took out "protect" from this route. it needs it but we don't have the functionality yet

module.exports = router;
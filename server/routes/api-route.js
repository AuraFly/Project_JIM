const router = require("express").Router();
const { google } = require("googleapis");

//these need to be hidden or stored for security purposes, for now they are here only for ease of testing
const GOOGLE_CLIENT_ID =
  "944796361588-30hshik247bbc3i2cs2h9tm1i52qihvj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

//REFRESH TOKEN WILL NEED TO BE STORED IN THE DB associated to the user.
const REFRESH_TOKEN = "";

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  "http://localhost:3000" //frontend address
);

router.get("/", async (req, res, next) => {
  res.send({ message: "API is working!" });
});

router.post("/create-tokens", async (req, res, next) => {
  try {
    const { code } = req.body;
    const { tokens } = await oauth2Client.getToken(code);
    res.send(tokens);
  } catch (error) {
    next(error);
  }
});

router.post("/create-event", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = router;

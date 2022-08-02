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
    const { summary, description, location, startDateTime, endDateTime } =
      req.body;
    //will need to insert refresh token from DB here
    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    const calendar = google.calendar("v3");
    const response = await calendar.events.insert({
      auth: oauth2Client,
      calendarId: "primary",
      requestBody: {
        summary: summary,
        descritpion: description,
        location: location,
        colorId: "10",
        start: {
          dateTime: new Date(startDateTime),
        },
        end: {
          dateTime: new Date(endDateTime),
        },
      },
    });
    res.send(response);
  } catch (error) {
    next(error);
  }
});

// router.route ("/profile").post(protect, updateUserProfile)
//this was breaking the app N

module.exports = router;

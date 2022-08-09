const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://jimuser:Test12345@cluster0.qlf5s.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database CONNECTED"))
  .catch((err) => console.log("Error connecting to database.", err));

module.exports = mongoose.connection;

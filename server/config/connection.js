const mongoose = require("mongoose");
mongoose.pluralize(null);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/JIMDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database CONNECTED"))
  .catch((err) => console.log("Error connecting to database.", err));

module.exports = mongoose.connection;

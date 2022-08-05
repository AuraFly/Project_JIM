const mongoose = require("mongoose");
const { Schema } = mongoose;

const calendarSchema = new Schema({
  summary: {
    type: String
  },
  description: {
    type: String
  },

  location: {
    type: String
  },

  startDateTime: {
    type: Date,
  },

  endDateTime: {
    type: Date,
  },

});

const Calendar = mongoose.model("Calendar", calendarSchema);

module.exports = Order;

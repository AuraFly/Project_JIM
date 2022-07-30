const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reminderSchema = new Schema({
  reminderText: {
    type: String,
    required: 'You need to leave a reminder!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
 //took out author

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  //took out commnets
});

const Reminder = model('Reminder', reminderSchema);

module.exports = Reminder;

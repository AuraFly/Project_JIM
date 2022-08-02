const { AuthenticationError } = require("apollo-server-express");
const { User, Studio, Reminder } = require("../models");
const { signToken } = require("../utils/generateToken");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("reminders");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("reminders");
    },
    reminders: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Reminder.find(params).sort({ createdAt: -1 });
    },
    reminder: async (parent, { reminderId }) => {
      return Reminder.findOne({ _id: reminderId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("reminders");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password, instructorNumber, isAdmin, pic }) => {
      const user = await User.create({ firstName, lastName, email, password, instructorNumber, isAdmin, pic });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addReminder: async (parent, { reminderText }, context) => {
      if (context.user) {
        const reminder = await Reminder.create({
          reminderText,
          //took out author
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { reminders: reminder._id } }
        );

        return reminder;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeReminder: async (parent, { reminderId }, context) => {
      if (context.user) {
        const reminder = await Reminder.findOneAndDelete({
          _id: reminderId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { reminders: reminder._id } }
        );

        return reminder;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  }
}

module.exports = resolvers;

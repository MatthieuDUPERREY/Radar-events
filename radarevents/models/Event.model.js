const { Schema, model } = require("mongoose");


const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    dateAndTime: {
      type: Date,
      required: true
    },
    category: String,
    description: String,
    },
  {
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;

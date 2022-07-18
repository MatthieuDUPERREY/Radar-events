const { Schema, model } = require("mongoose");


const eventSchema = new Schema(
  {
    title: String,
    location: String,
    date: Date,
    category: String,
    description: String,    
    },
  {
    timestamps: true,
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;

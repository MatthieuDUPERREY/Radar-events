const Event = require('../models/Event.model.js');
const router = require("express").Router();
const checkIfLoggedIn = require('../middleware/isLoggedIn');


router.get("/", (req, res, next) => {
  Event.find()
    .then((eventsFromDB) => {
      const data = {
        eventsArr: eventsFromDB
      };
      res.render("events/events-list", data);
    })
    .catch((error) => {
      console.log("Error getting data from DB", error);
      next(error);
    })
});

router.get("/create", checkIfLoggedIn, (req, res, next) => {

  Event.find()
    .then(eventsArr => {
      res.render("events/event-create", { eventsArr });
    })
    .catch((error) => {
      console.log("Error getting events from DB", error);
      next(error);
    })


})


router.post("/create", checkIfLoggedIn, (req, res, next) => {

  const eventDetails = {

      title: req.body.title,
      location: req.body.location,
      dateAndTime: req.body.Date,
      category: req.body.category,
      description: req.body.description
  };

  Event.create(eventDetails)
    .then(() => {
      res.redirect("/events");
    })
    .catch((error) => {
      console.log("Error creating event in the DB", error);
      next(error);
    })
})

module.exports = router;

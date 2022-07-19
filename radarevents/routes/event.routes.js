const Event = require('../models/Event.model.js');
const router = require("express").Router();
const checkIfLoggedIn = require('../middleware/isLoggedIn');


router.get("/events", (req, res, next) => {
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


router.post("/events/create", checkIfLoggedIn, (req, res, next) => {

  const eventDetails = {

      title: req.body.title,
      location: req.body.location,
      dateAndTime: req.body.dateAndTime,
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


router.get("/events/:eventId", (req, res, next) => {
  const eventId = req.params.eventId;

  Event.findById(eventId)
    
    .then( (eventDetails) => {
      console.log(eventDetails)
      res.render("events/events-details", eventDetails);
    })
    .catch( (error) => {
      console.log("Error getting event details from DB", error);
      next(error);
    })

})

router.post("/events/:eventId/edit", checkIfLoggedIn, (req, res, next) => {
  const eventId = req.params.eventId;

  const newEventDetails = {

    title: req.body.title,
    location: req.body.location,
    dateAndTime: req.body.dateAndTime,
    category: req.body.category,
    description: req.body.description
};

  Event.findByIdAndUpdate(eventId, newEventDetails, {new: true})

    .then( (eventDetails) => {
      
      res.redirect("/events");
    })
    .catch( (error) => {
      console.log("Error getting event details from DB", error);
      next(error);
    })

});


module.exports = router;

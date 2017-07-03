var express = require("express");
var router = express.Router();
var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/burgers", function(req, res) {
    db.burger.findAll({})
    .then(function(dbburger) {
      res.json(dbburger);
    });
  });

  // Get route for returning burgers of a specific category
  app.get("/api/burgers/burger_name/:burger_name", function(req, res) {
    db.burger.findAll({
      where: {
        burger_name: req.params.burger_name
      }
    })
    .then(function(dbburger) {
      res.json(dbburger);
    });
  });

  // Get rotue for retrieving a single burger
  app.get("/api/burgers/:id", function(req, res) {
    db.burger.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbburger) {
      res.json(dbburger);
    });
  });

  // burger route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    // console.log(req.body);
    db.burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    })
    .then(function(dbburger) {
      res.json(dbburger);
    });
  });

  // DELETE route for deleting burgers
  // app.delete("/api/burgers/:id", function(req, res) {
  //   db.burger.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //   .then(function(dbburger) {
  //     res.json(dbburger);
  //   });
  // });

  // PUT route for updating burgers
  app.put("/api/burgers", function(req, res) {
    db.burger.update(req.burger_name,
      {
        where: {
          id: req.burger_name.id
        }
      })
    .then(function(dbburger) {
      res.json(dbburger);
    });
  });
};

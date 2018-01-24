/* ================================================================================================= */ 
/* =================================== INITIALIZERS/DECLARATIONS =================================== */
/* ================================================================================================= */


const express = require('express');                   // Requires Express.js
const router = express.Router();                      // Initializes an Express router

const Pet = require('../db/models').Pet;              // Requires Pet model
const Comment = require('../db/models').Comment;      // Requires Comment model


/* ================================================================================================= */ 
/* ========================================= RESTFUL ROUTES ======================================== */
/* ================================================================================================= */

// INDEX (Sequelize)
router.get('/', (req, res) => {
  Pet.findAll({
    include: [ models.Pet ]
  }).then((req, res) => {
    res.send(pets);
  }).catch((err) => {
    console.error(err);
  });
});

// NEW (Sequelize)
router.get('/new', (req, res) => {
  Pet.findAll({
    include: [ models.Pet ]
  }).then((req, res) => {
    res.render('pets-new');
  }).catch((err) => {
    console.error(err);
  });
});

// SHOW (Sequelize)
router.get('/:index', (req, res) => {
  Pet.findAll({
    include: [ models.Pet ]
  }).then((req, res) => {
    res.render('pets-show', { pet: pets[req.params.index], comments });
  }).catch((err) => {
    console.error(err);
  });
});

// CREATE (Sequelize)
router.get('/', (req, res) => {
  Pet.findAll({
    include: [ models.Pet ]
  }).then((req, res) => {
    Pet.unshift(req.body);
    res.redirect('/');
  }).catch((err) => {
    console.error(err);
  });
});

// EDIT (Sequelize)
router.get('/:index/edit', (req, res) => {
  Pet.findAll({
    include: [ models.Pet ]
  }).then((req, res) => {
    res.render('pets-edit', { pet: pets[req.params.index]});
  }).catch((err) => {
    console.error(err);
  })
})

// UPDATE (Sequelize)
router.get('/:index/edit', (req, res) => {
  Pet.findAll({
    include: [ models.Pet ]
  }).then((req, res) => {
    res.redirect(`/pets/${req.params.index}`);
  }).catch((err) => {
    console.error(err);
  });
});

// DESTROY (Sequelize)
router.delete('/:index', (req, res) => {
  Pet.findAll({
    include: [ models.Pet ]
  }).then((req, res) => {
    res.redirect('/');
  }).catch((err) => {
    console.error(err);
  });
});


module.exports = router;

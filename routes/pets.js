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

// NEW (Sequelize)
router.get('/new', (req, res) => {
  res.render('pets-new');
});

// SHOW (Sequelize)
router.get('/:id', (req, res) => {
  Pet
    .findById(req.param.id).then(pet => {
      res.render('pets-show', { pet: pets[req.params.index], comments });
    })
    .catch(err => {
      console.error(err);
    });
});

// ------- FIX BELOW ROUTES FOR SPECIFIC ROUTE COMMANDS !!!!!!


// CREATE (Sequelize)
router.get('/', (req, res) => {
  Pet.findAll({
    include: [ Pet ]
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
    include: [ Pet ]
  }).then((req, res) => {
    res.render('pets-edit', { pet: pets[req.params.index]});
  }).catch((err) => {
    console.error(err);
  })
})

// UPDATE (Sequelize)
router.get('/:index/edit', (req, res) => {
  Pet
    .findAll({
    include: [ Pet ]
  }).then((req, res) => {
    res.redirect(`/pets/${req.params.index}`);
  }).catch((err) => {
    console.error(err);
  });
});

// TODO - Look into more individual deletes
// DESTROY (Sequelize)
router.delete('/:index', (req, res) => {
  Pet
    .destroy({ where: { id: req.params.index } })
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      console.error(err);
  });
});


module.exports = router;

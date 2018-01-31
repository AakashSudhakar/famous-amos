/* ================================================================================================= */ 
/* =================================== INITIALIZERS/DECLARATIONS =================================== */
/* ================================================================================================= */


const express = require('express');                     // Requires Express.js
const router = express.Router();                        // Initializes an Express router

// const Pet = require('../db/models').Pet;             // Requires Pet model
const Comment = require('../db/models').Comment;        // Requires Comment model


/* ================================================================================================= */ 
/* ========================================= RESTFUL ROUTES ======================================== */
/* ================================================================================================= */

// NEW (Sequelize)
router.get('/new', (req, res) => { res.render('pets-new') });

// SHOW (Sequelize)
router.get('/:id', (req, res) => {
  Pet
    .findById(req.param.id)
    .then(response => {
      if (response.status === 200) { res.render('pets-show', { response: pets[req.params.index] }) }
    })
    .catch(err => {
      if (err) { res.json(err) }
    });
});

// UPDATE (Sequelize)
router.put('/:id', (req, res) => {
  Pet
    .update(req.body, {
      where: { id: req.params.id }
    }).then(response => {
      if (response.status === 200) { res.status(200) }
    }).catch((err) => {
      if (err) { res.json(err) }
    });
});

// CREATE (Sequelize)
router.get('/', (req, res) => {
  Pet
    .findById(req.body)
    .create(req.body)
    .then(response => {
      if (response.status === 200) { res.redirect('/') }
    }).catch(err => {
      if (err) { res.json(err) }
    });
});

// EDIT (Sequelize)
router.get('/:id/edit', (req, res) => {
  Pet
    .findById(req.param.id)
    .then(response => {
      if (response.status === 200) { res.render('pets-edit', { response: pets[req.body] }) }
    })
    .catch(err => {
      if (err) { res.json(err) }
    });
});

// DESTROY (Sequelize)
router.delete('/:id', (req, res) => {
  Pet
    .destroy({ where: { id: req.params.index } })
    .then((response) => {
      if (response.status === 200) { res.redirect('/') }
    })
    .catch((err) => {
      if (err) { res.json(err) }
  });
});


module.exports = router;

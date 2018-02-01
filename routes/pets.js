/* ================================================================================================= */ 
/* =================================== INITIALIZERS/DECLARATIONS =================================== */
/* ================================================================================================= */


const express = require('express');                     // Requires Express.js
const router = express.Router();                        // Initializes an Express router

// const Pet = require('../db/models').Pet;             // Requires Pet model
// const Comment = require('../db/models').Comment;     // Requires Comment model


/* ================================================================================================= */ 
/* ========================================= RESTFUL ROUTES ======================================== */
/* ================================================================================================= */

// // NEW (Sequelize)      -->   Render Pug template.
// router.get('/new', (req, res) => { res.render('pets-new') });

// // SHOW (Sequelize)     -->   Find Pet datum by ID, then render JSON and template; check with catch case.
// router.get('/:id', (req, res) => {
//   const id = req.param.id;

//   db.pets
//     .find({ where: { id: id } })
//     .then(pet => {
//       res.json(`\nPET DATA TO SHOW: ${pet}\n`);
//       if (pet.status === 200) { res.render('pets-show', { response: pets[req.params.index] }) }
//     })
//     .catch(err => {
//       if (err) { res.json(err) }
//     })
// });

// // UPDATE (Sequelize)   -->   Update and return Pet datum by ID, then render JSON and redirect to home page; check with catch case.
// router.put('/:id', (req, res) => {
//   const id = req.param.id;
//   const updates = req.param.updates;

//   db.pets
//     .update(body, { where: { id: id } })
//     .then(pet => {
//       res.json(`\nPET DATA TO BE UPDATED: ${pet}\n`);
//       return pet.updateAttributes(updates);
//     })
//     .then(updatedPet => {
//       res.json(`\nUPDATED PET DATA: ${updatedPet}\n`);
//       if (updatedPet.status === 200) { res.redirect('/') }
//     })
//     .catch(err => {
//       if (err) { res.json(err) }
//     });
// });

// // CREATE (Sequelize)   -->   Create new Pet datum from  
// router.get('/', (req, res) => {
//   const body = req.body;

//   db.pets
//     .create({ where: { body: body } })
//     .then(newPet => {
//       res.json(`NEW PET DATA IS: ${newPet}`);
//       if (newPet.status === 200) { res.redirect('/') }
//     })
//     .catch(err => {
//       if (err) { res.json(err) }
//     });
// });

// // EDIT (Sequelize)
// router.get('/:id/edit', (req, res) => {
//   const id = req.param.id;

//   db.pets
//     .findById({ where: { id: id } })
//     .then(pet => {
//       res.json(`PET DATA TO EDIT IS: ${pet}`);
//       if (pet.status === 200) { res.render('pets-edit', { response: pets[req.body] }) }
//     })
//     .catch(err => {
//       if (err) { res.json(err) }
//     });
// });

// // DESTROY (Sequelize)
// router.delete('/:id', (req, res) => {
//   Pet
//     .destroy({ where: { id: req.params.index } })
//     .then((response) => {
//       if (response.status === 200) { res.redirect('/') }
//     })
//     .catch((err) => {
//       if (err) { res.json(err) }
//   });
// });


module.exports = router;

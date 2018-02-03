/* ================================================================================================= */ 
/* =================================== INITIALIZERS/DECLARATIONS =================================== */
/* ================================================================================================= */


const express = require('express');                     // Requires Express.js
const router = express.Router();                        // Initializes an Express router

const Pet = require('../db/models').Pet;             // Requires Pet model
const Comment = require('../db/models').Comment;     // Requires Comment model


/* ================================================================================================= */ 
/* ========================================= RESTFUL ROUTES ======================================== */
/* ================================================================================================= */

// NEW (Sequelize)      	-->   		Render Pug template for new Pet entry.
router.get('/new', (req, res) => { res.render('pets-new') });

// CREATE (Sequelize)   	-->   		Create new Pet data; catch errors.
router.post('/', (req, res) => {
	let body = req.body;
  	Pet
		.create(body)
		.then(pet => {
    		res.redirect(`/pets/${pet.id}`);
  		})
  		.catch(err => {
    		if (err) { console.error(err) }
  		});
});

// SHOW (Sequelize)     	-->   		Find Pet datum by ID, then render JSON and template; catch errors.
router.get('/:id', (req, res) => {
	let id = req.params.id;
	Pet
		.findById(id)
		.then(pet => {
			res.render('pets-show', { pet: pet })
    	})
    	.catch(err => {
    		if (err) { console.log(err) }
    	})
});

// EDIT (Sequelize)			--> 		Render Pug editing template; catch errors.
router.get('/:id/edit', (req, res) => {
	let body = req.body;
	Pet
		.findById()
		.then(pet => {
    		res.render('pets-edit', { pet: body })
    	})
    	.catch(err => {
      		if (err) { console.log(err) }
    	});
});

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------

// UPDATE (Sequelize)   -->   Update and return Pet datum by ID, then render JSON and redirect to home page; check with catch case.
router.put('/:id', (req, res) => {
  const id = req.param.id;
  const updates = req.param.updates;

  Pet.update(body, { where: { id: id } }).then(pet => {
      res.json(`\nPET DATA TO BE UPDATED: ${pet}\n`);
      return pet.updateAttributes(updates);
    })
    .then(updatedPet => {
      res.json(`\nUPDATED PET DATA: ${updatedPet}\n`);
      if (updatedPet.status === 200) { res.redirect('/') }
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

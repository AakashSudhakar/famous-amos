/* ================================================================================================= */ 
/* =================================== INITIALIZERS/DECLARATIONS =================================== */
/* ================================================================================================= */


const express = require('express');                     // Requires Express.js
const router = express.Router();                        // Initializes an Express router

const Pet = require('../db/models').Pet;             	// Requires Pet model
const Comment = require('../db/models').Comment;     	// Requires Comment model

Pet.hasMany(Comment);									// Sequelize Association between Pets and Comments


/* ================================================================================================= */ 
/* ========================================= RESTFUL ROUTES ======================================== */
/* ================================================================================================= */


// NEW (Sequelize)      	-->   		Render Pug template for new Pet entry.
router.get('/new', (req, res) => { res.render('pets-new') });

// CREATE (Sequelize)   	-->   		Create new Pet data; catch errors.
router.post('/', (req, res) => {
  	Pet.create(req.body).then(pet => {
    		res.redirect(`/pets/${pet.id}`);
  		}).catch(err => { if (err) { console.error(err) } });
});

// SHOW (Sequelize)     	-->   		Find Pet datum by ID, then render JSON and template; catch errors.
router.get('/:id', (req, res) => {
	const id = req.params.id;
	Pet.findById(id)
		.then(pet => {
		res.render('pets-show', { pet: pet })
    }).catch(err => { if (err) { console.log(err) } });
});

// EDIT (Sequelize)			--> 		Render Pug editing template; catch errors.
router.get('/:id/edit', (req, res) => {
	Pet.findById(req.params.id)
		.then(pet => {
    	res.render('pets-edit', { pet: pet })
    }).catch(err => { if (err) { console.log(err) } });
});

// UPDATE (Sequelize) 		--> 		Update and return Pet data by ID, then render JSON and redirect to home page; catch errors.
router.put('/:id', (req, res) => {
	Pet.findById(req.params.id).then(pet => {
		console.log(pet);
		pet.update(req.body);
		res.redirect(`/pets/${req.params.id}`);
	}).catch(err => { if (err) { console.error(err) } });
});

// DELETE (Sequelize)		--> 		Destroy pet object by ID and redirect to home; catch errors. 
router.delete('/:id', (req, res) => {
	Pet.findById(req.params.id).then(pet => {
		pet.destroy().then(() => {
			res.redirect('/');
		});
	}).catch(err => { if (err) { console.error(err) } });
});

module.exports = router;

// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------


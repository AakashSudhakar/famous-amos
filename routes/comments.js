/* ================================================================================================= */ 
/* =================================== INITIALIZERS/DECLARATIONS =================================== */
/* ================================================================================================= */


const express = require('express');						// Requires Express.js
const router = express.Router({mergeParams: true});		// Initializes an Express router

// let comments = require('../json/comments')			  // Requires Comment model from JSON (old)

const Pet = require('../db/models').Pet;             	// Requires Pet model
const Comment = require('../db/models').Comment;     	// Requires Comment model


/* ================================================================================================= */ 
/* ========================================= RESTFUL ROUTES ======================================== */
/* ================================================================================================= */


// Write create route! DONE
  // Copy-paste pets#create route details! 
  // Change variables - Pet => Comment
  // require Comment model
  // make sure Comments table exists (not quickly) 
    //- body, createdAd, updatedAt, PetId (association)
  // Debug the inevitable errors! 
// Show comments on pet-show! 
// Delete comments on pet-show! 

// --------------------------------------- ZOMBIE BARRICADE ---------------------------------------

// CREATE
router.post('/', (req, res) => {
	Comment.create(req.body).then(comment => {
    	res.redirect(`/pets/${req.params.petId}`);
  	}).catch(err => { if (err) { console.error(err) } });
});

// DESTROY
router.delete('/:index', (req, res) => {
	req.flash('info', 'Destroyed post.')
  	res.redirect(`/pets/${req.params.id}`);
});

module.exports = router;

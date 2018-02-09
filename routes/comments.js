const express = require('express');
const router = express.Router({mergeParams: true});

let comments = require('../json/comments')

// Write create route! DONE
  // Copy-paste pets#create route details! 
  // Change variables - Pet => Comment
  // require Comment model
  // make sure Comments table exists (not quickly) 
    //- body, createdAd, updatedAt, PetId (association)
  // Debug the inevitable errors! 
// Show comments on pet-show! 
// Delete comments on pet-show! 

// ---------------- ZOMBIE BARRICADE ----------------

// CREATE
router.post('/', (req, res) => {
  Comment.create(req.body).then(comment => {
    res.redirect(`/pets/${req.params.petId}`);
  }).catch(err => {
    if (err) { console.error(err) }
  });
});

// DESTROY
router.delete('/:index', (req, res) => {
  req.flash('info', 'Destroyed post.')
  res.redirect(`/pets/${req.params.id}`);
});

module.exports = router;

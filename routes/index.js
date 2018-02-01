const express = require('express');
const router = express.Router();

// let pets = require('../json/pets')

const sequelize = require('sequelize');
const db = {};
const Pet = require('../db/models/pet')(sequelize, db);              // Requires Pet model

/* GET home page. */
router.get('/', (req, res) => {
  console.log("\n\n\nHELLO I'M HERE!\n\n\n");
  console.log(Pet);

  Pet
    .findAll({raw: true})
    .then(pets => {
      if (pets.status === 200) { res.render('pets-index', { pets: pets }) }
    })
    .catch(err => {
      if (err) { res.json(err) }
    });
});

// pagination
// router.get('/:page', (req, res) => {
//   let limit = 50;   // number of records per page
//   let offset = 0;

//   db.user
//     .findAndCountAll()
//     .then((data) => {
//       let page = req.params.page;      // page number
//       let pages = Math.ceil(data.count / limit);
      
//       offset = limit * (page - 1);
//       db.user.findAll({
//         attributes: ['id', 'first_name', 'last_name', 'date_of_birth'],
//         limit: limit,
//         offset: offset,
//         $sort: { id: 1 }
//       }).then((users) => {
//         res.status(200).json({'result': users, 'count': data.count, 'pages': pages});
//       });
//     })
//     .catch((error) => {
// 		  res.status(500).send('Internal Server Error');
// 	});
// });

module.exports = router;

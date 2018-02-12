/* ================================================================================================= */ 
/* =================================== INITIALIZERS/DECLARATIONS =================================== */
/* ================================================================================================= */


const express = require('express');						// Initialize Express
const router = express.Router();						// Instantiate Express as Router

const Pet = require('../db/models').Pet;				// Require Pet model


/* ================================================================================================= */ 
/* ========================================= RESTFUL ROUTES ======================================== */
/* ================================================================================================= */


/* GET home page. */
router.get('/', (req, res) => {
  	Pet.findAll( /* {
		where: {
			$or: [
				{
					title: {
						$iLike: `%${req.query.term}%`
					}
				},
				{
					body: {
						$iLike: `%${req.query.term}%`
					}
				}
			]
		}
	} */ ).then(pets => {
    	res.render('pets-index', { pets: pets, term: req.query.term })
  	})
  	.catch(err => { if (err) { console.error(err) } });
});


// SIMPLE SEARCH BY QUERY
// models.Post.findAll({
// 	where: {
// 	  $or: [ 
// 		{
// 		  title: {
// 			$iLike: "%" + req.query.term + "%"
// 		  }
// 		},
// 		{
// 		  body: {
// 		$iLike: "%" + req.query.term + "%"
// 		  }
// 			}
// 	  ]
// 	}
//   }).then((posts) => {
// 		  res.render('index', { posts: posts, term: req.query.term })
//   })

// PAGINATION
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

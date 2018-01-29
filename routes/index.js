const express = require('express');
const router = express.Router();

let pets = require('../json/pets')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pets-index', { pets: pets });
});

// pagination
router.get('/:page', (req, res) => {
  let limit = 50;   // number of records per page
  let offset = 0;

  db.user
    .findAndCountAll()
    .then((data) => {
      let page = req.params.page;      // page number
      let pages = Math.ceil(data.count / limit);
      
      offset = limit * (page - 1);
      db.user.findAll({
        attributes: ['id', 'first_name', 'last_name', 'date_of_birth'],
        limit: limit,
        offset: offset,
        $sort: { id: 1 }
      }).then((users) => {
        res.status(200).json({'result': users, 'count': data.count, 'pages': pages});
      });
    })
    .catch((error) => {
		  res.status(500).send('Internal Server Error');
	});
});

module.exports = router;

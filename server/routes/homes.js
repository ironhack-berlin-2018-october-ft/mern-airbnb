const express = require('express');
const Home = require('../models/Home')
const { isLoggedIn } = require('../middlewares')

const router = express.Router();

router.get('/', (req, res, next) => {
  Home.find()
  .populate('_owner', 'username') // Populate on the field 'username' and '_id' (default) ==> avoid displaying the hash password that could be a security issue
    .then(homes => {
      res.json(homes);
    })
    .catch(err => next(err))
});

router.post('/', isLoggedIn, (req, res, next) => {
  let { title, description, pricePerNight, lng, lat } = req.body
  let _owner = req.user._id
  if (!title || !description || !pricePerNight || !lng || !lat) {
    next(new Error('You have to send: title, description, pricePerNight, lng, lat'))
  }
  Home.create({
    title,
    description,
    pricePerNight,
    location: {
      type: 'Point',
      coordinates: [lng, lat]
    },
    _owner
  })
    .then(home => {
      res.json({
        success: true,
        home
      });
    })
    .catch(err => next(err))
});

module.exports = router;

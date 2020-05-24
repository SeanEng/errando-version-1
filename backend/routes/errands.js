const router = require('express').Router();
let Errands = require('../models/errands.model');

router.route('/').get((req, res) => {
  Errands.find()
    .then(errands => res.json(errands))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newErrands = new Errands({
    username,
    description,
    duration,
    date,
  });

  newErrands.save()
  .then(() => res.json('Errand added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Errands.findById(req.params.id)
    .then(errands => res.json(errands))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Errands.findByIdAndDelete(req.params.id)
    .then(() => res.json('Errand deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Errands.findById(req.params.id)
    .then(errands => {
      errands.username = req.body.username;
      errands.description = req.body.description;
      errands.duration = Number(req.body.duration);
      errands.date = Date.parse(req.body.date);

      errands.save()
        .then(() => res.json('Errand updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
// assets.route.js

const express = require('express');

const assetsRoutes = express.Router();

// Require assets model in our routes module
const Assets = require('./assets.model');

// Defined store route
assetsRoutes.route('/add').post((req, res) => {
  const assets = new Assets(req.body);
  assets.save()
    .then((assets) => {
      res.status(200).json({ assets: 'assets added successfully' });
    })
    .catch((err) => {
      res.status(400).send('unable to save to database');
    });
});

// Defined get data(index or listing) route
assetsRoutes.route('/').get((req, res) => {
  Assets.find((err, assets) => {
    if (err) {
      console.log(err);
    } else {
      res.json(assets);
    }
  });
});

// Defined edit route
assetsRoutes.route('/edit/:id').get((req, res) => {
  const id = req.params.id;
  Assets.findById(id, (err, assets) => {
    res.json(assets);
  });
});

//  Defined update route
assetsRoutes.route('/update/:id').post((req, res) => {
  Assets.findById(req.params.id, (err, assets) => {
    if (!assets) res.status(404).send('data is not found');
    else {
      assets.createrName = req.body.createrName;
      assets.assetName = req.body.assetName;
      assets.assetNumber = req.body.assetNumber;

      assets.save().then((assets) => {
        res.json('Update complete');
      })
        .catch((err) => {
          res.status(400).send('unable to update the database');
        });
    }
  });
});

// Defined delete | remove | destroy route
assetsRoutes.route('/delete/:id').get(function (req, res) {
  Assets.findByIdAndRemove({_id: req.params.id}, function(err, business){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

module.exports = assetsRoutes;

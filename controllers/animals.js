// IMPORT DEPENDENCIES
const express = require('express');
const router = express.Router();
const Animals = require('../models/animals');

// ROUTES

// INDEX - GET - SHOWS ALL ANIMALS
router.get('/animal', async (req, res) => {
    const animals = await Animals.find({});
    res.render("index.ejs", {animals})
});

// NEW - GET - RENDER FORM TO ADD AN ANIMAL
router.get('/animal/new', (req, res) => {
    res.render('new.ejs')
});

// DESTROY - DELETE - DELETE AN ANIMAL
router.delete('/animal/:id', async (req, res) => {
    const id = req.params.id    
    await Animals.findByIdAndDelete(id)
      res.redirect('/animal')
});

// UPDATE - PUT - UPDATE AN ANIMAL
router.put('/animal/:id', async (req, res) => {
   const id = req.params.id
   req.body.extinct = req.body.extinct === "on" ? true : false
    await Animals.findByIdAndUpdate(id, req.body)
   res.redirect('/animal')
});

// CREATE - POST - CREATE AN ANIMAL
router.post('/animal', async (req, res) => {
  req.body.extinct = req.body.extinct === "on" ? true : false
    await Animals.create(req.body)
  res.redirect("/animal")
});

// EDIT - GET - RENDER FORM TO EDIT AN ANIMAL
router.get('/animal/:id/edit', async (req, res) => {
    const id = req.params.id
    const animal = await Animals.findById(id)
    res.render('edit.ejs', {animal, id})
});

// SHOW - GET - SHOWS ONE ANIMAL
router.get('/animal/:id', async (req, res) => {
    const id = req.params.id
    const animal = await Animals.findById(id)
    console.log(animal)
    const extinctClass = animal.extinct ? "yes" : "no"
    res.render("show.ejs", {animal, extinctClass, id})
});

// EXPORT ROUTER
module.exports = router
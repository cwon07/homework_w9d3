const express = require('express');
const AnimalModel = require('../models/animal');
const router = express.Router();

// INDEX
router.get('/animal', async (req, res) => {
    const list = await AnimalModel.find();
    res.send(list)
    console.log(`welcome`)
});

// SHOW
router.get('/animal/:id', async (req, res) => {
    const oneAnimal = await AnimalModel.findById(req.params.id);
    res.send(oneAnimal)
});


router.get('/animal/:id', async (req, res) => {
    try {
        const oneAninmal = await AnimalModel.findById(req.params.id);
        res.send(oneAnimal)
    }catch {
        res.status(400).send('error')
    } 
})

// CREATE
router.post('./animal/:id', async (req, res) => {
    try{
        const addedAnimal = await AnimalModel.create(req.body);
        res.send(addAnimal)
    }catch {
        res.status(400).send('error')
    }
})

// DELETE 
router.delete('/animal/:id', async (req, res) => {
    try{
        await AnimalModel.findByIdAndDelete(req.params.id)
        res.send('deleted')
    }catch {
        res.status(400).send('error')
    }
})

// UPDATE 
router.put('/animal/:id', async (req, res) => {
    try{
        await AnimalModel.findByIdAndDelete(req.params,id, req.body)
        res.send('updated')
    }catch {
        res.status(400).send('error')
    }
})
module.exports = router
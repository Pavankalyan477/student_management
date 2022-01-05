
const express = require('express');
const router = express.Router();

const Contest = require("../models/contest.model");

router.get("/contest", async (req, res) => {
    let contest = await Contest.find().lean().exec();
  
    return res.status(200).send({ contest });
});

router.get('/contest/:id', async (req, res) => {
    let contest = await Contest.findById(req.params.id).lean().exec();
    return res.status(200).send({ contest });
});

router.post("/contest", async (req, res) => {
    let contest = await Contest.create(req.body);
    return res.status(201).send({contest});
});

router.patch("/contest/:id", async (req, res) => {
    let contest = await Contest.findByIdAndUpdate(req.params.id, req.body, {new : true});
    return res.status(200).send({contest})
})

module.exports = router;
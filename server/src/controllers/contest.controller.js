
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
router.delete("/:id", async (req, res) => {
    const contest  = await Contest.findByIdAndDelete(req.params.id).lean().exec(); 
    return res.status(204).send({contest})
})

router.get("/contest/sortByDeadline", async (req, res) => {
    const contest = await Contest.find().sort({deadline : 1}).lean().exec();
    return res.status(200).send({contest})
})

router.get("/contest/type/dsa", async (req, res) => {
    const contest = await Contest.find({type : "dsa"}).lean().exec();
    return res.status(200).send({contest})
})

router.get("/contest/type/coding", async (req, res) => {
    const contest = await Contest.find({type: "coding"}).lean().exec();
    return res.status(200).send({contest})
})

module.exports = router;
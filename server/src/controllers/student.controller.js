const express = require('express');
const router = express.Router();

const Student = require("../models/student.model");

router.get("/student", async (req, res) => {
    let student = await Student.find().lean().exec();
  
    return res.status(200).send({ student });
});

router.get('/student/:id', async (req, res) => {
    let student = await Student.findById(req.params.id).lean().exec();
    return res.status(200).send({ student });
});

router.post("/student", async (req, res) => {
    let student = await Student.create(req.body);
    return res.status(201).send({student});
});

router.patch("/student/:id", async (req, res) => {
    let student = await Student.findByIdAndUpdate(req.params.id, req.body, {new : true});
    return res.status(200).send({student})
})

module.exports = router;
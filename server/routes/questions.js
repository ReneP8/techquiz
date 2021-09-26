const express = require('express');
const router = express.Router();
const Question = require('../models/question.model');

router.get('/', async(req, res) => {
    try {
        const allQuestions = await Question.find();
        res.json(allQuestions);
    } catch (error) {
        console.log(error);
    }
});

router.get('/random', async(req, res) => {
    try {
        const randomQuestion = await Question.findOne();
        res.json(randomQuestion);
    } catch (error) {
        console.log(error);
    }
});

router.post('/', async(req, res) => {
    const question = new Question({
        question: req.body.question,
        answer: req.body.answer
    });

    try {
        const created = await question.save();
        res.json(created);
    } catch (error) {
        res.json({ message: err });
    }
});

module.exports = router;
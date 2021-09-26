const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const questionModel = require('./models/question.model').default;

const app = express();
app.use(morgan('common'));
app.use(cors({
    origin: "http://localhost:3000",
}));
mongoose.connect('mongodb://localhost:27017/techquizz');

app.get('/api/questions/random', async(req, res) => {
    try {
        const question = await questionModel.findOne();
        res.json(question);
    } catch (error) {
        console.log(error);
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const questionRoute = require('./routes/questions');
const app = express();

// enable middleware
app.use(morgan('common'));
app.use(cors({
    origin: "http://localhost:3000",
}));
app.use(express.json());
app.use(helmet());

// connect to database
mongoose.connect('mongodb://localhost:27017/techquizz');

// enable routes
app.use('/api/questions', questionRoute);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
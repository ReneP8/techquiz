const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
}, { collection: 'questions' });

module.exports = mongoose.model('Questions', QuestionSchema);
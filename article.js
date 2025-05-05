const mongoose = require('mongoose');

const articlemodel = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String },
    date: { type: Date, default: Date.now },
    special: { type: Boolean },
    resume: {
        content: { type: String },
        author: { type: String }
    }
});

module.exports = articlemodel;
const mongoose = require('mongoose');
const { type } = require('os');
const articlemodel = new mongoose.Schema({
    title: {
        type: String,
        author: String,
        body: String,
        date: {type: Date, default: Date.now},
        special: Boolean,
        resume: {
            content: {
                type: String,
                author: String
            }
        }
    }
});

module.exports = articlemodel;
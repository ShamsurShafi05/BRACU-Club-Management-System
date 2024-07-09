const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    tagline: {
        type: String,
        required:true
    },
    organizer:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    highlights: [{
        type: String, 
        required: false
    }],
    faq: [{
        question: {
            type: String
        },
        answer: {
            type: String
        }
    }],
    like: {
        type: Number,
        default: 0
    },
    approval: {
        type: Number,
        default: 2          // consider as not approved
    },
    link:{
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('Event', eventSchema);

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    copiesAvailable: {
        type: Number,
        required: true,
        default: 1,
        min: 0
    },
    totalCopies: {
        type: Number,
        required: true,
        default: 1
    },
    description: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
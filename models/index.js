const { model, Schema } = require('mongoose')

const Question = require('./Question.js')(model, Schema)

module.exports = {Question}
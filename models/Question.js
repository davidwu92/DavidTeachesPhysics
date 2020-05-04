module.exports = (model, Schema) =>{
  const Question = new Schema({
    question: String,
    topic: String,
    answered: Boolean,
    answer: String,
    createdAt: {type: Date, default: Date.now}
  })
  Question.index({question: 'text'})

  return model('Question', Question)
}
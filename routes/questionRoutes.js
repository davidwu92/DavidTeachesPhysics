const {Question} = require('../models')

module.exports = app => {
  //get all questions.
  app.get('/questions', (req, res)=>{
    Question.find({})
      .then(data=>res.json(data))
      .catch(e=>console.error(e))
  })
}
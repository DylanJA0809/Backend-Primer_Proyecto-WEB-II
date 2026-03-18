const Answer = require("../models/answer");

const answerPost = async (req, res) => {
  try {
    const answer = new Answer({
      id_question: req.body.id_question,
      id_user: req.user.id,
      message: req.body.message
    });

    const saved = await answer.save();

    res.status(201).json(saved);

  } catch (err) {
    console.log(err);
    res.status(422);
  }
};

const answerGet = async (req, res) => {
  try {

    if (req.query.id_question) {//by question
      const answers = await Answer.find({
        id_question: req.query.id_question
      });

      return res.status(200).json(answers);
    }

    if (req.query.id_user) {//by user
      const answers = await Answer.find({
        id_user: req.query.id_user
      });

      return res.status(200).json(answers);
    }

    const answers = await Answer.find();//all

    res.status(200).json(answers);

  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

module.exports = {
  answerPost,
  answerGet
};
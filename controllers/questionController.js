const Question = require("../models/question");

const questionPost = async (req, res) => {
  try {
    const question = new Question({
      id_vehicle: req.body.id_vehicle,
      id_user: req.user.id,
      message: req.body.message
    });

    const saved = await question.save();

    res.status(201).json(saved);

  } catch (err) {
    console.log(err);
    res.status(422);
  }
};


const questionGet = async (req, res) => {
  try {

    if (req.query.id_vehicle) {//by vehicle
      const questions = await Question.find({
        id_vehicle: req.query.id_vehicle
      });

      return res.status(200).json(questions);
    }

    if (req.query.id_user) { //by user
      const questions = await Question.find({
        id_user: req.query.id_user
      });

      return res.status(200).json(questions);
    }

    const questions = await Question.find(); //all

    res.status(200).json(questions);

  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

module.exports = {
  questionPost,
  questionGet
};
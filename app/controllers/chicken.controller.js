const db = require("../models");
const Chicken = db.chickens;
const Op = db.Sequelize.Op;
const Sequelize = require("sequelize");
const {
  BadRequestError,
	UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  InternalServerError,
  sendErrorResponse } = require('../utils/error');

exports.create = (req, res) => {
  console.log(req)
  try {
    if (!req.body.name || !req.body.weight)
      throw new BadRequestError("Request is invalid");

    const chicken = {
      name: req.body.name,
      weight: req.body.weight,
    };

    Chicken.create(chicken)
      .then(data => {
        res.status(201).send(data);
      })

  } catch (err) {
    sendErrorResponse(res, err)
  }
};

exports.findAll = (req, res) => {

  Chicken.findAll()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      sendErrorResponse(res, err)
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Chicken.findByPk(id)
    .then(data => {
      if(!data)
        throw new NotFoundError("Chicken not found");
      res.status(200).send(data)
    })
    .catch(err => {
      sendErrorResponse(res, err)
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Chicken.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num != 1)
        throw new NotFoundError("Chicken not found");
      res.status(200).send({
        message: "Chicken was updated successfully."
      });
    })
    .catch(err => {
      sendErrorResponse(res, err)
    });
};

exports.run = (req, res) => {
  const id = req.params.id;

  Chicken.update(
    {isRunning: true, steps: Sequelize.literal('steps + 1')},
    {where: { id: id }
  })
    .then(num => {
      if (num != 1)
        throw new NotFoundError("Chicken not found");
      res.status(200).send({
        message: "Chicken was updated successfully."
      });
    })
    .catch(err => {
      sendErrorResponse(res, err)
    });
};


exports.delete = (req, res) => {
  const id = req.params.id;

  Chicken.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num != 1)
        throw new NotFoundError("Chicken not found");
      res.sendStatus(204);
    })
    .catch(err => {
      sendErrorResponse(res, err)
    });
};

exports.deleteAll = (req, res) => {
  Chicken.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.sendStatus(204);
    })
    .catch(err => {
      sendErrorResponse(res, err)
    });
};
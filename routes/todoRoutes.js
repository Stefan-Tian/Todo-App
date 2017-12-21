const mongoose = require("mongoose");
const _ = require("lodash");
const requireLogin = require("../middlewares/requireLogin");

const Todo = mongoose.model("Todo");

module.exports = app => {
  app.post("/api/todos", requireLogin, (req, res) => {
    const { title, text } = req.body;
    const todo = new Todo({
      title,
      text,
      _user: req.user.id
    });

    todo.save().then(doc => res.send(doc), e => res.status(400).send(e));
  });

  app.get("/api/todos", requireLogin, (req, res) => {
    Todo.find({ _user: req.user.id }).then(
      todos => res.send({ todos }),
      e => res.status(400).send(e)
    );
  });

  app.get("/api/todos/:id", requireLogin, (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Todo.findOne({
      _id: id,
      _user: req.user.id
    }).then(
      todo => {
        if (todo) {
          return res.send({ todo });
        }

        res.status(404).send();
      },
      e => res.status(400).send(e)
    );
  });

  app.delete("/api/todos/:id", requireLogin, (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send("ID not found");
    }

    Todo.findOneAndRemove({
      _id: id,
      _user: req.user.id
    }).then(
      todo => {
        if (todo) {
          return res.send({ todo });
        }

        res.status(404).send();
      },
      e => res.status(400).send(e)
    );
  });

  app.patch("/api/todos/:id", requireLogin, (req, res) => {
    const id = req.params.id;
    const body = _.pick(req.body, ["title", "text", "completed"]); // limited items that can be updated

    if (!ObjectID.isValid(id)) {
      return res.status(404).send("Invalid ID");
    }

    if (_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
    } else {
      body.completed = false;
      body.completedAt = null;
    }

    Todo.findOneAndUpdate(
      {
        _id: id,
        _user: req.user.id
      },
      {
        $set: body
      },
      {
        new: true
      }
    )
      .then(todo => {
        if (!todo) {
          return res.status(404).send();
        }

        res.send({ todo });
      })
      .catch(e => res.status(404).send(e));
  });
};

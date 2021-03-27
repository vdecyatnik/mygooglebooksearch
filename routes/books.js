const Router = require("express").Router;

const router = Router();

const { Book } = require("../models");

router.post("/books", (req, res) => {
  console.log(req.body);
  const { title, authors, description, image, link } = req.body;

  Book.create({
    title,
    authors,
    description,
    image,
    link,
  })
    .then((newBook) => console.log(newBook))
    .catch((err) => console.log(err));

  res.json({ did: true });
});

module.exports = router;

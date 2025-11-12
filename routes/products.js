const express = require("express");
const router = express.Router();

let products = [
  { id: 1, name: "T-shirt", price: 299 },
  { id: 2, name: "Hoodie", price: 799 }
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;

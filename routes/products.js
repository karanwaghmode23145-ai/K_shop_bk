const express = require("express");
const router = express.Router();

let products = [
  { id: 1, name: "T-shirt", price: 299 },
  { id: 2, name: "Hoodie", price: 799 }
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

router.post("/", (req, res) => {
  const { name, price } = req.body;
  if (!name || typeof price !== "number")
    return res.status(400).json({ error: "Invalid data" });

  const newProduct = { id: Date.now(), name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;


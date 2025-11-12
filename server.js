// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const productsRouter = require("./routes/products");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express Backend (Vercel ready)" });
});

app.use("/api/products", productsRouter);

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
}

module.exports = app;

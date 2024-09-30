import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Trabalho Py Computação em Nuvem");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

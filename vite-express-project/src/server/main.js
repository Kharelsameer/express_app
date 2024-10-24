import express from "express";
import ViteExpress from "vite-express";
import { students } from "./data";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to express app!");
});

app.get('/students', (req, res) =>{
  res.json({
    data: students
  })
});

app.get('/students/:id', (req, res) => {
  const id = req.params.id;
  const student = students.find(student => student.id == id);

  if(student) {
    return res.json({data: student});
  }
  else {
    return res.status(404).json({error})
  }
  console.log();

  res.json({id});
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);

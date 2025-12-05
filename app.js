import express from "express";
import createHomePage from "./views/index.js";
import createFormForData from "./views/add.js";
import data from "./data/EMPLOYEE_DATA.js";
import createTableData from "./views/create.js";
const app = express();
const PORT = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // for HTML forms
app.use(express.json());
app.get("/", (req, res) => {
  res.send(createHomePage());
});

app.get("/employee", (req, res) => {
  res.send(createFormForData());
});
app.post("/employee", (req, res) => {
  const { name, position, salary } = req.body;
  const id = Date.now();
  data.push({ name, position, salary, id });
  res.send(createTableData(data[data.length - 1]));
});

app.listen(PORT, () => {
  console.log(`server is running in this port ${PORT}`);
});

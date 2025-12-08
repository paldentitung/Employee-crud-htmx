import express from "express";
import createHomePage from "./views/index.js";
import createFormForData from "./views/add.js";
import data from "./data/EMPLOYEE_DATA.js";
import createTableData from "./views/create.js";
import createEditForm from "./views/edit.js";
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

app.get("/employee/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const emp = data.find((e) => e.id === id);

  res.send(createEditForm(emp));
});
app.put("/employee/:id", (req, res) => {
  const { name, position, salary } = req.body;
  const id = parseInt(req.params.id);

  const findIndex = data.findIndex((e) => e.id === id);

  if (findIndex === -1) {
    res.status(404).json({ message: "Not Found" });
  }

  data[findIndex] = {
    ...data[findIndex],
    name: name,
    position: position,
    salary: salary,
  };

  res.send(createTableData(data[findIndex]));
});

app.delete("/employee/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const empIndex = data.findIndex((e) => e.id === id);
  if (empIndex === -1) {
    res.status(404).json({
      message: "not Found",
    });
  }

  // const filterData = data.filter((e) => e.id !== empIndex);

  data.splice(empIndex, 1);

  res.send(`<tr id="row-${id}"></tr>`);
});
app.listen(PORT, () => {
  console.log(`server is running in this port ${PORT}`);
});

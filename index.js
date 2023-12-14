import express from "express";
import cors from "cors";

const app = express();
app.use(express.json()); // Add this line to enable JSON parsing middleware
app.use(cors());

// store todo in this array of objects
var todos = [
  {
    task: 1,
    value: "Work on Project",
  },
  {
    task: 2,
    value: "meeting at 10 am",
  },
];

app.get("/get", (req, res) => {
  return res.json({ data: todos }); // Fix: Use res.json instead of json
});

app.post("/post", (req, res) => {
  const newTodo = req.body.value; // Fix: Use req.body.value to get the value from the request body
  todos.push({
    task: todos.length + 1, // Assign a new task number
    value: newTodo,
  });
  return res.status(200).json({ message: "New Task is added" });
});

app.delete("/delete", (req, res) => {
  const task = req.body.task;
  var newTodos = todos.filter((todo) => todo.task != task);
  todos = newTodos;
  return res.status(200).json({ message: "Task Deleted" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

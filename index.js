import express from "express";
import cors from "cors";

const app = express();
app.use(express.json()); // Add this line to enable JSON parsing middleware
app.use(cors());

// store todo in this array of objects
const todos = [
  {
    task: 1,
    value: "Work on Project"
  },
  {
    task: 2,
    value: "meeting at 10 am"
  }
];

app.get("/get", (req, res) => {
  return res.json(todos); // Fix: Use res.json instead of json
});

app.post("/post", (req, res) => {
  console.log("inside post api");
  const newTodo = req.body.value; // Fix: Use req.body.value to get the value from the request body
  todos.push({
    task: todos.length + 1, // Assign a new task number
    value: newTodo
  });
  return res.status(200).json({ message: "New Task is added" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

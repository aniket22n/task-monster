function Display({ todos }) {
  async function handleDelete(task) {
    const response = await fetch("http://localhost:3000/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: task,
      }),
    });
  }

  return (
    <div>
      {todos &&
        todos.map((task) => {
          return (
            <div
              key={task.task}
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <h4>{task.value}</h4>
              <button
                type="button"
                style={{ height: "30px", width: "50px" }}
                onClick={() => {
                  handleDelete(task.task);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default Display;

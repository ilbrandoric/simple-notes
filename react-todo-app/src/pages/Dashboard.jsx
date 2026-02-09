import { useState } from "react";
import TaskList from "../components/tasks/TaskList.jsx";

function Dashboard({ tasks, deleteTask, createTask, updateTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    createTask(title);
    setTitle("");
  }

  return (
    <div>
      <div className="dashboard-header">
        <h1>Clean ToDo</h1>
        <button className="primary">Add new</button>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task"
        />
        <button>Add</button>
      </form>

      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default Dashboard;

import { useState, useRef } from "react";
import TaskList from "../components/tasks/TaskList.jsx";

function Dashboard({ tasks, deleteTask, createTask, updateTask }) {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    createTask(title);
    setTitle("");
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>simple-tasks</h1>
      </div>

      <form className="task-input" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task"
        />
        <button type="submit" className="icon-button primary">
          ✚
        </button>
      </form>

      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default Dashboard;

import { useState, useRef } from "react";
import TaskList from "../components/tasks/TaskList.jsx";

function Dashboard({ tasks, deleteTask, createTask, updateTask }) {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null);
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    createTask(title);
    setTitle("");
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Clean ToDo</h1>
        <button
          type="button"
          className="primary"
          onClick={() => {
            if (!title.trim()) {
              inputRef.current?.focus();
            } else {
              formRef.current?.requestSubmit();
            }
          }}
        >
          Add new
        </button>
      </div>

      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
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

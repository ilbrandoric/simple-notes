import { useState, useRef } from "react";

function Dashboard({
  tasks,
  deleteTask,
  createTask,
  updateTask,
  updateTaskText
}) {
  const [title, setTitle] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editText, setEditText] = useState("");
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    createTask(title);
    setTitle("");
    inputRef.current?.focus();
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1></h1>
      </div>

      {/* CREATE TASK */}
      <form className="task-input" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task"
        />
        <button type="submit" className="icon-button primary">
          ✚
        </button>
      </form>

      {/* TASK LIST WITH INLINE EDIT */}
      <div className="task-list">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="task-item"
            style={{ display: "flex", gap: "0.5rem", alignItems: "center", padding: "0.5rem", minHeight: "40px" }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => updateTask(task.id)}
            />

            {editingTaskId === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{ flex: 1, padding: "0.25rem", minWidth: "200px", visibility: "visible", opacity: 1 }}
                  autoFocus
                />
                <button
                  className="icon-button"
                  onClick={() => {
                    if (!editText.trim()) return;
                    updateTaskText(task.id, editText);
                    setEditingTaskId(null);
                  }}
                  style={{ cursor: "pointer", visibility: "visible", opacity: 1, pointerEvents: "auto" }}
                >
                  💾
                </button>
              </>
            ) : (
              <>
                <span
                  style={{
                    flex: 1,
                    textDecoration: task.completed ? "line-through" : "none",
                    opacity: task.completed ? 0.6 : 1
                  }}
                >
                  {task.task}
                </span>

                <button
                  className="icon-button"
                  onClick={() => {
                    setEditingTaskId(task.id);
                    setEditText(task.task);
                  }}
                  style={{ cursor: "pointer", pointerEvents: "auto" }}
                >
                  ✎
                </button>
              </>
            )}

            <button
              className="icon-button danger"
              onClick={() => deleteTask(task.id)}
            >
              −
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

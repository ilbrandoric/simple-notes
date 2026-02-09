import { Link } from "react-router-dom";

function TaskCard({ task, deleteTask, updateTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => updateTask(task.id)}
      />

      <Link to={`/tasks/${task.id}`}>
        <div className="task-text">
          <strong>{task.title}</strong>
          <span>This is a task description</span>
        </div>
      </Link>

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskCard;

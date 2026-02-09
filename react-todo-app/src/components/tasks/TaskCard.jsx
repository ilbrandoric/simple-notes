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
        {task.title}
      </Link>

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskCard;

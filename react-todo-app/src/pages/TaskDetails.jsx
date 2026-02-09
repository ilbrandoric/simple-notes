import { useParams } from "react-router-dom";

function TaskDetails({ tasks, updateTask }) {
  const { id } = useParams();

  const task = tasks.find(
    (task) => task.id === Number(id)
  );

  if (!task) {
    return <h1>Task not found</h1>;
  }

  return (
    <div>
      <h1>Task Details</h1>

      <p>{task.title}</p>
      <p>
        Completed: {task.completed ? "Yes" : "No"}
      </p>

      <button onClick={() => updateTask(task.id)}>
        Toggle Complete
      </button>
    </div>
  );
}

export default TaskDetails;

import TaskCard from "./TaskCard";

// Renders one task (TaskCard)

function TaskList({ tasks, deleteTask, updateTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;

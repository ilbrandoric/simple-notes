import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import tasksData from "./data/tasks.json";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function createTask(title) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function updateTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Dashboard
              tasks={tasks}
              deleteTask={deleteTask}
              createTask={createTask}
              updateTask={updateTask}
            />
          }
        />

        <Route
          path="tasks/:id"
          element={
            <TaskDetails
              tasks={tasks}
              updateTask={updateTask}
            />
          }
        />

        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

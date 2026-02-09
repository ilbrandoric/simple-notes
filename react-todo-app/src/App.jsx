import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import tasksData from "./data/tasks.json";
import Navbar from "./components/tasks/Navbar";
import Footer from "./components/Footer";

function App() {
  // Initialize state from JSON + add IDs safely
  const initialTasks = tasksData.map((task, index) => ({
    id: index + 1,
    ...task,
  }));

  const [tasks, setTasks] = useState(initialTasks);

  // Delete task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Create task (matches JSON structure)
  function createTask(taskText) {
    const newTask = {
      id: Date.now(),
      task: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  // Toggle completed
  function updateTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // ✅ REQUIRED: update task TEXT (inline edit support)
  function updateTaskText(id, newText) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, task: newText }
          : task
      )
    );
  }

  return (
    <>
      <Navbar />

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
                updateTaskText={updateTaskText}
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

      <Footer />
    </>
  );
}

export default App;

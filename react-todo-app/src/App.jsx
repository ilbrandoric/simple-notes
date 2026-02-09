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
  // Step 2: initialize state from JSON + add IDs safely
  const initialTasks = tasksData.map((task, index) => ({
    id: index + 1,
    ...task
  }));

  const [tasks, setTasks] = useState(initialTasks);

  // Step 5: delete task
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Step 4: create task (match JSON structure)
  function createTask(taskText) {
    const newTask = {
      id: Date.now(),
      task: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  // Step 4: update task (toggle completed)
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

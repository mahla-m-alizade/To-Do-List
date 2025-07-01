import "./App.css";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { Main, PageNotFound } from "./pages";
import { useState, useEffect } from "react";
function App() {
  const [task, setTask] = useState(null);
  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem("taskList");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App p-4 md:p-20 ">
      <div className="p-0 md:p-5 bg-white rounded-lg border border-green1 ">
        <Header
          taskList={taskList}
          setTaskList={setTaskList}
          task={task}
          setTask={setTask}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                taskList={taskList}
                setTaskList={setTaskList}
                task={task}
                setTask={setTask}
              />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

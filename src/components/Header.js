import { useState } from "react";
export const Header = ({ taskList, setTaskList, task, setTask }) => {
  const [newTaskValue, setNewTaskValue] = useState("");
  const Handlesub = (event) => {
    event.preventDefault();
    if (task) {
      console.log(task);
      const newtaskList = taskList.map((el) =>
        el.date === task.date
          ? {
              task: task.task,
              checked: task.checked,
              date: new Date().toLocaleString(),
              pinned: task.pinned,
            }
          : el
      );
      setTaskList(newtaskList);
      setTask(null);
      setNewTaskValue("");
    } else {
      const newTask = {
        task: event.target.addTask.value,
        checked: false,
        date: new Date().toLocaleString(),
        pinned: false,
      };
      setTaskList([...taskList, newTask]);
      setNewTaskValue("");
    }
  };

  return (
    <header className="justify-center ">
      <p className="text-3xl font-bold flex justify-center text-green-900 ">
        To Do List
      </p>

      <form className="p-6" onSubmit={Handlesub}>
        <div className="relative ">
          <input
            type="text"
            name="addTask"
            value={task?.task ?? newTaskValue}
            onChange={(e) => {
              task
                ? setTask((prev) => ({ ...prev, task: e.target.value }))
                : setNewTaskValue(e.target.value);
            }}
            className="block w-full p-4  text-sm text-gray-900 border border-green1 rounded-lg  bg-yellow1 focus:ring-2 focus:ring-green2 
            focus:outline-none focus:border-green2 "
            placeholder="add your task"
            required
          />
          <button
            type="submit"
            className="text-gray-700 absolute w-14 md:w-20 end-2.5 bottom-2.5 bg-green1 hover:bg-green2 focus:ring-2 focus:outline-none focus:ring-green2 font-medium rounded-lg text-sm px-4 py-2 "
          >
            {task ? "Edit" : "Add"}
          </button>
        </div>
      </form>
    </header>
  );
};

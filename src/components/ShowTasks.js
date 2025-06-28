import { useEffect } from "react";
import { Edit, Pin, Remove } from "../ShowTasksButtons";
export const ShowTasks = ({
  taskList,
  setTaskList,
  filterStatus,
  searchStatus,
  setTask,
  isSort,
}) => {
  // ///////
  const toggleCheck = (index) => {
    const updated = [...taskList];
    updated[index].checked = !updated[index].checked;
    setTaskList(updated);
  };

  const taskStyle = (task, id) => {
    return (
      <li
        className={`w-[96%] m-2 mt-4 py-2  bg-yellow1 border rounded-lg 
          ${task.pinned ? "border-4 border-green2 " : "border-green1"} ${
          filterStatus == "done" && !task.checked
            ? "hidden"
            : filterStatus == "remain" && task.checked
            ? "hidden"
            : ""
        }
        ${
          [...searchStatus]
            .map((item) => item.date === task.date)
            .includes(true)
            ? ""
            : "hidden"
        } `}
        key={id}
      >
        <div className="flex items-center ps-3">
          <input
            type="checkbox"
            value=""
            checked={task.checked}
            onChange={() => toggleCheck(id)}
            className="w-6 h-6 checked:bg-green2 accent-green2 text-green2 bg-yellow1 border border-green1 rounded-sm focus:ring-green2 focus:ring-1 "
          />
          <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 break-all">
            {task.task}
          </label>
          <Remove id={id} taskList={taskList} setTaskList={setTaskList} />
          <Pin
            id={id}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
            filterStatus={filterStatus}
            searchStatus={searchStatus}
            setTask={setTask}
            isSort={isSort}
          />
          <Edit
            id={id}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
            filterStatus={filterStatus}
            searchStatus={searchStatus}
            setTask={setTask}
          />
        </div>
      </li>
    );
  };
  ////////

  return (
    <div className="flex justify-center">
      <ul className="w-[90%] text-sm font-medium text-green2 bg-yellow-50/40 border border-green1 rounded-b-lg p-3  justify-center">
        {[...taskList]
          .reverse()
          .map((task, index) =>
            taskStyle(task, [...taskList].length - index - 1)
          )}
      </ul>
    </div>
  );
};

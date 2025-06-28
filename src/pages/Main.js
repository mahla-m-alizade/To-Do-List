import { ShowTasks, MainHead } from "../components/index";
import { useState, useEffect } from "react";

export const Main = ({ taskList, setTaskList, task, setTask }) => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchStatus, setSearchStatus] = useState("all");
  const [SortStatus, setSortStatus] = useState(false);

  return (
    <div className="min-h-[50vh] justify-center p-6">
      <MainHead
        taskList={taskList}
        setTaskList={setTaskList}
        setFilterStatus={setFilterStatus}
        setSearchStatus={setSearchStatus}
        isSort={SortStatus}
        setSort={setSortStatus}
      />
      <ShowTasks
        taskList={taskList}
        setTaskList={setTaskList}
        filterStatus={filterStatus}
        searchStatus={searchStatus}
        setTask={setTask}
        isSort={SortStatus}
        setSort={setSortStatus}
      />
    </div>
  );
};

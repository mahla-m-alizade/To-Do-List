import { ShowTasks, MainHead } from "../components/index";
import { useState, useEffect } from "react";

export const Main = ({ taskList, setTaskList, setTask }) => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [categoryFilterStatuse, setCategoryFilterStatuse] = useState("all");
  const [searchStatus, setSearchStatus] = useState("all");
  const [SortStatus, setSortStatus] = useState(false);

  return (
    <div className="justify-center p-6 min-h-[100%]">
      <MainHead
        taskList={taskList}
        setTaskList={setTaskList}
        setFilterStatus={setFilterStatus}
        setCategoryFilterStatuse={setCategoryFilterStatuse}
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
        categoryFilterStatuse={categoryFilterStatuse}
      />
    </div>
  );
};

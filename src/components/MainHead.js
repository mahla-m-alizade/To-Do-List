import {
  DeleteAll,
  Category,
  Sort,
  Filter,
  SearchBox,
} from "../MainHeadButtons";
import { useState } from "react";

export const MainHead = ({
  taskList,
  setTaskList,
  setFilterStatus,
  setCategoryFilterStatuse,
  setSearchStatus,
  isSort,
  setSort,
}) => {
  const [isHidden, setHidden] = useState(true);

  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-full font-medium text-green2 bg-yellow-50/40 border border-green1 rounded-t-lg p-2 flex items-center justify-between `}
      >
        <p
          className={`${
            !isHidden ? "hidden " : "md:flex w-[100%] md:w-[25%]"
          } ms-2 text-sm md:text-l font-bold text-green2 md:ms-5 md:text-xl `}
        >
          {taskList.length > 0 ? "you're task list" : "Enter you're task list"}
        </p>

        <div className={`flex justify-end items-center w-full`}>
          {/* Mobile Menu Button */}
          <div className="flex  ">
            <button
              onClick={() => setHidden(!isHidden)}
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center m-1 p-1  w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green2"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              isHidden ? "hidden" : ""
            } flex w-full flex-col justify-end flex-wrap md:flex md:flex-row lg:flex-nowrap items-center sm:flex-row sm:order-2 `}
          >
            <SearchBox
              taskList={taskList}
              setTaskList={setTaskList}
              setSearchStatus={setSearchStatus}
            />
            <div className=" flex my-2 items-center ">
              <DeleteAll taskList={taskList} setTaskList={setTaskList} />
              <Sort
                taskList={taskList}
                setTaskList={setTaskList}
                isSort={isSort}
                setSort={setSort}
              />
            </div>
            <div className="flex items-center ">
              <Filter
                taskList={taskList}
                setTaskList={setTaskList}
                setFilterStatus={setFilterStatus}
              />
              <Category setCategoryFilterStatuse={setCategoryFilterStatuse} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

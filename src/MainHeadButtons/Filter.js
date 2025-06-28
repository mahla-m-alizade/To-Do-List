import { useState, useEffect } from "react";

export const Filter = ({ setFilterStatus }) => {
  const [isFilter, setFilter] = useState(false);
  const [hidden, sethidden] = useState(true);

  return (
    <div className={`relative inline-block  `}>
      <button
        id="dropdownButton"
        onMouseEnter={() => sethidden(false)}
        onMouseLeave={() => sethidden(true)}
        onClick={() => {
          setFilterStatus("all");
          setFilter(false);
        }}
        className={`px-1 py-1 mr-1 w-14 h-10 md:w-20 text-xs md:px-2 md:py-2 md:mr-2 md:text-sm  font-medium text-green-900 bg-blueGreen3 border border-blueGreen3 rounded-lg hover:bg-gray hover:text-gray-800  ${
          isFilter ? "ring-4 outline-none ring-green2" : ""
        } `}
        type="button"
      >
        Filter
      </button>

      <div
        onMouseEnter={() => sethidden(false)}
        onMouseLeave={() => sethidden(true)}
        className={` ${
          hidden ? "hidden" : ""
        } absolute z-100 bg-white divide-y divide-gray-100 rounded-lg shadow-md shadow-green2`}
      >
        <ul className=" text-sm text-gray-700 ">
          <li>
            <button
              onClick={() => {
                setFilterStatus("done");
                setFilter(true);
              }}
              className={` whitespace-nowrap px-4 py-4 w-full hover:bg-green1 hover:rounded-t-lg`}
            >
              Done tasks✅
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setFilterStatus("remain");
                setFilter(true);
              }}
              className="block whitespace-nowrap px-4 py-4  w-full hover:bg-green1 hover:rounded-b-lg"
            >
              Remained tasks
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

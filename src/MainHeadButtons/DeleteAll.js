export const DeleteAll = ({ setTaskList }) => {
  const DeleteAll = () => {
    setTaskList([]);
  };
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={DeleteAll}
        className={`px-1 py-1 mr-1 h-10 w-20 text-xs md:px-2 md:py-2 md:mr-2 md:text-sm  font-medium  flex items-center justify-center text-green-900  bg-blueGreen1  md:w-20 border border-blueGreen1 rounded-lg hover:bg-red-200 hover:text-gray-800  `}
      >
        Delete All
      </button>
    </div>
  );
};

export const DeleteAll = ({ setTaskList }) => {
  const DeleteAll = () => {
    setTaskList([]);
  };
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={DeleteAll}
        className={`px-1 py-1 mr-1 w-16 h-10 md:w-20 text-xs md:px-2 md:py-2 md:mr-2 md:text-sm  font-medium text-green-900  bg-blueGreen1 w-14 h-10 md:w-20 border border-blueGreen1 rounded-lg hover:bg-red-200 hover:text-gray-800 md:text-sm md:px-2 md:py-2 md:mr-2 `}
      >
        Delete All
      </button>
    </div>
  );
};

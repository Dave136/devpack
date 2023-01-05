const SearchSpinner = () => (
  <div className="flex justify-center items-center absolute left-2">
    <div
      className="animate-spin inline-block w-5 h-5 border-4 border-t-gray-700 rounded-full"
      role="status"
    >
      <span className="visually-hidden hidden">Loading...</span>
    </div>
  </div>
);

export default SearchSpinner;

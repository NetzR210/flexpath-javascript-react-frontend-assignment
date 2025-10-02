const filterTypeOptions = [
  { value: "model", label: "Device Model" },
  { value: "gender", label: "Gender" },
  { value: "operatingSystem", label: "Operating System" },
  { value: "behaviorclass", label: "Behavior Class" }
];

const SearchForm = ({ onSearch, keyword, setKeyword, filterType, setFilterType }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch();
    }
  };

  return (
    <div className="mb-4 px-3">
      <div className="mb-3">
        <label htmlFor="filterType" className="form-label">Filter Type</label>
        <select
          id="filterType"
          className="form-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          style={{ maxWidth: "300px" }}
        >
          <option value="">Select a filter</option>
          {filterTypeOptions.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="searchInput" className="form-label">Keyword</label>
        <input
          id="searchInput"
          type="text"
          className="form-control"
          placeholder="Enter keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ maxWidth: "300px" }}
        />
      </div>

      <button className="btn btn-primary mb-2" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;

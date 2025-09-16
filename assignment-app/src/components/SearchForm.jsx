import { useContext } from 'react';
import SearchContext from '../context/SearchContext';

const SearchForm = () => {
  const { searchTerm, setSearchTerm, filterType, setFilterType } = useContext(SearchContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <div className="position-relative w-100">
      <div className="d-flex flex-wrap align-items-end gap-3" style={{ maxWidth: '100%', paddingLeft: '1rem' }}>
        <div>
          <label htmlFor="filterType" className="form-label mb-1">Filter Type</label>
          <select
            id="filterType"
            className="form-select"
            value={filterType}
            onChange={handleFilterChange}
            style={{ width: '200px' }}
          >
            <option value="">Select a filter</option>
            <option value="model">Model</option>
            <option value="os">OS</option>
          </select>
        </div>

        <div>
          <label htmlFor="searchInput" className="form-label mb-1">Keyword</label>
          <input
            id="searchInput"
            type="text"
            className="form-control"
            placeholder="Enter keyword"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: '250px' }}
          />
        </div>

        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
};

export default SearchForm;

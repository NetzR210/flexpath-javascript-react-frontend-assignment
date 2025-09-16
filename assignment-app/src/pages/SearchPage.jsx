import { useState, useContext } from 'react';
import SearchContext from '../context/SearchContext';
import MetricCards from '../components/MetricCards';
import ResultsTable from '../components/ResultsTable';

const filterTypeOptions = ['gender', 'operatingSystem', 'model', 'behaviorclass'];

const SearchPage = () => {
  const [filterType, setFilterType] = useState('');
  const [keyword, setKeyword] = useState('');

  const {
    results,
    setResults,
    status,
    setStatus,
    error,
    setError
  } = useContext(SearchContext);

  const handleSearch = async () => {
    setStatus('loading');
    setError(null);

    try {
      const query = keyword ? `?filterType=${filterType}&keyword=${keyword}` : '';
      const response = await fetch(`/api/data/search${query}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const rawData = await response.json();

      const mappedData = rawData.map((record) => ({
        user_id: record['User ID'],
        device_model: record['Device Model'],
        operating_system: record['Operating System'],
        app_usage_time: record['App Usage Time (min/day)'],
        screen_on_time: record['Screen On Time (hours/day)'],
        battery_drain: record['Battery Drain (mAh/day)'],
        apps_installed: record['Number of Apps Installed'],
        data_usage: record['Data Usage (MB/day)'],
        age: record['Age'],
        gender: record['Gender'],
        user_behavior_class: record['User Behavior Class']
      }));

      setResults(mappedData);
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  return (
    <div className="container mt-4">
      {/* Search Form */}
      <div className="d-flex flex-column align-items-start mb-4 px-2" style={{ maxWidth: '500px' }}>
        <div className="mb-3 w-100">
          <label htmlFor="filterType" className="form-label">Filter Type</label>
          <select
            id="filterType"
            className="form-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">Select a filter</option>
            {filterTypeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="mb-3 w-100">
          <label htmlFor="keyword" className="form-label">Keyword</label>
          <input
            id="keyword"
            type="text"
            className="form-control"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>

        {/* No Records Message */}
        {status === 'success' && results.length === 0 && (
          <div className="text-muted fw-bold mt-3">
            No Records To Display
          </div>
        )}
      </div>

      {/* Status Messages */}
      {status === 'loading' && (
        <div className="text-center text-muted fw-bold mt-4">
          Loading Records...
        </div>
      )}

      {status === 'error' && (
        <div className="text-danger fw-bold mb-3">
          {error}
        </div>
      )}

      {status === 'success' && results.length > 0 && (
        <p>Displaying {results.length.toLocaleString('en-US')} Records</p>
      )}

      {/*Metric Cards centered above table */}
      <div className="d-flex justify-content-center">
        <div className="w-100" style={{ maxWidth: '1100px' }}>
          <MetricCards results={results} />
        </div>
      </div>

      {/* Results Table */}
      <ResultsTable
        data={results}
        isLoading={status === 'loading'}
        error={status === 'error' ? error : null}
      />
    </div>
  );
};

export default SearchPage;

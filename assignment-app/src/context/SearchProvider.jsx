import PropTypes from 'prop-types';
import { useState } from 'react';
import SearchContext from './SearchContext';

const SearchProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('idle'); 
  const [error, setError] = useState(null);

  return (
    <SearchContext.Provider value={{ results, setResults, status, setStatus, error, setError }}>
      {children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchProvider;

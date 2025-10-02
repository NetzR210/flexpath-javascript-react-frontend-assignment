import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import { SearchPage, HomePage } from './pages/Search';
import { SearchProvider } from './context';

function App() {
  return (
    <BrowserRouter>
      <SearchProvider> {/* wraps the app to provide context */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;

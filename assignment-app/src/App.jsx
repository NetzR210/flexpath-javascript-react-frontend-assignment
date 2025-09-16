import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import Navbar from './components/Navbar';
import SearchProvider from './context/SearchProvider'; // ✅ updated import

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

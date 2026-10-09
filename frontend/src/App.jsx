
import './css/App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {

  /* App() here is essentially a container of components in itself, only handling routing and order of components */

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/saved-items"
            element={<h2>Saved Items - Coming Soon</h2>}
          />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
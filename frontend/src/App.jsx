
import './css/App.css'
import Navbar from './components/Navbar.jsx'
import {Routes, Route} from "react-router-dom"  /* want this to be able to navigate between different pages. With Routes, we can define each path, like /home, /favorites */

function App() {
  return (
    <div>
      <Navbar />
      
    </div>
  );
}

export default App

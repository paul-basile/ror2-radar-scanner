import { Link } from "react-router-dom"
import '../css/Navbar.css'
import logoImage from '../assets/Radar_Scanner.png'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={logoImage} alt="Radar Scanner" width="50px"/>
                <Link to="/">RoR2 Radar Scanner</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/saved-items" className="nav-link">View Saved Items</Link>
            </div>
        </nav>
    )
}

export default Navbar
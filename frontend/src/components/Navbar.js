import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* logo */}
        <div className="navbar_logo">
        <h2>Sticker Shopping Cart</h2>
        </div>
      {/* links */}
      <ul className="navbar__links">
        <li>
          <Link to="/cart">

          </Link>
        </li>

      </ul>

      {/* hamburger */}
    </nav>
  )
}

export default Navbar

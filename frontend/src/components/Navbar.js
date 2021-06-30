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
          <Link to="/cart" className="cart__link">
            {/* Shopping Cart Icon. Font Awesome. */}
            <i className="fas fa-shopping-cart"></i>
            <span>
            Cart
            <span className="cartlogo__badge">0</span>
            </span>

          </Link>
        </li>
        <li>
          <Link to="/">
            {/* Back to the home page. */}
            Shop
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div className="hamburger__menu">
      <div></div>
      <div className="hamburger___menu-middle"></div>
      <div></div>

      </div>
    </nav>
  )
}

export default Navbar

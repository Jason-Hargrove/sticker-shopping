import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      {/* ===== Logo ===== */}
        <div className="navbar_logo">
        <h2>Sticker Shopping Cart</h2>
        </div>
      {/* ===== Links ===== */}
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

      {/* ===== Hamburger ===== */}
      {/* Will need onClick. Must change the state in the App component. */}
      <div className="hamburger__menu" onClick={click}>
      <div></div>
      <div></div>
      <div></div>

      </div>
    </nav>
  )
}

export default Navbar

import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="nav-content">
        <img
          className="website-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />
      </div>
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/" className="nav-link">
          <li>Products</li>
        </Link>
        <Link to="/" className="nav-link">
          <li>Cart</li>
        </Link>
        <button type="button" className="logout-button">
          Logout
        </button>
      </ul>
    </nav>
    <nav className="nav-mobile-container">
      <div className="logo-logout-container">
        <img
          className="website-logo-mobile"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />
        <button type="button" className="logout-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="logout-img"
          />
        </button>
      </div>
      <div className="home-product-cart-container">
        <button type="button" className="home-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="home"
          />
        </button>
        <button type="button" className="home-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="home"
          />
        </button>
        <button type="button" className="home-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="home"
          />
        </button>
      </div>
    </nav>
  </>
)

export default Header

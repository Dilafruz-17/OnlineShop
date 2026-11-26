import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { totalCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">
          <span className="logo-dot" />
          onlineShop
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>Bosh sahifa</NavLink>
          <NavLink to="/cart" className="cart-link">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            Savat
            {totalCount > 0 && <span className="badge">{totalCount}</span>}
          </NavLink>

          {user ? (
            <>
              <span className="user-chip">
                <span className="avatar">{user.name.charAt(0).toUpperCase()}</span>
                {user.name}
              </span>
              <button className="nav-btn" onClick={handleLogout}>Chiqish</button>
            </>
          ) : (
            <NavLink to="/login">Kirish</NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}
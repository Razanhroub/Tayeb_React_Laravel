import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // حالة القائمة
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    setIsLoggedIn(false);
    closeMenu(); // إغلاق القائمة بعد تسجيل الخروج
    navigate("/login");
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <i className="fas fa-utensils me-2"></i>
          <h2>Tayeb</h2>
        </div>

        <span className="hamburger-btn" onClick={toggleMenu}>
          ☰
        </span>

        <ul className={`links ${menuOpen ? "show" : ""}`}>
         

          {isLoggedIn ? (
            <li className="nav-item">
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" onClick={closeMenu}>
                  Login
                </Link>
              </li>
              
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

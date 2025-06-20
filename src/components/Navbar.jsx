import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Responsive styles
  const navStyle = {
    background: "linear-gradient(90deg, #2c3e50 60%, #2980b9 100%)",
    color: "#fff",
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 8px rgba(44,62,80,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: '100%',
    boxSizing: 'border-box'
  };

  const linksStyle = {
    display: menuOpen ? "flex" : "flex",
    gap: "1.5rem",
    alignItems: "center",
    flexDirection: window.innerWidth <= 700 ? "column" : "row",
    position: window.innerWidth <= 700 ? "absolute" : "static",
    top: window.innerWidth <= 700 ? "60px" : undefined,
    right: window.innerWidth <= 700 ? "10px" : undefined,
    background: window.innerWidth <= 700 ? "#2c3e50" : undefined,
    padding: window.innerWidth <= 700 ? "1rem 2rem" : undefined,
    borderRadius: window.innerWidth <= 700 ? "1rem" : undefined,
    boxShadow: window.innerWidth <= 700 ? "0 2px 16px rgba(44,62,80,0.18)" : undefined,
    minWidth: window.innerWidth <= 700 ? "180px" : undefined,
    zIndex: 2000
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span style={{ fontSize: "2rem" }}>📚 Book Review</span>
        <h2 style={{ margin: 0, fontWeight: 700, letterSpacing: "1px", fontFamily: 'Segoe UI', fontSize: "1.6rem" }}>BookReview</h2>
      </div>
      {/* Hamburger for mobile */}
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        style={{
          display: window.innerWidth > 700 ? "none" : "block",
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "2rem",
          cursor: "pointer",
          marginLeft: "1rem"
        }}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✖" : "☰"}
      </button>
      <div style={{ ...linksStyle, display: window.innerWidth > 700 ? "flex" : menuOpen ? "flex" : "none" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1.1rem", transition: "color 0.2s" }} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/books" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1.1rem", transition: "color 0.2s" }} onClick={() => setMenuOpen(false)}>Books</Link>
        {user ? (
          <>
            <Link to="/profile" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1.1rem", transition: "color 0.2s" }} onClick={() => setMenuOpen(false)}>Profile</Link>
            <button onClick={() => { handleLogout(); setMenuOpen(false); }} style={{ background: "#fff", color: "#2c3e50", border: "none", borderRadius: "6px", padding: "0.5rem 1rem", fontWeight: 600, cursor: "pointer", marginLeft: "0.5rem" }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1.1rem", transition: "color 0.2s" }} onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" style={{ color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "1.1rem", transition: "color 0.2s" }} onClick={() => setMenuOpen(false)}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

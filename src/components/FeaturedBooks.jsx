import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/books?limit=4")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleReview = (bookId) => {
    if (user) {
      navigate(`/submit-review/${bookId}`);
    } else {
      navigate("/register");
    }
  };

  return (
    <div style={{ marginTop: "1.5rem", width: '100%' }}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2c3e50", marginBottom: "1.2rem", letterSpacing: "0.5px", textAlign: 'center' }}>📖 Featured Books</h3>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.2rem", // Reduced gap between cards
        justifyContent: "center",
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {books.map((book) => (
          <div key={book._id} style={{
            padding: "1.5rem 1.2rem 1.2rem 1.2rem",
            border: "none",
            borderRadius: "1.1rem",
            background: "#fff",
            width: "220px",
            maxWidth: '90vw',
            minWidth: 0,
            boxShadow: "0 4px 18px rgba(44,62,80,0.10)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            transition: "transform 0.15s, box-shadow 0.15s",
            cursor: "pointer",
            boxSizing: 'border-box',
            margin: 0 // Remove extra margin between cards
          }}
          onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(44,62,80,0.16)'; }}
          onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(44,62,80,0.10)'; }}
          >
            <h4 style={{ fontWeight: 700, color: "#2c3e50", marginBottom: "0.3rem", fontSize: "1.13rem" }}>{book.title}</h4>
            <p style={{ color: "#636e72", marginBottom: "0.7rem", fontSize: "1rem" }}>{book.author}</p>
            <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
              <Link to={`/books/${book._id}`} style={{
                flex: 1,
                marginTop: 0,
                background: "linear-gradient(90deg, #2c3e50 60%, #2980b9 100%)",
                color: "#fff",
                padding: "0.55rem 0",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.98rem",
                letterSpacing: "0.5px",
                transition: "background 0.2s",
                textAlign: 'center',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 0
              }}>View Details</Link>
              <button onClick={() => handleReview(book._id)} style={{
                flex: 1,
                marginTop: 0,
                background: "#27ae60",
                color: "#fff",
                padding: "0.55rem 0",
                borderRadius: "6px",
                border: 'none',
                fontWeight: 600,
                fontSize: "0.98rem",
                letterSpacing: "0.5px",
                cursor: 'pointer',
                transition: "background 0.2s",
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 0
              }}>Review</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleReview = (bookId) => {
    if (user) {
      navigate(`/submit-review/${bookId}`);
    } else {
      navigate("/register");
    }
  };

  return (
    <div style={{
      minHeight: "calc(100vh - 80px)",
      background: "linear-gradient(120deg, #e0eafc 60%, #f8fafc 100%)",
      padding: "2.5rem 1rem 2rem 1rem",
      boxSizing: 'border-box',
      width: '100vw',
      maxWidth: '100%'
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: '100%', minWidth: 0, boxSizing: 'border-box' }}>
        <h2 style={{
          fontSize: "2.2rem",
          fontWeight: 800,
          color: "#2c3e50",
          marginBottom: "1.5rem",
          letterSpacing: "1px",
          textAlign: "center",
          wordBreak: 'break-word'
        }}>📚 All Books</h2>
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "1rem",
            width: "100%",
            maxWidth: "400px",
            margin: "0 auto 2rem auto",
            display: "block",
            borderRadius: "8px",
            border: "1.5px solid #b2bec3",
            fontSize: "1.08rem",
            boxShadow: "0 1px 4px rgba(44,62,80,0.04)",
            outline: "none",
            boxSizing: 'border-box'
          }}
        />
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.2rem", // Reduced gap between cards
          justifyContent: "center",
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {filtered.map((book) => (
            <div key={book._id} style={{
              padding: "1.5rem 1.2rem 1.2rem 1.2rem",
              border: "none",
              borderRadius: "1.1rem",
              background: "#fff",
              width: "240px",
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
              <h4 style={{ fontWeight: 700, color: "#2c3e50", marginBottom: "0.3rem", fontSize: "1.18rem" }}>{book.title}</h4>
              <p style={{ color: "#636e72", marginBottom: "0.7rem", fontSize: "1rem" }}>{book.author}</p>
              <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
                <Link to={`/books/${book._id}`} style={{
                  marginTop: 0,
                  background: "linear-gradient(90deg, #2c3e50 60%, #2980b9 100%)",
                  color: "#fff",
                  padding: "0.55rem 1.1rem",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.98rem",
                  letterSpacing: "0.5px",
                  transition: "background 0.2s",
                  flex: 1,
                  textAlign: 'center'
                }}>Details</Link>
                <button onClick={() => handleReview(book._id)} style={{
                  marginTop: 0,
                  background: "#27ae60",
                  color: "#fff",
                  padding: "0.55rem 1.1rem",
                  borderRadius: "6px",
                  border: 'none',
                  fontWeight: 600,
                  fontSize: "0.98rem",
                  letterSpacing: "0.5px",
                  cursor: 'pointer',
                  transition: "background 0.2s",
                  flex: 1
                }}>Review</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;


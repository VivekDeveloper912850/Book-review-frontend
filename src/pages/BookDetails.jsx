import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/books/${id}`)
      .then((res) => setBook(res.data))
      .catch(console.error);

    axios.get(`http://localhost:5000/api/reviews?bookId=${id}`)
      .then((res) => setReviews(res.data))
      .catch(console.error);
  }, [id]);

  if (!book) return <div style={{textAlign: 'center', marginTop: '3rem', color: '#2c3e50', fontSize: '1.3rem'}}>Loading book...</div>;

  const handleReview = () => {
    if (user) {
      navigate(`/submit-review/${id}`);
    } else {
      navigate("/register");
    }
  };

  return (
    <div style={{
      minHeight: "calc(100vh - 80px)",
      background: "linear-gradient(120deg, #f8fafc 60%, #e0eafc 100%)",
      padding: "2.5rem 1rem 2rem 1rem",
      boxSizing: 'border-box',
      width: '100vw',
      maxWidth: '100%'
    }}>
      <div style={{
        maxWidth: "700px",
        width: '100%',
        minWidth: 0,
        margin: "0 auto",
        background: "#fff",
        borderRadius: "1.2rem",
        boxShadow: "0 4px 24px rgba(44,62,80,0.10)",
        padding: "2.5rem 1rem 2rem 1rem",
        boxSizing: 'border-box'
      }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#2c3e50", marginBottom: "0.7rem", letterSpacing: "1px", wordBreak: 'break-word' }}>{book.title}</h2>
        <p style={{ color: "#636e72", fontSize: "1.1rem", marginBottom: "0.5rem", wordBreak: 'break-word' }}><strong>Author:</strong> {book.author}</p>
        <p style={{ color: "#636e72", fontSize: "1.1rem", marginBottom: "0.5rem", wordBreak: 'break-word' }}><strong>Description:</strong> {book.description}</p>
        <p style={{ color: "#636e72", fontSize: "1.1rem", marginBottom: "0.5rem", wordBreak: 'break-word' }}><strong>Genre:</strong> {book.genre}</p>
        <p style={{ color: "#636e72", fontSize: "1.1rem", marginBottom: "1.5rem", wordBreak: 'break-word' }}><strong>Average Rating:</strong> {book.averageRating}</p>
        <button onClick={handleReview} style={{
          background: "#27ae60",
          color: "#fff",
          padding: "0.8rem 1.5rem",
          borderRadius: "7px",
          border: 'none',
          fontWeight: 600,
          fontSize: "1.08rem",
          cursor: 'pointer',
          marginBottom: '2rem',
          boxShadow: "0 2px 8px rgba(44,62,80,0.08)",
          letterSpacing: "0.5px",
          transition: "background 0.2s",
          width: '100%',
          maxWidth: 300,
          minWidth: 0
        }}>Review this Book</button>
        <hr style={{ margin: "2rem 0 1.5rem 0", border: 0, borderTop: "1.5px solid #e0eafc" }} />
        <h3 style={{ color: "#2c3e50", fontWeight: 700, marginBottom: "1.2rem" }}>📝 Reviews</h3>
        {reviews.length === 0 ? (
          <p style={{ color: "#888", fontStyle: "italic", textAlign: 'center' }}>No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <div key={review._id} style={{
              background: "#f8fafc",
              marginBottom: "1.2rem",
              padding: "1rem 1.2rem",
              borderRadius: "0.7rem",
              boxShadow: "0 1px 6px rgba(44,62,80,0.06)",
              minWidth: 0,
              wordBreak: 'break-word'
            }}>
              <p style={{ marginBottom: "0.3rem", color: "#2c3e50", fontWeight: 600 }}><strong>User:</strong> {review.user?.name}</p>
              <p style={{ marginBottom: "0.3rem", color: "#2980b9" }}><strong>Rating:</strong> {review.rating}/5</p>
              <p style={{ color: "#636e72" }}>{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookDetails;

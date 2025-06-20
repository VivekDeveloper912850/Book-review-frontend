import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const SubmitReview = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [form, setForm] = useState({
    user: user ? user._id : "",
    rating: 5,
    comment: "",
  });

  useEffect(() => {
    if (!user) {
      navigate("/register");
    } else {
      setForm((prev) => ({ ...prev, user: user._id }));
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/reviews", {
        ...form,
        book: bookId,
      });
      alert("✅ Review submitted successfully!");
      navigate(`/books/${bookId}`);
    } catch (err) {
      alert("❌ Failed to submit review");
      console.error(err);
    }
  };

  if (!user) return null;

  return (
    <div style={{
      minHeight: "calc(100vh - 80px)",
      background: "linear-gradient(120deg, #e0eafc 60%, #f8fafc 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2.5rem 1rem 2rem 1rem"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "500px",
        padding: "2.5rem 2rem 2rem 2rem",
        background: "#fff",
        borderRadius: "1.2rem",
        boxShadow: "0 4px 24px rgba(44,62,80,0.10)",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "1.5rem", color: "#2c3e50", fontWeight: 700, fontSize: "2rem", letterSpacing: "1px" }}>📝 Submit Your Review</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <label style={{ textAlign: "left", color: "#2c3e50", fontWeight: 500 }}>User ID</label>
          <input
            type="text"
            name="user"
            value={form.user}
            readOnly
            style={{ padding: "1rem", border: "1.5px solid #b2bec3", borderRadius: "7px", fontSize: "1.08rem", outline: "none", boxShadow: "0 1px 4px rgba(44,62,80,0.04)", background: '#f0f0f0' }}
          />
          <label style={{ textAlign: "left", color: "#2c3e50", fontWeight: 500 }}>Rating</label>
          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
            style={{ padding: "1rem", border: "1.5px solid #b2bec3", borderRadius: "7px", fontSize: "1.08rem", outline: "none", boxShadow: "0 1px 4px rgba(44,62,80,0.04)" }}
          >
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>{r} Star</option>
            ))}
          </select>
          <label style={{ textAlign: "left", color: "#2c3e50", fontWeight: 500 }}>Comment</label>
          <textarea
            name="comment"
            placeholder="Write your review..."
            value={form.comment}
            onChange={handleChange}
            required
            style={{ padding: "1rem", border: "1.5px solid #b2bec3", borderRadius: "7px", fontSize: "1.08rem", outline: "none", boxShadow: "0 1px 4px rgba(44,62,80,0.04)", height: "100px", resize: "vertical" }}
          ></textarea>
          <button type="submit" style={{
            background: "linear-gradient(90deg, #2c3e50 60%, #2980b9 100%)",
            color: "#fff",
            padding: "1rem",
            borderRadius: "7px",
            border: "none",
            fontWeight: 600,
            fontSize: "1.08rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(44,62,80,0.08)",
            letterSpacing: "0.5px",
            transition: "background 0.2s"
          }}>Submit Review</button>
        </form>
      </div>
    </div>
  );
};

export default SubmitReview;

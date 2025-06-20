import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registration successful. Now login.");
      navigate("/login");
    } catch (err) {
      alert("Registration failed. Email may be used.");
    }
  };

  return (
    <div style={{
      minHeight: "calc(100vh - 80px)",
      background: "linear-gradient(120deg, #f8fafc 60%, #e0eafc 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem 1rem",
      width: '100vw',
      maxWidth: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        background: "#fff",
        padding: "2.5rem 1rem 2rem 1rem",
        borderRadius: "1.2rem",
        boxShadow: "0 4px 24px rgba(44,62,80,0.10)",
        minWidth: 0,
        maxWidth: "400px",
        width: "100%",
        textAlign: "center",
        boxSizing: 'border-box'
      }}>
        <h2 style={{ fontWeight: 700, color: "#2c3e50", marginBottom: "1.5rem", fontSize: "2rem", letterSpacing: "1px" }}>📝 Register</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            style={{ padding: "1rem", fontSize: "1.08rem", borderRadius: "7px", border: "1.5px solid #b2bec3", outline: "none", transition: "border 0.2s", boxShadow: "0 1px 4px rgba(44,62,80,0.04)" }}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={{ padding: "1rem", fontSize: "1.08rem", borderRadius: "7px", border: "1.5px solid #b2bec3", outline: "none", transition: "border 0.2s", boxShadow: "0 1px 4px rgba(44,62,80,0.04)" }}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={{ padding: "1rem", fontSize: "1.08rem", borderRadius: "7px", border: "1.5px solid #b2bec3", outline: "none", transition: "border 0.2s", boxShadow: "0 1px 4px rgba(44,62,80,0.04)" }}
            required
          />
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
          }}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

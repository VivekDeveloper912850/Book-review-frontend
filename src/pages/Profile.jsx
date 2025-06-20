import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div style={{
      minHeight: "calc(100vh - 80px)",
      background: "linear-gradient(120deg, #e0eafc 60%, #f8fafc 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2.5rem 1rem 2rem 1rem",
      boxSizing: 'border-box',
      width: '100vw',
      maxWidth: '100%'
    }}>
      <div style={{
        width: "100%",
        maxWidth: "520px",
        minWidth: 0,
        padding: "2.5rem 2rem 2rem 2rem",
        background: "#fff",
        borderRadius: "1.5rem",
        boxShadow: "0 8px 32px rgba(44,62,80,0.13)",
        textAlign: "center",
        boxSizing: 'border-box',
        margin: '0 0.5rem'
      }}>
        <h2 style={{ fontWeight: 800, color: "#2c3e50", marginBottom: "1.2rem", fontSize: "2.1rem", letterSpacing: "1px" }}>👤 User Info</h2>
        <div style={{ marginBottom: '2.2rem', background: 'linear-gradient(90deg, #e0eafc 60%, #f8fafc 100%)', borderRadius: '0.9rem', padding: '1.2rem 1.5rem', boxShadow: '0 2px 10px rgba(44,62,80,0.07)', textAlign: 'left', border: '1.5px solid #e0eafc' }}>
          <div style={{ fontWeight: 700, color: '#2c3e50', marginBottom: '0.7rem', fontSize: '1.13rem' }}>Name: <span style={{ fontWeight: 400 }}>{user?.name || user?.email?.split('@')[0]}</span></div>
          <div style={{ fontWeight: 700, color: '#2c3e50', fontSize: '1.13rem' }}>Email: <span style={{ fontWeight: 400 }}>{user?.email}</span></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

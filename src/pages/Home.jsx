import React from "react";
import FeaturedBooks from "../components/FeaturedBooks";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 80px)",
        background: "linear-gradient(120deg, #f8fafc 60%, #e0eafc 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "3rem 1rem 2rem 1rem",
        width: "100vw",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background: "none",
          borderRadius: "1.2rem",
          boxShadow: "none",
          padding: 0,
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
          marginBottom: "2.5rem",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontSize: "2.7rem",
            fontWeight: 900,
            color: "#2c3e50",
            marginBottom: "0.7rem",
            letterSpacing: "1.5px",
            wordBreak: "break-word",
            background: "linear-gradient(90deg, #2c3e50 60%, #2980b9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
            textShadow: "0 2px 12px rgba(44,62,80,0.10)",
            lineHeight: 1.15,
          }}
        >
          📚 Welcome to Book Review Platform
        </h1>
        <p
          style={{
            fontSize: "1.35rem",
            color: "#2980b9",
            marginBottom: "1.7rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            wordBreak: "break-word",
            textShadow: "0 1px 8px rgba(44,62,80,0.07)",
          }}
        >
          Discover, review, and share your favorite books with a vibrant
          community of readers.
        </p>
        <p
          style={{
            fontSize: "1.08rem",
            color: "#636e72",
            marginBottom: "0.7rem",
            fontWeight: 400,
            letterSpacing: "0.2px",
            wordBreak: "break-word",
          }}
        >
          Explore featured books below:
        </p>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          minWidth: 0,
          boxSizing: "border-box",
        }}
      >
        <FeaturedBooks />
      </div>
    </div>
  );
};

export default Home;


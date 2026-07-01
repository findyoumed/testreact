import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/products?q=pants");
  };

  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/about">Go to about page</Link>
      <button onClick={goProductPage}>Go to Product Page</button>
    </div>
  );
};

export default HomePage;

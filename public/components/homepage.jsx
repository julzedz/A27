import React from "react";
import { useState } from "react";

const Homepage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://via.placeholder.com/200",
      description: "High-quality wireless headphones with noise cancellation",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "https://via.placeholder.com/200",
      description: "Feature-rich smartwatch with health tracking",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: 49.99,
      image: "https://via.placeholder.com/200",
      description: "Durable laptop backpack with multiple compartments",
    },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert("Item added to cart!");
  };

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">A27 E-Shop</div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="cart">Cart ({cartItems.length})</div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to A27 E-Shop</h1>
        <p>Discover amazing products at great prices</p>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 E-Shop. All rights reserved.</p>
      </footer>

      <style jsx>{`
        .homepage {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .header {
          padding: 20px 0;
          border-bottom: 1px solid #eee;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
        }

        .nav-links a {
          margin: 0 15px;
          text-decoration: none;
          color: #333;
        }

        .hero {
          text-align: center;
          padding: 60px 0;
          background-color: #f5f5f5;
          margin: 20px 0;
        }

        .featured-products {
          padding: 40px 0;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px 0;
        }

        .product-card {
          border: 1px solid #eee;
          padding: 15px;
          text-align: center;
          border-radius: 8px;
        }

        .product-card img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
        }

        .product-card h3 {
          margin: 10px 0;
        }

        .price {
          font-weight: bold;
          color: #2ecc71;
        }

        button {
          background-color: #2ecc71;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #27ae60;
        }

        .footer {
          text-align: center;
          padding: 20px 0;
          margin-top: 40px;
          border-top: 1px solid #eee;
        }
      `}</style>
    </div>
  );
};

export default Homepage;

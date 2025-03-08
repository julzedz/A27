import React from "react";

const Products = () => {
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="products-grid">
        {/* You can move the featuredProducts logic here from homepage */}
      </div>

      <style jsx>{`
        .products-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }

        h1 {
          text-align: center;
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  );
};

export default Products;

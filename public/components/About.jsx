import React from "react";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <div className="about-content">
        <p>
          Welcome to A27 E-Shop, your one-stop destination for quality products.
        </p>
        <p>
          We strive to provide the best shopping experience with carefully
          curated items and excellent customer service.
        </p>
      </div>

      <style jsx>{`
        .about-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .about-content {
          line-height: 1.6;
        }

        h1 {
          text-align: center;
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  );
};

export default About;

import React from 'react';

const Home = () => {
  return (
    <>
      <style>{`
        .home-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem;
          max-width: 1200px;
          margin: 80px auto 0;
          min-height: calc(100vh - 80px);
        }

        .text-content {
          flex: 1;
          padding-right: 3rem;
          max-width: 50%;
        }

        .image-content {
          flex: 1;
          max-width: 50%;
        }

        .image-content img {
          width: 100%;
          height: auto;
          max-height: 70vh;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        h1 {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          color: #222;
          line-height: 1.2;
          font-weight: 600;
        }

        .highlight {
          color: #e84c3d;
          font-weight: 700;
        }

        p {
          font-size: 1.3rem;
          color: #444;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        /* --- Intro Section --- */
        .intro-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
        }

        .intro-images {
          flex: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          max-width: 50%;
        }

        .intro-images img {
          width: 48%;
          border-radius: 12px;
          object-fit: cover;
        }

        .intro-text {
          flex: 1;
          max-width: 50%;
          padding-left: 2rem;
        }

        .intro-text h2 {
          font-size: 2rem;
          color: #b8766f;
          margin-bottom: 1rem;
        }

        .intro-text h3 {
          font-size: 1.8rem;
          color: #9e4e3c;
          margin-bottom: 1.5rem;
          font-weight: bold;
        }

        .intro-text p {
          font-size: 1.1rem;
          color: #333;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .contact-button {
          background-color: #c17864;
          color: white;
          padding: 0.8rem 2rem;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .home-container {
            flex-direction: column-reverse;
            padding: 1rem;
          }

          .text-content, .image-content, .intro-text, .intro-images {
            max-width: 100%;
            padding: 0;
          }

          .intro-section {
            flex-direction: column;
            gap: 2rem;
          }

          .intro-images img {
            width: 100%;
          }

          .intro-text {
            padding: 0;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="home-container">
        <div className="text-content">
          <h1>Welcome to<br /><span className="highlight">Platinum 9 - World Tower</span></h1>
          <p>Most Prestigious Commercial Property in Wakad-Hinjawadi</p>
        </div>
        <div className="image-content">
          <img src="/asset/bg.jpg" alt="Platinum 9 World Tower" />
        </div>
      </div>

      {/* Intro Section */}
      <div className="intro-section">
        <div className="intro-images">
          <img src="/asset/tower1.jpg" alt="Tower 1" />
          <img src="/asset/tower2.png" alt="Tower 2" />
          <img src="/asset/tower3.png" alt="Tower 3" />
        </div>
        <div className="intro-text">
          <h2>Introduction</h2>
          <h3>BRIDGING WAKAD & HINJAWADI – A BUSINESS ADDRESS LIKE NO OTHER</h3>
          <p>Strategically positioned to offer unparalleled advantages, Platinum 9 - World Tower seamlessly blends the accessibility of Wakad with the dynamic energy of Hinjawadi.</p>
          <p>This 35-story architectural marvel stands as PCMC’s tallest commercial masterpiece and redefines the very meaning of Luxury Office Space in Wakad-Hinjawadi.</p>
          <button className="contact-button">Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Home;

import React from 'react';

const Overview = () => {
  return (
    <div className="overview-page">
      <style>{`
        .overview-page {
          margin-top: 70px;
          position: relative;
        }
        
        .overview-hero {
          width: 100%;
          height: 80vh;
          background-image: url('/asset/overview.jpg');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }
        
        .overlay-content {
          background-color: rgba(255, 255, 255, 0.85);
          padding: 3rem;
          max-width: 600px;
          margin-left: 10%;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
          font-size: 3rem;
          color: #222;
          margin-bottom: 1.5rem;
        }
        
        h2 {
          font-size: 1.8rem;
          color: #e84c3d;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #444;
          margin-bottom: 1.5rem;
        }
        
        .highlights {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        
        .highlight-item {
          font-size: 1.3rem;
          font-weight: bold;
          color: #e84c3d;
          text-align: center;
          flex: 1;
          min-width: 200px;
        }
        
        @media (max-width: 768px) {
          .overlay-content {
            margin: 2rem auto;
            width: 90%;
          }
          
          .overview-hero {
            height: auto;
            min-height: 100vh;
            background-attachment: scroll;
          }
        }
      `}</style>

      <div className="overview-hero">
        <div className="overlay-content">
          <h1>Overview</h1>
          <h2>LOCATION. LUXURY. LEGACY.</h2>
          <p>
            Located just 2 minutes from Hinjewadi IT Park—one of India's largest IT clusters with over 800 IT companies & 5 lakh professionals—this Commercial Office Space near Wakad Chowk Metro Station, is a high-footfall destination that ensures maximum visibility and elite clientele for your business. Your gateway to success begins here.
          </p>
          <div className="highlights">
            <div className="highlight-item">1 ICONIC TOWER</div>
            <div className="highlight-item">2 REVOLVING RESTAURANTS</div>
            <div className="highlight-item">35 FLOORS OF EXCELLENCE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
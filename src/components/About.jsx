import React from 'react';

const floorData = [
  { floor: 'GROUND FLOOR', desc: 'Ultra-premium Showrooms', button: 'View' },
  { floor: '1ST TO 3RD FLOOR', desc: 'High-footfall Retail Shops & Food Court', button: 'View' },
  { floor: '4TH TO 8TH FLOOR', desc: 'Podium Parking for seamless accessibility', button: 'View' },
  { floor: '9TH TO 16TH FLOOR', desc: 'Modern Office Space', button: 'View' },
  { floor: '17TH FLOOR', desc: 'Elite Amenity Floor for business networking & leisure', button: 'Contact Us' },
  { floor: '18TH TO 26TH FLOOR', desc: 'Corporate Offices for industry leaders', button: 'View' },
  { floor: '27TH TO 33RD FLOOR', desc: 'Fine-Dining Restaurants with panoramic views', button: 'View' },
  { floor: '34TH & 35TH FLOOR', desc: 'Pune’s First Twin Revolving Restaurants', button: 'View' },
];

const About = () => {
  return (
    <div className="about-section">
      <style>{`
        .about-section {
          background: url('/assets/about-bg.png') no-repeat center center/cover;
          padding: 4rem 2rem;
          color: #333;
          text-align: center;
        }

        .about-section h3 {
          font-size: 1rem;
          color: #888;
        }

        .about-section h1 {
          font-size: 2rem;
          font-weight: 700;
          color: #c1565b;
          margin: 0.5rem 0 1.5rem;
        }

        .about-section p {
          max-width: 800px;
          margin: 0 auto 2rem;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .floor-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .floor-card {
          background-color: rgba(0, 26, 51, 0.9);
          color: #fff;
          padding: 2rem 1rem;
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          min-height: 200px;
        }

        .floor-card h2 {
          font-size: 1rem;
          color: #ffccbc;
          margin-bottom: 0.5rem;
        }

        .floor-card p {
          font-size: 0.95rem;
          margin-bottom: 1.2rem;
        }

        .floor-card button {
          background-color: #d99a92;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          color: white;
          transition: 0.3s ease;
        }

        .floor-card button:hover {
          background-color: #c1565b;
        }
      `}</style>

      <h3>About The Project</h3>
      <h1>REDEFINING PUNE’S COMMERCIAL SKYLINE</h1>
      <p>
        Designed by Platinum Groups, Platinum 9 - World Tower, strategically located right at the edge of Wakad & Hinjewadi, is a testament to architectural brilliance and an address that exudes prestige and class.
      </p>

      <div className="floor-grid">
        {floorData.map((item, index) => (
          <div className="floor-card" key={index}>
            <h2>{item.floor}</h2>
            <p>{item.desc}</p>
            <button>{item.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

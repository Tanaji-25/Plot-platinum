import React from 'react';

const connectivityData = [
  { distance: '500M', place: 'MUMBAI–PUNE EXPRESSWAY' },
  { distance: '700M', place: 'WAKAD CHOWK METRO STATION' },
  { distance: '2KM', place: 'HINJAWADI IT PARK' },
  { distance: '2KM', place: 'D-MART & VIVANTA HOTEL' },
  { distance: '3KM', place: 'RAMADA PLAZA' },
  { distance: '5KM', place: 'ORCHID HOTEL | BALEWADI STADIUM' },
  { distance: '8KM', place: 'BANER' },
  { distance: '8KM', place: 'HINJAWADI PHASE 3' },
];

const Location = () => {
  return (
    <div className="location-section">
      <style>{`
        .location-section {
          background: url('/assets/location-bg.png') no-repeat center center/cover;
          padding: 4rem 2rem;
          color: #333;
          text-align: center;
        }

        .location-section h4 {
          font-size: 1rem;
          color: #888;
          margin-bottom: 0.5rem;
        }

        .location-section h2 {
          font-size: 1.8rem;
          color: #c1565b;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .location-section p {
          max-width: 800px;
          margin: 0 auto 2.5rem;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .connectivity-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto 2rem;
        }

        .connectivity-item {
          font-size: 1.2rem;
        }

        .connectivity-item .distance {
          font-size: 2rem;
          font-weight: bold;
          color: #c1565b;
        }

        .bottom-line {
          font-size: 1.1rem;
          font-weight: 500;
          margin-top: 2rem;
        }

        @media (max-width: 500px) {
          .location-section h2 {
            font-size: 1.4rem;
          }

          .connectivity-item .distance {
            font-size: 1.6rem;
          }
        }
      `}</style>

      <h4>Location & Connectivity</h4>
      <h2>YOUR BUSINESS DESERVES THE BEST LOCATION</h2>
      <p>
        Road Touch Commercial Space strategically situated on the edge of Wakad-Hinjawadi,<br />
        Platinum 9 - World Tower enjoys unmatched connectivity:
      </p>

      <div className="connectivity-grid">
        {connectivityData.map((item, index) => (
          <div className="connectivity-item" key={index}>
            <div className="distance">{item.distance}</div>
            <div className="place" style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>{item.place}</div>
          </div>
        ))}
      </div>

      <p className="bottom-line">
        At the center of it all: <strong>Platinum 9 – World Tower</strong> is where business meets luxury.
      </p>
    </div>
  );
};

export default Location;

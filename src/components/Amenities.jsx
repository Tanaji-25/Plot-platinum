import React from 'react';

const amenitiesData = [
  {
    img: '/asset/Ample.jpg',
    title: 'AMPLE NATURAL LIGHT & VENTILATION',
    description: 'Spacious interiors, full-height windows, and open layouts ensure unparalleled ambiance.',
  },
  {
    img: '/asset/road.jpg',
    title: 'GRAND 250 FEET WIDE FRONTAGE',
    description: 'Maximum visibility for your brand and easy accessibility on a 150 feet wide traffic road.',
  },
  {
    img: '/asset/Elev.jpg',
    title: 'SMART VERTICAL CONNECTIVITY',
    description: '14 High-speed elevators, dedicated lifts for retail, corporate, and restaurants.',
  },
  {
    img: '/asset/parking.jpg',
    title: 'MULTI-LEVEL PODIUM PARKING',
    description: '5 floors of hassle-free parking with ample space for visitors and tenants.',
  },
  {
    img: '/asset/dine.jpg',
    title: 'ELITE DINING EXPERIENCES',
    description: 'Luxury restaurants with skyline views, including Pune\'s first-ever revolving restaurants.',
  },
  {
    img: '/asset/womenw.jpg',
    title: 'HINJAWADI-WAKAD ANNEX',
    description: 'Pune\'s most coveted business corridor with premium connectivity.',
  },
];

const investmentPoints = [
  {
    title: 'The Most Premium Commercial Project in Pune',
    description: 'Unmatched quality and prestige in Pune\'s commercial real estate market.'
  },
  {
    title: 'Superior Location Compared to Established Business Hubs',
    description: 'Strategic advantage over already successful destinations like White Square and Suratwala Mark Plazzo.'
  },
  {
    title: 'Unmatched Business Potential',
    description: 'Direct footfall from Hinjewadi\'s 5+ Lakh workforce.'
  },
  {
    title: 'Prime Location',
    description: 'Wakad-Hinjawadi Annex, Pune\'s fastest-growing commercial district.'
  },
  {
    title: 'A Rare Investment Opportunity',
    description: 'Limited availability in a future-ready commercial hub.'
  },
  {
    title: 'Exclusive Facilities',
    description: 'Corporate offices, retail shops, restaurants, and luxury amenities.'
  }
];

const Amenities = () => {
  return (
    <div>
      {/* Investment Section */}
      <div className="investment-section">
        <style jsx>{`
          .investment-section {
            padding: 5rem 2rem;
            background-color: #fff;
            text-align: center;
          }
          
          .investment-header {
            max-width: 800px;
            margin: 0 auto 3rem;
          }
          
          .investment-section h2 {
            font-size: 2.5rem;
            color: #c1565b;
            font-weight: 700;
            margin-bottom: 1.5rem;
          }
          
          .investment-section .subtitle {
            font-size: 1.2rem;
            color: #333;
            margin-bottom: 3rem;
            font-weight: 500;
          }
          
          .investment-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .investment-card {
            background: #f9f9f9;
            border-radius: 8px;
            padding: 2rem;
            text-align: left;
            transition: all 0.3s ease;
            border-left: 4px solid #c1565b;
          }
          
          .investment-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          }
          
          .investment-card h3 {
            font-size: 1.2rem;
            color: #222;
            margin-bottom: 1rem;
            font-weight: 700;
          }
          
          .investment-card p {
            color: #666;
            line-height: 1.6;
          }
          
          @media (max-width: 768px) {
            .investment-section {
              padding: 3rem 1rem;
            }
            
            .investment-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
        
        <div className="investment-header">
          <h2>WHY INVEST IN PLATINUM 9 ?</h2>
          <p className="subtitle">Discover the unparalleled advantages of Pune's most prestigious commercial property</p>
        </div>
        
        <div className="investment-grid">
          {investmentPoints.map((point, index) => (
            <div className="investment-card" key={index}>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      <div className="amenities-section">
        <style jsx>{`
          .amenities-section {
            padding: 5rem 2rem;
            background-color: #f9f9f9;
            text-align: center;
            color: #333;
          }
          
          .section-header {
            max-width: 800px;
            margin: 0 auto 3rem;
          }

          .amenities-section h4 {
            font-size: 1rem;
            color: #c1565b;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 600;
          }

          .amenities-section h2 {
            font-size: 2.2rem;
            color: #222;
            font-weight: 700;
            margin-bottom: 1.5rem;
            position: relative;
            display: inline-block;
          }

          .amenities-section h2:after {
            content: '';
            position: absolute;
            width: 60px;
            height: 3px;
            background: #c1565b;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
          }

          .amenities-section .description {
            font-size: 1.1rem;
            line-height: 1.8;
            color: #666;
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2.5rem;
            max-width: 1200px;
            margin: 0 auto;
          }

          .amenity-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
            text-align: left;
          }

          .amenity-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
          }

          .image-container {
            width: 100%;
            height: 220px;
            overflow: hidden;
          }

          .amenity-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .amenity-card:hover img {
            transform: scale(1.05);
          }

          .card-content {
            padding: 1.5rem;
          }

          .amenity-card h3 {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 0.8rem;
            color: #222;
            position: relative;
            padding-bottom: 0.5rem;
          }

          .amenity-card h3:after {
            content: '';
            position: absolute;
            width: 40px;
            height: 2px;
            background: #c1565b;
            bottom: 0;
            left: 0;
          }

          .amenity-card p {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #666;
            margin-top: 1rem;
          }

          @media (max-width: 768px) {
            .amenities-section {
              padding: 3rem 1rem;
            }
            
            .grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }
            
            .section-header {
              margin-bottom: 2rem;
            }
          }
        `}</style>

        <div className="section-header">
          <h4>Architectural Excellence & Amenities</h4>
          <h2>WHERE INNOVATION MEETS COMFORT</h2>
          <p className="description">
            Every detail of Platinum 9 - World Tower is meticulously designed to blend business efficiency with luxury living, creating an unparalleled experience.
          </p>
        </div>

        <div className="grid">
          {amenitiesData.map((item, index) => (
            <div className="amenity-card" key={index}>
              <div className="image-container">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
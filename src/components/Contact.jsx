import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Telegram bot API integration
    const botToken = '7581259551:AAG5Wu4mDuPiKuvoaLtuLVQH59aCrwSFzX4';
    const chatId = '2094241245';
    
    const message = `📩 New Contact Form Submission:\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n📞 Phone: ${formData.phone}`;
    
    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending message to Telegram:', error);
    }
  };

  return (
    <div className="contact-page">
      <style jsx>{`
        .contact-page {
          font-family: 'Poppins', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
          color: #333;
        }
        
        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .contact-header h1 {
          font-size: 3rem;
          color: #222;
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: 1px;
        }
        
        .contact-header h2 {
          font-size: 2rem;
          color: #c1565b;
          margin-bottom: 1.5rem;
          font-weight: 600;
          position: relative;
          display: inline-block;
        }
        
        .contact-header h2:after {
          content: '';
          position: absolute;
          width: 80px;
          height: 3px;
          background: #c1565b;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .contact-header p {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #666;
          max-width: 800px;
          margin: 2rem auto 0;
        }
        
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-top: 4rem;
          align-items: center;
        }
        
        .contact-form {
          background: white;
          padding: 3rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          border-top: 5px solid #c1565b;
        }
        
        .form-title {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #222;
          font-weight: 700;
        }
        
        .form-subtitle {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }
        
        .form-group {
          margin-bottom: 2rem;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 0.8rem;
          font-weight: 600;
          color: #444;
          font-size: 1.1rem;
        }
        
        .form-group input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #eee;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif;
        }
        
        .form-group input:focus {
          border-color: #c1565b;
          outline: none;
          box-shadow: 0 0 0 3px rgba(193,86,91,0.1);
        }
        
        .submit-btn {
          background: #c1565b;
          color: white;
          border: none;
          padding: 1.2rem 2rem;
          font-size: 1.1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          width: 100%;
          margin-top: 1rem;
          letter-spacing: 0.5px;
        }
        
        .submit-btn:hover {
          background: #a94449;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .success-message {
          color: #28a745;
          text-align: center;
          margin-top: 1.5rem;
          font-weight: 600;
          font-size: 1.1rem;
          padding: 1rem;
          background: rgba(40,167,69,0.1);
          border-radius: 8px;
          animation: fadeIn 0.5s ease;
        }
        
        .contact-info {
          padding: 2rem 0;
        }
        
        .info-title {
          font-size: 1.8rem;
          margin-bottom: 2.5rem;
          color: #222;
          font-weight: 700;
          position: relative;
          padding-bottom: 1rem;
        }
        
        .info-title:after {
          content: '';
          position: absolute;
          width: 60px;
          height: 3px;
          background: #c1565b;
          bottom: 0;
          left: 0;
        }
        
        .info-item {
          margin-bottom: 2.5rem;
          padding-left: 1.5rem;
          border-left: 3px solid #c1565b;
        }
        
        .info-item h3 {
          font-size: 1.3rem;
          color: #c1565b;
          margin-bottom: 1rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .info-item p {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.7;
        }
        
        .contact-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 15px;
          margin-bottom: 3rem;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        
        .icon {
          font-size: 1.5rem;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .contact-info {
            padding: 0;
          }
        }
        
        @media (max-width: 768px) {
          .contact-page {
            padding: 3rem 1.5rem;
          }
          
          .contact-header h1 {
            font-size: 2.2rem;
          }
          
          .contact-header h2 {
            font-size: 1.6rem;
          }
          
          .contact-form {
            padding: 2rem;
          }
          
          .contact-image {
            height: 350px;
          }
        }
      `}</style>

      <div className="contact-header">
        <h1>Contact Us</h1>
        <h2>THE OPPORTUNITY OF A LIFETIME AWAITS</h2>
        <p>Step into the future of business and luxury—Platinum 9-World Tower is where success finds its address.</p>
      </div>

      <img src="/asset/map.jpg" alt="Platinum 9-World Tower" className="contact-image" />

      <div className="contact-container">
        <div className="contact-form">
          <h3 className="form-title">Get in Touch</h3>
          <p className="form-subtitle">Book your space today. Limited availability in Pune's most prestigious commercial property.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="Enter your email address"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone number*</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                required 
                placeholder="Enter your phone number"
              />
            </div>
            
            <button type="submit" className="submit-btn">SUBMIT</button>
            
            {submitted && (
              <div className="success-message">
                Thank you! We've received your details and will contact you shortly.
              </div>
            )}
          </form>
        </div>
        
        <div className="contact-info">
          <h3 className="info-title">Contact Information</h3>
          
          <div className="info-item">
            <h3>
              <span className="icon">📞</span> PHONE
            </h3>
            <p>+91 35432 12345</p>
          </div>
          
          <div className="info-item">
            <h3>
              <span className="icon">✉️</span> EMAIL
            </h3>
            <p>info@platinum9.com</p>
          </div>
          
          <div className="info-item">
            <h3>
              <span className="icon">📍</span> ADDRESS
            </h3>
            <p>Platinum 9-World Tower<br />
            Wakad-Hinjawadi Annex<br />
            Pune, Maharashtra 411057</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
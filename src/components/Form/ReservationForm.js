import React, { useState } from 'react';
import '../Form/Reserve.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ReservationForm() {
  const initialFormData = {
    fullName: '',
    phoneNumber: '',
    day: '',
    time: '',
    guestCount: '',
    hotelName: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/submit-reservation', formData);
      console.log('Reservation submitted successfully');
      setFormData(initialFormData); // Reset form fields
      setShowPopup(true); // Show success popup
    } catch (error) {
      console.error('Reservation submission failed', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
    <div className="container">
      <div className="title">Reservation</div>
      <div className="content">
        {showPopup && (
          <div id="popup">
            #Reservation Done Successfully!
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Full Name</span>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Phone Number</span>
              <input
                type="number"
                name="phoneNumber"
                placeholder="Enter your number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Day</span>
              <input
                type="date"
                name="day"
                placeholder="Select Day"
                value={formData.day}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Time</span>
              <input
                type="time"
                name="time"
                placeholder="Check-In Time"
                value={formData.time}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Number of Guests</span>
              <input
                type="number"
                name="guestCount"
                placeholder="Enter guest count"
                value={formData.guestCount}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Restaurant</span>
              <div className="drop">
                <select
                  name="hotelName"
                  value={formData.hotelName}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Hotel Name</option>
                  <option value="Barbecue">Barbecue</option>
                  <option value="Ru-oo-fh 180">Ru-oo-fh 180</option>
                  <option value="Nanking">Nanking</option>
                  <option value="Pablo - The Art Cafe Lounge">Pablo - The Art Cafe Lounge</option>
                  <option value="Haldiram Planet Food">Haldiram Planet Food</option>
                  <option value="Fountain Sizzlers and Bistro">Fountain Sizzlers and Bistro</option>
                  <option value="Gokul Brindavan">Gokul Brindavan</option>
                  <option value="Tao-Asian Kitchen">Tao-Asian Kitchen</option>
                  <option value="High Steaks-Pool Side">High Steaks-Pool Side</option>
                </select>
              </div>
            </div>
          </div>
          <div id="pop">
            <label htmlFor="terms" className="input-box">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
              />
              I agree to the terms and conditions. <a href="#">Learn More</a>
            </label>
            <br />
            <br />
          </div>
          <div id="side">
            <div className="button">
              <input type="submit" value="Reserve" />
            </div>
            <div className="button">
              <input type="reset" value="Reset" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <div id="footer">
     &copy; Copyright Interslaller 2023 | Designed & Developed by Bon Appetite!
 </div>
    </>
  );
}

export default ReservationForm;

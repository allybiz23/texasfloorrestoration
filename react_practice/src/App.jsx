import React, { useState } from 'react';
import './style.css'; // Import your CSS file for styling

function App() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    stoneType: 'travertine',
    appointment: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/saveData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      // Optionally, clear the form after successful submission
      setFormData({
        name: '',
        address: '',
        phone: '',
        email: '',
        stoneType: 'travertine',
        appointment: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Texas Floor Restoration Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Select Type of Stone:</label>
          <select
            name="stoneType"
            value={formData.stoneType}
            onChange={handleChange}
          >
            <option value="travertine">Travertine</option>
            <option value="marble">Marble</option>
            <option value="saltillo">Saltillo</option>
            <option value="brick">Brick</option>
            <option value="concrete">Concrete</option>
            <option value="slate">Slate</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Appointment:</label>
          <textarea
            name="appointment"
            value={formData.appointment}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

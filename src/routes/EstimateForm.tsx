import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EstimateForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    stoneType: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      console.log(result);
      toast.success("Form submitted successfully!");

      // Clear form after success
      setFormData({
        name: "",
        address: "",
        email: "",
        stoneType: "",
        appointmentDate: "",
        appointmentTime: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="container mt-5 mw-33">
      <h1>Schedule an Estimate</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stoneType" className="form-label">
            Select Type of Stone
          </label>
          <select
            className="form-select"
            id="stoneType"
            name="stoneType"
            value={formData.stoneType}
            onChange={handleChange}
            required
          >
            <option value="">Select Stone Type</option>
            <option value="travertine">Travertine</option>
            <option value="marble">Marble</option>
            <option value="slate">Slate</option>
            <option value="saltillo">Saltillo</option>
            <option value="brick">Brick</option>
            <option value="concrete">Concrete</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="appointmentDate" className="form-label">
            Appointment Date
          </label>
          <input
            type="date"
            className="form-control"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="appointmentTime" className="form-label">
            Appointment Time
          </label>
          <input
            type="time"
            className="form-control"
            id="appointmentTime"
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EstimateForm;

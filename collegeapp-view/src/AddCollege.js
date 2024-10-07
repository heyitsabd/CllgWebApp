import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CllgService from './services/CllgService';

function AddCollege() {
  const [formData, setFormData] = useState({
    collegeName: "",
    courseName: "",
    duration: "",
    acNONAC: false,
    accomodationFee: "",
    courseFee: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const saveCllgData = (e) => {
    e.preventDefault();
    CllgService.saveCllg(formData)
      .then((res) => {
        console.log(formData);
        navigate("/colleges"); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="text-center m-4">
        <p className="text-4xl font-bold text-green-500">Enter College Details</p>
      </div>
      <form
        onSubmit={saveCllgData}
        className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">College Name</label>
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Course Name</label>
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Duration (years)</label>
          <input
            type="number"
            step="0.1"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">AC/Non-AC Accommodation</label>
          <input
            type="checkbox"
            name="acNONAC"
            checked={formData.acNONAC}
            onChange={handleChange}
            className="mr-2 leading-tight"
          />
          <span className="text-gray-700">AC</span>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Accommodation Fee</label>
          <input
            type="number"
            name="accomodationFee"
            value={formData.accomodationFee}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Course Fee</label>
          <input
            type="number"
            name="courseFee"
            value={formData.courseFee}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCollege;

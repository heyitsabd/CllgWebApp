import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import CllgService from './services/CllgService';
import CourseService from "./services/CourseService";
import { SignUpContext } from "./userSignUpContext";

function AddCollege() {
  const [formData, setFormData] = useState({
    collegeName: "",
    courseName: "",
    duration: "",
    acNONAC: false,
    accomodationFee: "",
    courseFee: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [courses, setCourses] = useState([]);
  const { loginInfo } = useContext(SignUpContext);
  const navigate = useNavigate();

  useEffect(() => {
    CourseService.getCourses()
      .then((res) => {
        setCourses(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const saveCllgData = (e) => {
    e.preventDefault();
    
    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });

    // Append the image file if selected
    if (imageFile) {
      formDataToSubmit.append("image", imageFile);
    }

    CllgService.saveCllg(formDataToSubmit)
      .then((res) => {
        console.log(res.data);
        navigate("/");
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
          <select
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Select a course</option>
            {courses.map((course, index) => (
              <option key={index} value={course.courseName}>
                {course.courseName}
              </option>
            ))}
          </select>
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
          <label className="block text-gray-700 font-bold mb-2">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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

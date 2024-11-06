import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CllgService from "./services/CllgService";
import { SignUpContext } from "./userSignUpContext";

function CollegePage() {
  const { id } = useParams(); // College ID from URL parameters
  const [cllgData, setCllgData] = useState(null); // College data state
  const [imageFile, setImageFile] = useState(null); // College image state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const { isLoggedIn } = useContext(SignUpContext); // User authentication context

  useEffect(() => {
    // Fetch college data and image on component mount
    const fetchCollegeData = async () => {
      try {
        // Get college data
        const res = await CllgService.getCllg();
        setCllgData(res.data);

        // Get college image
        const imgResponse = await CllgService.getCllgImage(id);
        const imageUrl = URL.createObjectURL(imgResponse.data); // Create image URL from Blob
        setImageFile(imageUrl);

        setLoading(false); // Stop loading
      } catch (error) {
        console.error(error);
        setError("Failed to fetch college data");
        setLoading(false);
      }
    };

    fetchCollegeData();
  }, [id]);

  // Find the specific college data by matching ID
  const data = cllgData?.find((item) => item.id === parseInt(id));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <p>No college found with ID {id}</p>;
  }

  return (
    <div className="container">
      <h1 className="title">{data.collegeName}</h1>
      {imageFile && <img src={imageFile} alt="College" />} {/* Display college image */}
      <p><strong>Course Name:</strong> {data.courseName}</p>
      <p><strong>Duration:</strong> {data.duration} years</p>
      <p><strong>Course Fee:</strong> ${data.courseFee}</p>
      <p><strong>Accommodation Fee:</strong> ${data.accomodationFee}</p>
      <p><strong>Total Fee:</strong> ${data.courseFee + data.accomodationFee}</p>
      <p>{data.acNONAC ? "Yes, we have AC" : "No, we don't have AC"}</p>
    </div>
  );
}

export default CollegePage;

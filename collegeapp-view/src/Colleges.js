import React, { useContext } from "react";
import CollegeDetailCard from "./CollegeDetailCard";
import AddCollege from "./AddCollege";
import { Routes, Route } from "react-router-dom";
import { SignUpContext } from "./userSignUpContext";

function Colleges() {
  const { loginInfo } = useContext(SignUpContext);

  return (
    <Routes>
      {loginInfo ? (
        <>
          <Route path="/" element={<CollegeDetailCard />} />
          <Route path="/addCollege" element={<AddCollege />} />
        </>
      ) : (
        <p>Please log in to view college details.</p>
      )}
    </Routes>
  );
}

export default Colleges;

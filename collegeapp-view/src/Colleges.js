import React from "react";
import CollegeDetailCard from "./CollegeDetailCard";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes
import AddCollege from "./AddCollege";

function Colleges() {
  
  return (
    <div>
      <BrowserRouter>
      {/* <AddCollege/> */}
        <Routes>
        <Route path="/" element={<AddCollege/>} />
          <Route path="/colleges" element={<CollegeDetailCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Colleges;

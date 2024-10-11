import React from "react";
import CollegeDetailCard from "./CollegeDetailCard";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes
import AddCollege from "./AddCollege";

function Colleges() {
  
  return (
    <div>
      {/* <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<AddCollege/>} />
          <Route path="/colleges" element={<CollegeDetailCard />} />
        </Routes>
      </BrowserRouter> */}
      <CollegeDetailCard/>
    </div>
  );
}

export default Colleges;

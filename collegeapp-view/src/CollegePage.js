import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CllgService from "./services/CllgService";
import { SignUpContext } from "./userSignUpContext";

function CollegePage() {
  const { id } = useParams();
  const [cllgData, setCllgData] = useState(null);
  const { isLoggedIn } = useContext(SignUpContext);
  console.log(id)
  

  useEffect(() => {
    CllgService.getCllg()
      .then((res) => {
        setCllgData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
    var data=cllgData?.find(item=>item.id===parseInt(id))

  
  return (
    <div className="container">
      {cllgData !== null && data!== undefined ? (
        
            <div>
            <h1 className="title">{data.collegeName}</h1>
            <p className="text">
              <strong>Course Name:</strong> {data.courseName}
            </p>
            <p className="text">
              <strong>Duration:</strong> {data.duration}
            </p>
            <p className="text">
              <strong>Course Fee:</strong> ${data.courseFee}
            </p>
            <p className="text">
              <strong>Accomodation Fee:</strong> ${data.accomodationFee}
            </p>
            <p className="fee">
              Total Fee: ${data.courseFee + data.accomodationFee}
            </p>
            <p className={data.acNONAC === true ? 'ac-available' : 'ac-not-available'}>
              {data.acNONAC === true ? "Yes, we have AC" : "No, we don't have AC"}
            </p>
          </div>
       
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CollegePage;

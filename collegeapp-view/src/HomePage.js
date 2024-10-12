import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Colleges from "./Colleges";
import AddCollege from "./AddCollege";
import { SignUpContext } from "./userSignUpContext";

function HomePage() {
  const { loginInfo } = useContext(SignUpContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if loginInfo exists, and if the user is on login/signup route
  //   if (loginInfo && (window.location.pathname === "/" || window.location.pathname === "/login" || window.location.pathname === "/signup")) {
  //     navigate("/"); // Only navigate to home page if on login/signup routes
  //   }
  // }, [loginInfo, navigate]);

  return (
    <div>
      {!loginInfo ? (
        <div className="flex w-screen h-screen items-center justify-center overflow-hidden top-0 fixed">
          <div className="w-3/6">
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div className="flex space-y-10">
          <div className="flex-col w-full">
            <Routes>
              <Route path="/" element={<Colleges />} />
              <Route path="/addCollege" element={<AddCollege />} /> {/* Ensure route exists */}
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;

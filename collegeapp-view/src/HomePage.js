import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Colleges from "./Colleges";
import AddCollege from "./AddCollege";
import { SignUpContext } from "./userSignUpContext";
import Navbar from "./Navbar";
import CollegePage from "./CollegePage";

function HomePage() {
  const { loginInfo } = useContext(SignUpContext);
  const navigate = useNavigate();

  return (
    <div>
      {!loginInfo ? <Navbar /> : ""}

      {!loginInfo ? (
        <div className="flex w-screen h-screen justify-center overflow-hidden fixed ">
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
          {/* Hide Navbar when logged in */}
          <div className="flex-col w-full">
            <Routes>
              <Route path="*" element={<Colleges />} />
              <Route path="/addCollege" element={<AddCollege />} />
              <Route path="/collegePage/:id" element={<CollegePage />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;

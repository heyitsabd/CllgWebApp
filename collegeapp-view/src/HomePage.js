import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm";
import Colleges from "./Colleges";
import { SignUpContext } from "./userSignUpContext";

function HomePage() {
  const { loginInfo } = useContext(SignUpContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginInfo) {
      navigate("/college");
    }
  }, [loginInfo, navigate]);

  return (
    <div>
      <div className="z-40 relative mt-1">
        <Navbar />
      </div>

      <div className="flex w-screen overflow-hidden top-0 fixed">
        <div className="w-3/6">
          <Routes>
            {!loginInfo ? (
              <>
                <Route path="/" element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignUpForm />} />
              </>
            ) : (
              <Route path="/college" element={<Colleges />} />
            )}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

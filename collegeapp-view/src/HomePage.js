import { useState } from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm";
import ThreeScene from "./ThreeScene";


function HomePage() {
   const [activeForm,setActiveForm] = useState('login');

   const toggleForm=(formType)=>{
    setActiveForm(formType);
   }

  return (
    <div>
      <div className="z-40 relative">
        <Navbar onFormToggle={toggleForm} />
      </div>
      <div className="flex w-screen overflow-hidden top-0 fixed">
        <div className="w-3/6">
          {
            activeForm==='login'?<LoginForm/>:<SignUpForm/>
          }
        </div>
        <div className="w-3/6 -z-10">
          <ThreeScene />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

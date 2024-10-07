import { useState } from "react";
import "./App.css";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm";
import ThreeScene from "./ThreeScene";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Colleges from "./Colleges";


function HomePage() {
  //  const [activeForm,setActiveForm] = useState('login');

  //  const toggleForm=(formType)=>{
  //   setActiveForm(formType);
  //  }

  const [activePage,setActiveage] = useState('login');

  

  return (

    <div>
      <BrowserRouter>
      <div className="z-40 relative mt-1">
        <Navbar/>
      </div>
      
      <div className="flex w-screen overflow-hidden top-0 fixed">
      <div className="w-3/6">
        <Routes>
        
        {
          activePage==='login'?<Route path={'/'} element={<LoginForm/>} />:<Route path={'/'} element={<Colleges/>} />
        }
        <Route path={'/login'} element={<LoginForm/>} />
        <Route path={'/signup'} element={<SignUpForm/>}/>
          {/* {
            activeForm==='login'?<LoginForm/>:<SignUpForm/>
          } */}

       
        </Routes>
        </div>
        <div className="w-3/6 -z-10">
          <ThreeScene />
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default HomePage;

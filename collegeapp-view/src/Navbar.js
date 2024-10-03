import React from 'react'

function Navbar({onFormToggle}) {
    
  return (
    <div>
      <div className="flex justify-between bg-slate-800 items-center p-4 w-5/6 ml-auto mr-auto">
        <h1 className="text-3xl font-bold text-green-500">FindCollege.com</h1>
        <div className="buttons animate-fade-in">
          <button className="login-btn bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-900" onClick={()=>onFormToggle('login')} >
            Login
          </button>
          <button className="signup-btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-900" onClick={()=>onFormToggle('signup')}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

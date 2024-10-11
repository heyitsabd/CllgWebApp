import React, { useContext, useState } from 'react'
import LoginService from './services/LoginService';
import { useNavigate } from 'react-router-dom';
import { SignUpContext, SignUpProvider } from './userSignUpContext';

function LoginForm() {
  const {setLoginInfo} = useContext(SignUpContext)

  const navigate = useNavigate()

  const [loginData,setLoginData]= useState({
    userName:"",
    password:""
  })

  const handleChange=(e)=>{
    const {name,value} = e.target;
    setLoginData((prevState)=>({
      ...prevState,
      [name]:value
    }));
  }

  const loginUser = (e) => {
    e.preventDefault();
    
    LoginService.loginUser(loginData)
    .then((res) => {
      // console.log(res)
      if (res.data === "User Logged in") {  // Change to check the actual response from the backend
        console.log('Logged IN');
        setLoginInfo(true);
        navigate('/college');
    } else {
        console.log('Invalid credentials');
        // Show an error message in the UI instead of navigating to '/login'
    }
    })
      .catch((error) => {
        console.log("Error Occurred:", error);
        // Optionally, show an error message on the UI for the user
      });
  };
  
  

  return (
    <SignUpProvider>
    <div>
      <div className="flex min-h-full w- flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={loginUser} method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="userName"
                  type="text"
                  value={loginData.userName}
                  onChange={(e) => handleChange(e)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
    </SignUpProvider>
  )
}

export default LoginForm

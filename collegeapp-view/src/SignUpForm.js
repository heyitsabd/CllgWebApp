import React, { useState } from 'react';
import userSignupService from './services/SignupService';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    userName: "",
    password: "",
    isAdmin: false, // Initial state
  });

  // console.log("Submitting data:", userData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Debugging log to check the checkbox state and other fields
    // console.log(`Name: ${name}, Type: ${type}, Value: ${value}, Checked: ${checked}`);

    setUserData({
      ...userData,
      [name]: type === 'checkbox' ? checked : value, // Proper handling of checkbox
    });

    // Check if isAdmin is getting updated
    // console.log("Updated userData:", userData);
  };

  const signUpFormSubmit = (e) => {
    e.preventDefault();

    // Log final state before submission
    // console.log("Submitting user data:", userData);

    userSignupService.signUpuser(userData)
      .then((res) => {
        if (res.data === 'Saved Successfully') {
          console.log(res)
          navigate('/login');
        } else {
          console.log(res.data);
          console.log('error');
        }
      })
      .catch((error) => {
        console.log("Error" + error);
      });
  };

  return (
    <div>
      <div className="flex min-h-full w- flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={signUpFormSubmit} action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Your Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={userData.name}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="userName"
                  type="text"
                  required
                  value={userData.userName}
                  onChange={handleChange}
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
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="text"
                  value={userData.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Is Admin Checkbox */}
            <div className="flex items-center">
              <input
                id="isAdmin"
                name="isAdmin"
                type="checkbox"
                checked={userData.isAdmin}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="isAdmin" className="ml-2 block text-sm text-gray-900">
                Is Admin
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;

import React, { useContext, useEffect, useState } from 'react';
import CllgService from './services/CllgService';
import { useNavigate } from 'react-router-dom';
import { SignUpContext } from "./userSignUpContext";

function CollegeDetailCard() {
  const [cllgDetails, getCllgDetails] = useState(null);
  
  const navigate = useNavigate();
  const { setLoginInfo } = useContext(SignUpContext);
  const { isItAdmin } = useContext(SignUpContext);

  const handleOnclick = () => {
    navigate('/addCollege');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CllgService.getCllg();
      
        getCllgDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const logout = () => {
    setLoginInfo(false);
    localStorage.setItem('Login Status', false);
  };

  const goToCollegePage = (id) => {
    navigate(`/collegePage/${id}`);
  };

  return (
    <div>
      <div className="flex justify-end">
        <button onClick={logout} className="m-5 rounded-lg px-8 py-3 bg-blue-500 font-bold text-white hover:bg-blue-800">
          Log Out
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {isItAdmin ? <button onClick={handleOnclick}>Add College</button> : ''}
        {cllgDetails != null ? (
          cllgDetails.map((val, id) => (
            <div
              key={id}
              className="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-2/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2"
              onClick={() => goToCollegePage(val.id)} 
            >
              <ul
                className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400 rtl:divide-x-reverse"
                role="tablist"
              >
                <li className="w-full">
                  <button
                    type="button"
                    role="tab"
                    aria-controls="stats"
                    className="inline-block w-full p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {val.collegeName}
                    
                  </button>
                </li>
              </ul>
              <div className="border-t border-gray-200 dark:border-gray-600">
                <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800">
                  <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                    <div className="flex flex-col items-center justify-center">
                      <dd className="text-gray-500 dark:text-gray-400">{val.accomodationFee}</dd>
                      
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))
        ) : (
          'Cllg Details...'
        )}
      </div>
    </div>
  );
}

export default CollegeDetailCard;

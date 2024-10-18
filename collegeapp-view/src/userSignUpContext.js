import { createContext, useState, useEffect } from 'react';

export const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
    const [loginInfo, setLoginInfo] = useState(false);
    const [isItAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        
        const storedLoginStatus = localStorage.getItem('Login Status') === 'true';
        const storedAdminStatus = localStorage.getItem('Admin Status') === 'true';
        
        if (storedLoginStatus) {
            setLoginInfo(storedLoginStatus);
        }
        if (storedAdminStatus) {
            setIsAdmin(storedAdminStatus);
        }
    }, []);

    return (
        <SignUpContext.Provider value={{ loginInfo, setLoginInfo, isItAdmin, setIsAdmin }}>
            {children}
        </SignUpContext.Provider>
    );
};

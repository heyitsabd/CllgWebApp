import { createContext, useState } from 'react';

export const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
    const [loginInfo, setLoginInfo] = useState(false);
    
    return (
        <SignUpContext.Provider value={{ loginInfo, setLoginInfo }}>
            {children}
        </SignUpContext.Provider>
    );
};

import { BrowserRouter as Router } from "react-router-dom";
import AddCollege from "./AddCollege";
import "./App.css";
import Colleges from "./Colleges";
import HomePage from "./HomePage";
import { SignUpContext, SignUpProvider } from "./userSignUpContext";

function App() {
  return (
    <SignUpProvider>
      
        {/* <div> */}
        <Router>
          <HomePage />
        </Router>
        {/* </div> */}
        {/* <Colleges/> */}
        {/* <AddCollege/> */}
     
    </SignUpProvider>
  );
}

export default App;

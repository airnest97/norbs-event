import React from "react";
import "./App.css";
import Login from "./views/authentication/Login";
import Registration from "./views/authentication/Registration";
import { Routes, Route} from "react-router-dom";

const App = () => {
  return (
    
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/register" element={<Registration />}/>
              
            <Route path="/login" element={<Login />}/>
            </Routes>
        </div>
      </div>
      
  
  );
};

export default App;

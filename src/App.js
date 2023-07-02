
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
//import {BrowserRouter as Router , Switch, Route, Link} from "react-router-dom";
//import { Routes ,Route ,BrowserRouter} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


const showAlert = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500)
}
const toggleMode = () => {
 if(mode === 'light'){
  setMode ('dark')
  document.body.style.backgroundColor = '#032a42'
  showAlert("Dark Mode Enabled","success ")
}
  else{
    setMode('light');
    
  document.body.style.backgroundColor = 'white'
  showAlert("Light Mode Enabled","success ")
  }
}

return (
  <>
    {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils2"
        aboutText="TextAbouts"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        {/* <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact path="/"
            element={ */}
              <TextForm
                showAlert={showAlert}
                heading="Enter Text to analyze "
                mode={mode}
              />
            {/* }
          ></Route>
        </Routes> */}
      </div>
    {/* </BrowserRouter> */}
  </>
);
} 

export default App;

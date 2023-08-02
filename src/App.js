import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  //to remove body classes of colors ie, once if you select any color , if you select other color it 
  //doesn't change, so this func is written
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert(" Dark mode has been enabled", "success")
      {/*document.title = "TextUtils-Dark Mode"; //to set title when changed to dark mode
      setInterval(() => {
        document.title = 'TextUtils is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils now';
      }, 1500);*/}  //This part is to set the blinking title
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success")
      //document.title = "TextUtils-Light Mode"; // to set title when changed to light mode
    }
  }
  return (
    <>
      <Router>
      

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <div style={{ color: 'black', marginLeft: '800px'}}><strong><i>Click twice on the same color to
          toggle light and dark modes</i></strong></div>
      <Alert alert={alert}/>
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils- Word, Character counter"
            mode={mode} />} /> 
        </Routes>
      </div>
      </Router>
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
        <div className="container my-3"><TextForm showAlert={showAlert}  heading="Enter the text form" 
        mode={mode}/></div> */}
    </>  
  );
}
export default App;
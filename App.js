// import logo from './logo.svg';
import Navbar from './component/Navbar';
import TextForm from './component/Textform';
import React,{useState} from 'react';
import Alert from './component/Alert'
import './App.css';

// import About from './component/About';
// let name = "Subhra"
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
      {/* <Navbar title="Textutils2" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

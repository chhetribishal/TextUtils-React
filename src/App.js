import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {useState} from 'react'
import Alert from './components/Alert';
// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
// import About from './components/About';

function App() {
  const[Mode,setMode] = useState('light');
  const[btn,setBtn] = useState('Enable Dark Mode');

  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = ()=>{
    if(Mode ==='light'){
      setMode('dark');
      setBtn('Enable Light Mode');
      document.body.style.backgroundColor = '#043143';
      showAlert('Dark mode has been enable',"success");
      document.title = 'TextUtils-Dark Mode';
    }else{
      setMode('light');
      setBtn('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabed',"success");
      document.title = 'TextUtils-Light Mode';

    }
  }
  return (
  <>
    {/* <Router> */}
    <Navbar title = "TextUtils" aboutText='About' mode = {Mode} btntext={btn} toggleMode={toggleMode}/>
    <Alert alert ={alert}/>
    <div className="container my-3">
    {/* <Routes>
      <Route path = "/about" element={<About/>}/>
      <Route path = "/" element={<Textform heading = "Enter the text to Analyze" showAlert = {showAlert} mode = {Mode}/> }/>
      
    </Routes> */}
    <Textform heading = "Enter the text to Analyze" showAlert = {showAlert} mode = {Mode}/>
    </div>
    
    {/* </Router> */}
    
  </>
    
  );
}

export default App;

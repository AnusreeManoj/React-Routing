// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Error from './Error';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <h1>React Router</h1> */}
      <nav>
      <center>
        <button id='nav1'><Link to="/">Home</Link></button>
        <button id='nav2'><Link to="/About">About</Link></button>
        <button id='nav3'><Link to="/Service">Service</Link></button>
      </center>
      </nav>
      {/* <center><button id='prmt'><b>App Component Works</b></button></center> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Service" element={<Service/>}></Route>
        <Route path="*" element={<Error/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
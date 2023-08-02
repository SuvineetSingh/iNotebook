import Navbar from "./myComponents/Navbar";
import About from "./myComponents/About"
import Home from "./myComponents/Home"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route 
          exact path="/home"
          element={
            <Home/>
          } />
        </Routes>
        <Routes>
          <Route 
          exact path="/about" 
          element={
            <About/>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;

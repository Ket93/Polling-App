import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/navbar/navbar.js";

function App() {
  return (
    <body>
      <Router>


        <div className="App">

          <MyNavbar> </MyNavbar>

          <Routes>

          </Routes>

        </div>

      </Router>


    </body>
  );
}

export default App;

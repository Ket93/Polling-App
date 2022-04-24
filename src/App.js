import './App.css';
import Login from "./components/login/login.js";
import Play from "./components/play/play.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <body>

      <Router>

        <div className="App">

          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/play' element={<Play />} />

          </Routes>

        </div>

      </Router>

    </body>
  );
}

export default App;

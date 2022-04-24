import './App.css';
import Login from "./components/login/login.js";
import Play from "./components/play/play.js";
import Waiting from "./components/waiting/waiting.js";
import Success from "./components/success/success.js";
import Wrong from "./components/wrong/wrong.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (

    <body>

      <Router>

        <div className="App">

          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/play' element={<Play />} />
            <Route path='/waiting' element={<Waiting />} />
            <Route path='/success' element={<Success />} />
            <Route path='/wrong' element={<Wrong />} />


          </Routes>

        </div>

      </Router>

    </body>
  );
}

export default App;

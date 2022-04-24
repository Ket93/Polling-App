import "./App.css";
import Login from "./components/login/login.js";
import Play from "./components/play/play.js";
import Waiting from "./components/waiting/waiting.js";
import Success from "./components/success/success.js";
import Wrong from "./components/wrong/wrong.js";
import PollCreate from "./components/PollCreate/PollCreate.js";
import PollVerify from "./components/PollVerify/PollVerify.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


  var corres = {
    "options": ["option1", "option2", "option3", "option4"],
    "correct": -1,
  }
  
  function onSubmit(arr) {
      console.log(arr);
      corres = arr;
      console.log(corres);
  }
  


  return (
    <>
      <Router>
        <div className="App">
          <Routes>

            <Route path='/' element={<Login />} />
            <Route path='/play' element={<Play />} />
            <Route path='/waiting' element={<Waiting />} />
            <Route path='/success' element={<Success />} />
            <Route path='/wrong' element={<Wrong />} />
            <Route path='/pollcreate' element={<PollCreate onSubmit={onSubmit}/>} />
            <Route path='/verify' element={<PollVerify text={corres}/>} />


          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

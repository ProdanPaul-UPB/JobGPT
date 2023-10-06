import logo from './logo.svg';
import {Routes, Route, Router} from 'react-router-dom';

import './App.css';

import Home from "./pages/Home/Home";

function App() {

  document.title = 'JobGPT';

  return (
    <div className="App">
        <Routes path="/">
                <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;

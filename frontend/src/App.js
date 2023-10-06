import logo from './logo.svg';
import {Routes, Route, Router} from 'react-router-dom';

import './App.css';

import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";
import Notifications from "./pages/Notifications/Notifications";
import Dialog from "./pages/Dialog/Dialog";
import NavigationBar from "./components/Navbar/NavigationBar";

function App() {

  document.title = 'JobGPT';

  return (
    <div className="App">
        <Routes>
            <Route element={<NavigationBar />}>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/dialog" element={<Dialog />} />
            </Route>

        </Routes>
    </div>
  );
}

export default App;

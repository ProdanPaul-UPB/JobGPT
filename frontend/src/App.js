import logo from './logo.svg';
import {Routes, Route, Router} from 'react-router-dom';

import './App.css';

import Home from "./pages/Home/Home";
import Notifications from "./pages/Notifications/Notifications";
import NavigationBar from "./components/Navbar/NavigationBar";

import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

import OpportunitySearch from "./pages/Categories/OpportunitySearch";

import OrgSettings from "./pages/Sections/Organization/Pages/Settings/OrgSettings";

import OrganizationSidebarComponent from "./pages/Sections/Organization/OrganizationSidebarComponent";
import OrgDash from "./pages/Sections/Organization/Pages/OrgDash/OrgDash";
import OrgChat from "./pages/Chat/OrgChat/OrgChat";
import OrgDialog from "./pages/Dialog/OrgDialog/OrgDialog";

import StudentSidebarComponent from "./pages/Sections/Student/StudentSidebarComponent";
import StudDash from "./pages/Sections/Student/Pages/StudDash";
import StudChat from "./pages/Chat/StudChat/StudChat";
import StudDialog from "./pages/Dialog/StudDialog/StudDialog";

function App() {

  document.title = 'JobGPT';

  return (
    <div className="App">
        <Routes>
            <Route element={<NavigationBar />}>
                <Route path="/" element={<Home />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="dialog" element={<OrgDialog />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="confirm-emaiil" element={<Register />} />
                <Route path="opportunity/:cat" element={<OpportunitySearch />} />
            </Route>

            <Route path="organization" element={<OrganizationSidebarComponent />} >
                <Route path="dash" element={<OrgDash />} ></Route>
                <Route path="chat" element={<OrgChat />} ></Route>
                <Route path="dialog" element={<OrgDialog />} ></Route>
                <Route path="settings" element={<OrgSettings />} ></Route>
            </Route>

            <Route path="student" element={<StudentSidebarComponent />} >
                <Route path="dash" element={<StudDash />} ></Route>
                <Route path="chat" element={<StudChat />} ></Route>
                <Route path="dialog" element={<StudDialog />} ></Route>
            </Route>

        </Routes>
    </div>
  );
}

export default App;

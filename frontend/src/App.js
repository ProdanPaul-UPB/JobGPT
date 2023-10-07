import logo from './logo.svg';
import {Routes, Route, Router} from 'react-router-dom';

import './App.css';

import Home from "./pages/Home/Home";
import Notifications from "./pages/Notifications/Notifications";
import NavigationBar from "./components/Navbar/NavigationBar";

import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

import OpportunitySearch from "./pages/Categories/OpportunitySearch";

import OrgSettingsSelector from "./pages/Sections/Organization/Pages/Settings/OrgSettingsSelector";
import OrgSettings from "./pages/Sections/Organization/Pages/Settings/OrgSettings";
import OrgProfile from "./pages/Sections/Organization/Pages/Settings/OrgProfile";
import OrganizationSidebarComponent from "./pages/Sections/Organization/OrganizationSidebarComponent";
import OrgDash from "./pages/Sections/Organization/Pages/OrgDash/OrgDash";
import OrgChat from "./pages/Chat/OrgChat/OrgChat";
import OrgDialog from "./pages/Dialog/OrgDialog/OrgDialog";

import NewBroadcast from "./pages/Sections/Organization/Pages/BroadcastsManager/NewBroadcast";
import ListBroadcasts from "./pages/Sections/Organization/Pages/BroadcastsManager/ListBroadcasts";

import StudentSidebarComponent from "./pages/Sections/Student/StudentSidebarComponent";
import StudDash from "./pages/Sections/Student/Pages/StudDash/StudDash";
import StudChat from "./pages/Chat/StudChat/StudChat";
import StudDialog from "./pages/Dialog/StudDialog/StudDialog";
import SubmitRegisterCode from "./pages/Auth/Register/SubmitRegisterCode";

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
                <Route path="opportunities" element={<OpportunitySearch />} />
                <Route path="submit-register-code" element={<SubmitRegisterCode />} />
            </Route>

            <Route path="organization" element={<OrganizationSidebarComponent />} >
                <Route path="dash" element={<OrgDash />} ></Route>
                <Route path="chat" element={<OrgChat />} ></Route>
                <Route path="dialog" element={<OrgDialog />} ></Route>

                <Route path="broadcasts" element={<ListBroadcasts />} />
                <Route path="broadcasts/new" element={<NewBroadcast />} />
                <Route path="broadcasts/view/:id" element={<NewBroadcast />} />

                <Route path="jobs" element={<NewBroadcast />} />
                <Route path="jobs/new" element={<NewBroadcast />} />
                <Route path="jobs/view/:id" element={<NewBroadcast />} />

                <Route path="edu" element={<NewBroadcast />} />
                <Route path="edu/new" element={<NewBroadcast />} />
                <Route path="edu/view/:id" element={<NewBroadcast />} />

                <Route path="settings" element={<OrgSettingsSelector />} />
                <Route path="settings/org" element={<OrgSettings />} />
                <Route path="settings/profile" element={<OrgProfile />} />
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

import {Link, Outlet} from "react-router-dom";
import "./StudentSidebarComponent.scss";

import { IoSettingsOutline } from "react-icons/io5";
import {BsBriefcase, BsRobot} from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { TbBuildingCommunity, TbBuildingBroadcastTower } from "react-icons/tb";
import { BiChat } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";

import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const StudentSidebarComponent = () => {

    const dashboard_tooltip = (
        <Tooltip id="tooltip">
            <strong>Dashboard</strong>
        </Tooltip>
    );

    const home_tooltip = (
        <Tooltip id="tooltip">
            <strong>Home</strong>
        </Tooltip>
    );

    const bot_tooltip = (
        <Tooltip id="tooltip">
            <strong>JobGPT Dialog</strong>
        </Tooltip>
    );

    const stud_tooltip = (
        <Tooltip id="tooltip">
            <strong>Universities</strong>
        </Tooltip>
    );

    const chat_tooltip = (
        <Tooltip id="tooltip">
            <strong>Community Chat</strong>
        </Tooltip>
    );

    const settings_tooltip = (
        <Tooltip id="tooltip">
            <strong>Settings</strong>
        </Tooltip>
    );


    const jobs_tooltip = (
        <Tooltip id="tooltip">
            <strong>Job Offers</strong>
        </Tooltip>
    );

    return (
        <div className={"stud-wrapper"} >
            <div className={"stud-side-container"}>
                <div className={"stud-side-main"}>

                    <OverlayTrigger placement="right" overlay={home_tooltip}>
                        <div className={"stud-side-item"}>
                            <Link to={"/"} >
                                <AiOutlineHome size={30} className={"stud-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    {/*<OverlayTrigger placement="right" overlay={dashboard_tooltip}>
                        <div className={"stud-side-item"}>
                            <Link to={"/student/dash"} >
                                <AiOutlineDashboard size={30} className={"stud-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>*/}

                    <OverlayTrigger placement="right" overlay={chat_tooltip}>
                        <div className={"stud-side-item"}>
                            <Link to={"/student/chat"} >
                                <BiChat size={30} className={"stud-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={bot_tooltip}>
                        <div className={"stud-side-item"}>
                            <Link to={"/student/dialog"} >
                                <BsRobot size={30} className={"stud-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={stud_tooltip}>
                        <div className={"stud-side-item"}>
                            <Link to={"/student/edu"} >
                                <FaUniversity size={30} className={"stud-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={chat_tooltip}>
                        <div className={"stud-side-item"}>
                            <Link to={"/student/broadcasts"} >
                                <TbBuildingBroadcastTower size={30} className={"stud-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={jobs_tooltip}>
                        <div className={"org-side-item"}>
                            <Link to={"/student/jobs"} >
                                <BsBriefcase size={30} className={"org-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                </div>

                <div>
                    <OverlayTrigger placement="right" overlay={settings_tooltip}>
                        <div className={"stud-side-item"}>
                            <Link to={"/student/settings"} >
                                <IoSettingsOutline size={30} className={"stud-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>
                </div>

            </div>

            <Outlet />
        </div>
    );
}

export default StudentSidebarComponent;
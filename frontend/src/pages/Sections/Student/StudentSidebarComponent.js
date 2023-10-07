import {Link, Outlet} from "react-router-dom";
import "./StudentSidebarComponent.scss";

import { IoSettingsOutline } from "react-icons/io5";
import { BsRobot } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { TbBuildingCommunity, TbBuildingBroadcastTower } from "react-icons/tb";
import { BiChat } from "react-icons/bi";

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
            <strong>students</strong>
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

    return (
        <div className={"stud-wrapper"} >
            <div className={"stud-side-container"}>
                <div className={"stud-side-main"}>

                    <OverlayTrigger placement="right" overlay={home_tooltip}>
                        <div className={"stud-side-item"}>
                            <Link to={"/student/dash"} >
                                <AiOutlineHome size={30} className={"stud-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={dashboard_tooltip}>
                        <div className={"stud-side-item"}>
                            <Link to={"/student/dash"} >
                                <AiOutlineDashboard size={30} className={"stud-side-item-icon"} />
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
                            <Link to={"/student/communities"} >
                                <TbBuildingCommunity size={30} className={"stud-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={chat_tooltip}>
                        <div className={"stud-side-item"}>
                            <Link to={"/student/chat"} >
                                <BiChat size={30} className={"stud-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={chat_tooltip}>
                        <div className={"stud-side-item"}>
                            <Link to={"/student/chat"} >
                                <TbBuildingBroadcastTower size={30} className={"stud-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>
                </div>

                <div>
                    <OverlayTrigger placement="right" overlay={settings_tooltip}>
                        <div className={"stud-side-item"}>
                            <IoSettingsOutline size={30} className={"stud-side-item-icon"} />
                        </div>
                    </OverlayTrigger>
                </div>

            </div>

            <Outlet />
        </div>
    );
}

export default StudentSidebarComponent;
import {Link, Outlet} from "react-router-dom";
import "./OrganizationSidebarComponent.scss";

import { IoSettingsOutline } from "react-icons/io5";
import { BsRobot, BsBriefcase } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { TbBuildingCommunity, TbBuildingBroadcastTower } from "react-icons/tb";
import { BiChat } from "react-icons/bi";

import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const OrganizationSidebarComponent = () => {

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

    const org_tooltip = (
        <Tooltip id="tooltip">
            <strong>Organizations</strong>
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
        <div className={"org-wrapper"} >
            <div className={"org-side-container"}>
                <div className={"org-side-main"}>

                    <OverlayTrigger placement="right" overlay={home_tooltip}>
                        <div className={"org-side-item"}>
                            <Link to={"/organization/dash"} >
                                <AiOutlineHome size={30} className={"org-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={dashboard_tooltip}>
                        <div className={"org-side-item"}>
                            <Link to={"/organization/dash"} >
                                <AiOutlineDashboard size={30} className={"org-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={bot_tooltip}>
                        <div className={"org-side-item"}>
                            <Link to={"/organization/dialog"} >
                                <BsRobot size={30} className={"org-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={org_tooltip}>
                        <div className={"org-side-item"}>
                            <Link to={"/organization/communities"} >
                                <TbBuildingCommunity size={30} className={"org-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={chat_tooltip}>
                        <div className={"org-side-item"}>
                            <Link to={"/organization/chat"} >
                                <BiChat size={30} className={"org-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={chat_tooltip}>
                        <div className={"org-side-item"}>
                            <Link to={"/organization/chat"} >
                                <TbBuildingBroadcastTower size={30} className={"org-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>

                    <OverlayTrigger placement="right" overlay={jobs_tooltip}>
                        <div className={"org-side-item"}>
                            <Link to={"/organization/chat"} >
                                <BsBriefcase size={30} className={"org-side-item-icon"} />
                            </Link>
                        </div>
                    </OverlayTrigger>
                </div>

                <div>
                    <OverlayTrigger placement="right" overlay={settings_tooltip}>
                        <div className={"org-side-item"}>
                            <IoSettingsOutline size={30} className={"org-side-item-icon"} />
                        </div>
                    </OverlayTrigger>
                </div>

            </div>

            <Outlet />
        </div>
    );
}

export default OrganizationSidebarComponent;
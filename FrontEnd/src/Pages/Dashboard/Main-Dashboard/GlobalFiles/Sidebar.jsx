import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsBookmarkPlus, BsFillBookmarkCheckFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { TbReportMedical } from "react-icons/tb";
import { Link } from "react-router-dom";
import { ImMenu } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import { MdDashboardCustomize } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../../../Redux/auth/action";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const {
    data: { user },
  } = useSelector((state) => state.auth);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div>
        <div style={{ width: isOpen ? "200px" : "70px" }} className={`sidebar`}>
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              HMS
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <ImMenu onClick={toggle} style={{ cursor: "pointer" }} />
            </div>
          </div>
          <div className="bottomSection">
            <Link className="link" activeclassname="active" to={"/dashboard"}>
              <div className="icon">
                <MdDashboardCustomize className="mainIcon" />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                DashBoard
              </div>
            </Link>
            {user?.userType === "patient" ? (
              <>
                <Link
                  className="link"
                  activeclassname="active"
                  to={"/patientprofile"}
                >
                  <div className="icon">
                    <CgProfile className="mainIcon" />
                  </div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    Profile
                  </div>
                </Link>
                <Link
                  className="link"
                  activeclassname="active"
                  to={"/bookappointment"}
                >
                  <div className="icon">
                    <BsBookmarkPlus className="mainIcon" />
                  </div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    Book Appointment
                  </div>
                </Link>
              </>
            ) : null}
            {user?.userType === "admin" ? (
              <>
                <Link
                  className="link"
                  activeclassname="active"
                  to={"/addoctor"}
                >
                  <div className="icon">
                    <AiOutlineUserAdd className="mainIcon" />
                  </div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    Add Doctor
                  </div>
                </Link>
                <Link
                  className="link"
                  activeclassname="active"
                  to={"/addadmin"}
                >
                  <div className="icon">
                    <RiAdminLine
                      className="mainIcon"
                      style={{ color: "white" }}
                    />
                  </div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    Add Admin
                  </div>
                </Link>
                <Link
                  className="link"
                  activeclassname="active"
                  to={"/addambulance"}
                >
                  <div className="icon">
                    <FaAmbulance className="mainIcon" />
                  </div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    Add AMBU
                  </div>
                </Link>
                <Link
                  className="link"
                  activeclassname="active"
                  to={"/adminprofile"}
                >
                  <div className="icon">
                    <CgProfile className="mainIcon" />
                  </div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    Profile
                  </div>
                </Link>
              </>
            ) : null}
            {user?.userType === "doctor" ? (
              <>
                <Link
                  className="link"
                  activeclassname="active"
                  to={"/doctorprofile"}
                >
                  <div className="icon">
                    <CgProfile className="mainIcon" />
                  </div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    Profile
                  </div>
                </Link>
                <Link
                  className="link"
                  activeclassname="active"
                  to={"/patientdetails"}
                >
                  <div className="icon">
                    <FaUsers className="mainIcon" />
                  </div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    Patients
                  </div>
                </Link>
              </>
            ) : null}

            {user?.userType !== "admin" ? (
              <>
                <Link
                  className="link"
                  activeclassname="active"
                  to={"/checkappointment"}
                >
                  <div className="icon">
                    <BsFillBookmarkCheckFill className="mainIcon" />
                  </div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    My Appointments
                  </div>
                </Link>
                <Link className="link" activeclassname="active" to={"/reports"}>
                  <div className="icon">
                    <TbReportMedical className="mainIcon" />
                  </div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    Reports
                  </div>
                </Link>
              </>
            ) : null}

            <Link
              className="LogOutPath link"
              onClick={() => {
                dispatch(authLogout());
              }}
              to={"/"}
            >
              <div className="icon">
                <FiLogOut />
              </div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                Logout
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

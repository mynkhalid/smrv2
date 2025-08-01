import React, { useState } from "react";
import one from "../../../../../img/motor.png";
import two from "../../../../../img/bolan.png";
import three from "../../../../../img/deluxambulance.png";
import "./CSS/Add_Ambu.css";
import { useDispatch, useSelector } from "react-redux";
import { AmbulanceRegister } from "../../../../../Redux/auth/action";
import Sidebar from "../../GlobalFiles/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);

const Add_Ambulance = () => {
  const { data } = useSelector((store) => store.auth);

  const [ambuType, setambuType] = useState("");

  const [AmbuData, setAmbuData] = useState({
    numPlate: "",
    ambuType: "",
    pph: 0,
    driverName: "",
    driverNum: 0,
  });

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const HandleAmbuChange = (e) => {
    console.log(AmbuData);
    setAmbuData({
      ...AmbuData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleAmbuSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(AmbulanceRegister(AmbuData)).then((res) => {
      console.log("res", res);
      if (res.message === "Ambulance already exists") {
        setLoading(false);
        return notify("Ambulance Already Exists");
      }
      if (res.message === "error") {
        setLoading(false);
        return notify("Something went wrong, Please try Again");
      }
      setLoading(false);
      notify("Ambulance Added");
    });
  };

  if (data?.isAuthenticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "admin") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="mainAmbupance">
            <h1>Add Ambulance</h1>
            <div className="imagesection">
              <img
                src={one}
                alt="first_img"
                onClick={() => setambuType("Ambulance Bike")}
              />
              <img
                src={two}
                alt="first_img"
                onClick={() => setambuType("Bolan van ambulance")}
              />
              <img
                src={three}
                alt="first_img"
                onClick={() => setambuType("Hiace Deluxe Ambulance")}
              />
            </div>
            {/* ******************************************************** */}
            <form onSubmit={HandleAmbuSubmit}>
              <div>
                <label>Ambulance Type</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Select image"
                    name="ambuType"
                    value={ambuType}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Price per Hours</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="eg.200/-"
                    name="pph"
                    value={AmbuData.pph}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Ambulance Plate No.</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="eg. ABC 123"
                    name="numPlate"
                    value={AmbuData.numPlate}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Driver Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Name"
                    name="driverName"
                    value={AmbuData.driverName}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Driver Contact No</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Contact No"
                    name="driverNum"
                    value={AmbuData.driverNum}
                    onChange={HandleAmbuChange}
                    required
                  />
                </div>
              </div>
              <button type="submit" className="formsubmitbutton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Ambulance;

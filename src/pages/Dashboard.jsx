import React, { useState } from "react";
import "./Dashboard.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import logo2 from "../assets/Frame 1171275426.png";
import logo3 from "../assets/logo 2.png";
import piechartlogo3 from "../assets/ChartPieSlice-d (2).png";
import dashboardimg from "../assets/ChartPieSlice-d (3).png";
import notificationlogo from "../assets/Notifications-On.jpg";
import fullimage from "../assets/WhatsApp Image 2023-10-21 at 11.05.jpg";
import calender from "../assets/Calender-Date.png";
import cloud from "../assets/Cloud.png";
import thermometer from "../assets/Themomether.png";
import droplet from "../assets/Droplet.png";
import icons from "../assets/Frame 1171275365.jpg";
import reverselogo from "../assets/reverselogo.jpg";
import expand from "../assets/Expand.jpg";
import settinglogo from "../assets/settinglogo.jpg";
import ChartDataLabels from "chartjs-plugin-datalabels";
import piechartblack from "../assets/ChartPieSlice-d__1_-removebg-preview.png";
import dashboard2 from "../assets/ChartPieSlice-d.png";
import dashboard1img from "../assets/Frame 427319080.png";
import dashboard2img from "../assets/Frame 427319081.png";
import dashboardopenimg from "../assets/Vector (8).png";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
} from "chart.js";
import { Doughnut, Line, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
  ChartDataLabels
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        usePointStyle: true,
        boxHeight: 7,
      },
    },
    datalabels: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
};

export const options2 = {
  plugins: {
    legend: {
      position: "right",
      labels: {
        usePointStyle: true,
        boxHeight: 7,
      },
    },
    title: {
      display: true,
      text: "Capacity [KWp]",
      font: {
        size: 14,
      },
      colors: {
        color: "black",
      },
    },
  },
  maintainAspectRatio: false,
  responsive: true,
};

export const options3 = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Energy",
      data: [600, 1050, 950, 1150, 1070, 1300, 1220, 1700],
      borderColor: "rgba(50, 102, 204, 1)",
      backgroundColor: "rgba(50, 102, 204, 1)",
    },
    {
      label: "Expected [KWh]",
      data: [0, 300, 600, 300, 750, 680, 820, 500],
      borderColor: "rgba(223, 54, 20, 1)",
      backgroundColor: "rgba(223, 54, 20, 1)",
    },
    {
      label: "PR%",
      data: [200, 550, 430, 200, 270, 500, 500, 730],
      borderColor: "rgba(251, 154, 3, 1)",
      backgroundColor: "rgba(251, 154, 3, 1)",
    },
  ],
};

export const data2 = {
  labels: [["INV-1"], ["INV-2"], ["INV-3"], ["INV-4"], ["INV-5"]],
  datasets: [
    {
      label: ["100.28", "98.1", "101.37", "98.1", "102.46"],
      data: [100.28, 98.1, 101.37, 98.1, 102.46],
      backgroundColor: [
        "rgba(50, 102, 204, 1)",
        "rgba(223, 54, 20, 1)",
        "rgba(251, 154, 3, 1)",
        "rgba(16, 150, 25, 1)",
        "rgba(153, 0, 150, 1)",
      ],
      borderColor: [
        "rgba(255, 255, 255, 1)",
        "rgba(255, 255, 255, 1)",
        "rgba(255, 255, 255, 1)",
        "rgba(255, 255, 255, 1)",
        "rgba(255, 255, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const data3 = {
  labels: [
    // "13 Oct 2023                           17 Oct 2023                          21 Oct 2023",
    "13 Oct 2023   17 Oct 2023    21 Oct 2023",
  ],
  datasets: [
    {
      label: "Bar 1",
      data: [1950],
      backgroundColor: "rgba(0, 51, 153, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1700],
      backgroundColor: "rgba(0, 51, 153, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1050],
      backgroundColor: "rgba(0, 51, 153, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1800],
      backgroundColor: "rgba(0, 51, 153, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1400],
      backgroundColor: "rgba(0, 51, 153, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1050],
      backgroundColor: "rgba(0, 51, 153, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1800],
      backgroundColor: "rgba(0, 51, 153, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1700],
      backgroundColor: "rgba(0, 51, 153, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1950],
      backgroundColor: "rgba(0, 51, 153, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1800],
      backgroundColor: "rgba(0, 51, 153, 1)",
      borderWidth: 1,
    },
  ],
};

export const Dashboard = () => {
  const [mobileView, setMobileView] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  const dropDownHandler = () => {
    setDropDown((status) => !status);
  };

  const menuHandler = () => {
    setMobileView((status) => !status);
  };

  const dashboardHandler = () => {
    setDashboardOpen((status) => !status);
  };

  return (
    <div>
      {/* <div className="sm:grid sm:grid-cols-5"> */}
      <div className="contain">
        <div className={`sidebar ${mobileView === true ? "active" : ""}`}>
          <div
            style={{
              overflow: "hidden",
              padding: "1.25rem",
              height: "100%",
              // background: "#F7F7F7",
              background: "#356E35",
            }}
          >
            {/* <div className="sidebar"> */}
            {/* <img className="ml-6 w-28" src={logo2} alt="" /> */}
            <img className="logo1" src={logo2} alt="" />
            <div style={{ fontSize: "1rem", lineHeight: "2rem" }}>
              eSolar Plant Monitoring System
            </div>
            <button className="dashboard" onClick={dashboardHandler}>
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem", marginLeft: "0.1rem" }}
                src={dashboardimg}
                alt=""
              />
              Dashboard
              <img src={dashboardopenimg} className="dashboardopenimg" alt="" />
            </button>
            <img
              src={dashboard1img}
              className={`dashboardpartsimg  ${dashboardOpen ? "active" : ""}`}
              alt=""
            />
            <img
              src={dashboard2img}
              className={`dashboardpartsimg  ${dashboardOpen ? "active" : ""}`}
              alt=""
            />
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Analysis
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              PV Monitoring
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              WMS
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Energy Reporting
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Event Log Reports
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Plant Total Power Curve
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Outage
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              User Details
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Logout
            </button>
          </div>
        </div>
        <MenuOpenIcon
          className={`sidebar-overlay ${mobileView == true ? "active" : ""}`}
          onClick={menuHandler}
        />
        <div className="dashboardSidebar">
          {/* <div style={`p-5 bg-[#F7F7F7] h-full overflow-hidden `}> */}
          <div
            style={{
              overflow: "hidden",
              padding: "1.25rem",
              height: "100%",
              // background: "#F7F7F7",
              background: "#356E35",
            }}
          >
            {/* <img className="ml-6 w-28" src={logo2} alt="" /> */}
            <img
              style={{ marginLeft: "1.5rem", width: "7rem" }}
              src={logo2}
              alt=""
            />
            {/* <div className="text-xs">eSolar Plant Monitoring System</div> */}
            <div
              style={{ fontSize: "1rem", lineHeight: "2rem", color: "white" }}
            >
              eSolar Plant Monitoring System
            </div>
            {/* <button className="text-xs flex flex-row bg-[#003399] text-white w-full rounded-md mt-8 px-3 py-px"> */}
            <button className="dashboard" onClick={dashboardHandler}>
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem", marginLeft: "0.1rem" }}
                src={dashboardimg}
                alt=""
              />
              Dashboard
              <img src={dashboardopenimg} className="dashboardopenimg" alt="" />
            </button>
            {/* <div className="dashboard_parts">
              <button className="dashboard_single">
                <img src={dashboard1} className="dashboard_part_img" alt="" />
                Dashboard 1
              </button>
              <button className="dashboard_single">
                <img src={dashboard2} className="dashboard_part_img" alt="" />
                Dashboard 2
              </button>
            </div> */}
            <img
              src={dashboard1img}
              className={`dashboardpartsimg  ${dashboardOpen ? "active" : ""}`}
              alt=""
            />
            <img
              src={dashboard2img}
              className={`dashboardpartsimg  ${dashboardOpen ? "active" : ""}`}
              alt=""
            />

            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Analysis
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              PV Monitoring
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              WMS
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Energy Reporting
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Event Log Reports
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Plant Total Power Curve
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Outage
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              User Details
            </button>
            {/* <button className="text-xs flex flex-row text-black w-full rounded-md mt-2 px-3"> */}
            <button className="analysis">
              {/* <img className="mr-2" src={piechartlogo3} alt="" /> */}
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Logout
            </button>
          </div>
        </div>

        {/* <div className="sm:col-span-4"> */}
        <div className="chartandnews">
          {/* <div className="sm:grid sm:grid-rows-8"> */}
          <div
            style={{
              "@media (min-width: 640px)": {
                display: "grid",
                gridTemplateRows: "repeat(8, minmax(0, 1fr))",
              },
            }}
          >
            {/* <div className="sm:row-span-2 bg-[#F7F7F7]"> */}
            <div
              style={{
                background: "#F7F7F7",
                "@media (min-width: 640px)": { gridRow: "span 2 / span 2" },
              }}
            >
              {/* <div className="border border-1 border-b-gray-500 py-1 px-2 font-semibold"> */}
              <div
                style={{
                  paddingTop: "0.25rem",
                  paddingBottom: "0.25rem",
                  paddingLeft: "0.5rem",
                  paddingRight: "0.5rem",
                  borderWidth: "1px",
                  fontWeight: 600,
                }}
              >
                {/* <div className="flex flex-row "> */}
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="menuIcon">
                    <MenuIcon onClick={menuHandler} />
                  </div>
                  {/* <img className="m-2 sm:m-1" src={piechartlogo3} alt="" /> */}
                  <img
                    style={{
                      margin: "0.5rem",
                      "@media (min-width: 640px)": { margin: "0.25rem" },
                    }}
                    src={piechartblack}
                    alt=""
                  />
                  {/* <div className="m-1 sm:ml-2 mr-1 md:mr-10 font-bold"> */}
                  <div
                    style={{
                      margin: "0.25rem",
                      marginRight: "0.25rem",
                      fontWeight: 700,
                      "@media (min-width: 640px)": { marginLeft: "0.5rem" },
                      "@media (min-width: 768px)": { marginRight: "2.5rem" },
                    }}
                  >
                    Dashboard
                  </div>
                  {/* <div className="max-[640px]:hidden ml-1 md:ml-96">
                    Last log time : 21/10/2023{" "}
                  </div> */}
                  {/* <div
                    style={{
                      marginLeft: "100px",
                      "@media (min-width: 768px)": { marginLeft: "100px" },
                    }}
                  > */}
                  <div className="lastLogTime">Last log time : 21/10/2023 </div>
                  {/* <div className="max-[640px]:hidden ml-4"> 03:45 AM</div> */}
                  <div className="time1"> 03:45 AM</div>
                  <div
                    onClick={dropDownHandler}
                    // className=" ml-28 sm:ml-3 border border-1 rounded-md p-1 px-3 bg-white shadow-inner"
                    className="currentime1"
                  >
                    00:00:00
                  </div>
                  <img
                    // className="h-5 mt-2 ml-5 md:ml-9"
                    style={{
                      marginTop: "0.5rem",
                      marginLeft: "1rem",
                      height: "1.25rem",
                      "@media (min-width: 768px)": { marginLeft: "2.25rem" },
                    }}
                    src={notificationlogo}
                    alt=""
                  />
                  {/* <img className="h-7 ml-5 md:ml-9" src={logo2} alt="" /> */}
                  <img
                    style={{
                      height: "1.75rem",
                      marginLeft: "1rem",
                      "@media (min-width: 768px)": { marginLeft: "2.25rem" },
                    }}
                    src={logo3}
                    alt=""
                  />
                </div>

                <div className={`dropDown ${dropDown == true ? "active" : ""}`}>
                  {/* <div className="border border-1 bg-white w-32 max-w-[128px] py-1 px-2 rounded-md">
                    Last log time : 21/10/2023 03:45 AM
                  </div> */}
                  <div className="lastlogtime2">
                    Last log time : 21/10/2023 03:45 AM
                  </div>
                </div>
                <div className="" />
              </div>
              {/* <div className="flex flex-row border border-1 border-gray-200 shadow-md rounded overflow-hidden text-sm font-semibold px-1 py-1 m-1 bg-[#D4E2FF] font-['Inter']"> */}
              <div className="currentaffairs">
                {/* <div className="mr-2 text-[#FF0000]">ms</div> */}
                <div style={{ marginRight: "0.5rem", color: "#FF0000" }}>
                  ms
                </div>
                {/* <div className="text-[#003399]"> */}
                <div style={{ color: "#356E35" }}>
                  <marquee>
                    Industrial Energy Management System Flow Meter & Ground
                    Water Monitoring Smart Metering and DLMS Solution Industrial
                    Energy Management System Flow
                  </marquee>
                </div>
              </div>
              {/* <div className="sm:grid sm:grid-cols-7 font-semibold"> */}
              <div className="plantname">
                {/* <div className="sm:col-span-2 border border-1 border-gray-200 shadow-md rounded-2xl overflow-hidden p-5 m-1 bg-white"> */}
                <div className="plant1">
                  <div>Gulati Oil India Pvt Ltd</div>
                  <div>Plant Capacity : 500.31 kWp</div>
                </div>
                <div className="plant1">
                  <div>Gulati Oil India Pvt Ltd</div>
                  <div>Plant Capacity : 500.31 kWp</div>
                </div>
                {/* <img className="sm:col-span-3 sm:h-28" src={fullimage} alt="" /> */}
                <img className="plantimage" src={fullimage} alt="" />
              </div>
              {/* <div className="flex justify-end"> */}
              <div className="tabs">
                Dashboard/Default
                {/* <div style={{ display: "flex", justifyContent: "flex-end" }}> */}
                <div className="tabs_style">
                  {/* <button className="bg-white px-2 hover:bg-white">Tab 1</button>
                <button className="px-2 hover:bg-white">Tab 2</button>
                <button className="mr-10 px-2 hover:bg-white">Tab 3</button> */}
                  <button
                    style={{
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    Tab 1
                  </button>
                  <button className="tab2">Tab 2</button>
                  <button className="tab3">Tab 3</button>
                </div>
              </div>
            </div>
            {/* <div className="sm:row-span-6 pl-1 sm:pl-3 pr-1 sm:pr-5 grid grid-rows-12"> */}
            <div className="allcharts">
              <div className="statusbox">
                <img className="calender" src={calender} alt="" />

                <div className="chartstime">
                  10 : 27 AM Saturday, October21, 2023
                </div>
                <img src={cloud} alt="" />
                <div className="weather">Current Weather</div>
                <img src={thermometer} alt="" />

                <div className="avg">Today's AVG PR : 21 Oct 2023</div>
                <img src={thermometer} alt="" />

                <div className="avg">Temperature : 25.4C</div>
                <img src={droplet} alt="" />
                <div className="humidity">Humidity : 36%</div>
              </div>

              <div className="charts">
                <img className="chart1" src={icons} alt="" />

                <div className="capacities">
                  <div className="capacity_single">
                    <div className="capacity_title">Capacity</div>
                    <div className="capacity_text">
                      <div className="capacity_single_text">
                        <div className="capacity_start_text">DC</div>
                        <div className="capacity_end_text">650.3 (KWp)</div>
                      </div>
                      <div className="capacity_single_text">
                        <div className="capacity_start_text">AC</div>
                        <div className="capacity_end_text">650.3 (KWp)</div>
                      </div>
                      <div className="capacity_single_text">
                        <div className="capacity_start_text">AC</div>
                        <div className="capacity_end_text">650.3 (KWp)</div>
                      </div>
                    </div>
                  </div>
                  <div className="capacity_single">
                    <div className="capacity_title">Capacity</div>
                    <div className="capacity_text">
                      <div className="capacity_single_text">
                        <div className="capacity_start_text">DC</div>
                        <div className="capacity_end_text">650.3 (KWp)</div>
                      </div>
                      <div className="capacity_single_text">
                        <div className="capacity_start_text">AC</div>
                        <div className="capacity_end_text">650.3 (KWp)</div>
                      </div>
                      <div className="capacity_single_text">
                        <div className="capacity_start_text">AC</div>
                        <div className="capacity_end_text">650.3 (KWp)</div>
                      </div>
                    </div>
                  </div>
                  <div className="capacity_single">
                    <div className="capacity_title">Capacity</div>
                    <div className="capacity_text">
                      <div className="capacity_single_text">
                        <div className="capacity_start_text">DC</div>
                        <div className="capacity_end_text">650.3 (KWp)</div>
                      </div>
                      <div className="capacity_single_text">
                        <div className="capacity_start_text">AC</div>
                        <div className="capacity_end_text">650.3 (KWp)</div>
                      </div>
                      <div className="capacity_single_text">
                        <div className="capacity_start_text">AC</div>
                        <div className="capacity_end_text">650.3 (KWp)</div>
                      </div>
                    </div>
                  </div>
                  <div className="capacity_single">
                    <div className="capacity_title">Capacity</div>
                    <div className="capacity_text">
                      <div className="capacity_single_text">
                        <div className="capacity_start_text">DC</div>
                        <div className="capacity_end_text">650.3 (KWp)</div>
                      </div>
                      <div className="capacity_single_text">
                        <div className="capacity_start_text">AC</div>
                        <div className="capacity_end_text">650.3 (KWp)</div>
                      </div>
                      <div className="capacity_single_text">
                        <div className="capacity_start_text">AC</div>
                        <div className="capacity_end_text">650.3 (KWp)</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="chart2">
                  <div className="chart2title">
                    <div>Inverter Wise Capacity [KWp]</div>
                    <img
                      className="ml-1 sm:ml-28 h-4 mt-1"
                      src={calender}
                      alt=""
                    />
                    <div className="ml-1 sm:ml-3 rounded-md p-1 px-3 bg-white shadow-inner">
                      January
                    </div>
                    <div className="m-1">to</div>
                    <div className="ml-1 sm:ml-3 rounded-md p-1 px-3 bg-white shadow-inner">
                      August
                    </div>
                    <img className="ml-2 mt-1 h-4" src={reverselogo} alt="" />
                    <img className="ml-1 sm:ml-52 h-5" src={expand} alt="" />
                    <img className="h-5" src={settinglogo} alt="" />
                  </div>
                  
                  <div className="linechart">
                    <Line className="ChartBox" options={options} data={data} />
                  </div>
                </div> */}
                {/* <div className="h-48 border border-1 border-gray-200 shadow-md rounded-md overflow-hidden m-1 bg-white"> */}
                {/* <div className="text-xs border border-1 border-gray-200  font-semibold shadow-md rounded-xl overflow-hidden px-1 m-1 bg-white flex flex-row"> */}
                {/* <div className="h-48 border border-1 border-gray-200 shadow-md rounded-md m-1 sm:p-2 bg-white"> */}
                <div className="">
                  <div className="chart3title">
                    <div>Inverter Wise Capacity [KWp]</div>
                    <img
                      className="ml-28 sm:ml-24 h-4 mt-px"
                      src={reverselogo}
                      alt=""
                    />
                    <img className="h-5" src={settinglogo} alt="" />
                  </div>

                  <div className="doughnutchart">
                    <Doughnut options={options2} data={data2} />
                  </div>
                </div>
                {/* <div className="sm:col-span-3 font-semibold"> */}
                <div className="chart4">
                  {/* <div className="text-xs sm:col-span-3 border border-1 border-gray-200 shadow-md rounded-md overflow-hidden px-4 m-1 bg-white flex flex-row"> */}
                  <div className="chart4title">
                    <div>Inverter Wise Capacity [KWp]</div>
                    <img
                      className=" ml-0.5 sm:ml-10 h-4 mt-1"
                      src={calender}
                      alt=""
                    />
                    <div className="ml-px sm:ml-3 rounded-md p-1 px-3 bg-white shadow-inner">
                      12/Oct/2023
                    </div>
                    <div className="m-0.5 sm:m-1">to</div>
                    <div className="ml-0.5 sm:ml-3 rounded-md p-1 px-3 bg-white shadow-inner">
                      21/Oct/2023
                    </div>
                    <img className="ml-2 mt-1 h-4" src={reverselogo} alt="" />
                    <img className="ml-1 sm:ml-40 h-5" src={expand} alt="" />
                    <img className="h-5" src={settinglogo} alt="" />
                  </div>
                  {/* <div className="h-48 border border-1 border-gray-200 shadow-md rounded-md overflow-hidden m-1 bg-white"> */}
                  <div className="barchart">
                    <Bar options={options3} data={data3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

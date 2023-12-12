import React, { useState } from "react";
import "./Dashboard.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import logo2 from "../assets/Frame 1171275426.png";
import logo3 from "../assets/logo 2.png";
import piechartlogo3 from "../assets/ChartPieSlice-d (2).png";
import dashboardpart1img from "../assets/ChartPieSlice-d.png";
import dashboardpart2img from "../assets/ChartPieSlice-d (1).png";
import dashboardimg from "../assets/ChartPieSlice-d (3).png";
import notificationlogo from "../assets/Notifications-On.jpg";
import fullimage from "../assets/WhatsApp Image 2023-10-21 at 11.05.jpg";
import calender from "../assets/Calender-Date.png";
import cloud from "../assets/Cloud.png";
import thermometer from "../assets/Themomether.png";
import droplet from "../assets/Droplet.png";
import icons from "../assets/Frame 1171275365.png";
import reverselogo from "../assets/reverselogo.jpg";
import expand from "../assets/Expand.jpg";
import settinglogo from "../assets/settinglogo.jpg";
import ChartDataLabels from "chartjs-plugin-datalabels";
import piechartblack from "../assets/ChartPieSlice-d__1_-removebg-preview.png";
import dashboardopenimg from "../assets/Vector (8).png";
import "chartjs-plugin-datalabels";
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
import { Doughnut, Line, Bar, Pie } from "react-chartjs-2";

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

export const options4 = {
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        boxHeight: 10,
      },
    },
    datalabels: {
      color: "white",
    },
  },
  cutoutPercentage: 30,
  maintainAspectRatio: false,
  responsive: true,
};

export const options5 = {
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
      backgroundColor: "rgba(53, 110, 53, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1700],
      backgroundColor: "rgba(53, 110, 53, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1050],
      backgroundColor: "rgba(53, 110, 53, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1800],
      backgroundColor: "rgba(53, 110, 53, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1400],
      backgroundColor: "rgba(53, 110, 53, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1050],
      backgroundColor: "rgba(53, 110, 53, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1800],
      backgroundColor: "rgba(53, 110, 53, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1700],
      backgroundColor: "rgba(53, 110, 53, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1950],
      backgroundColor: "rgba(53, 110, 53, 1)",
      borderWidth: 1,
    },
    {
      label: "Bar 1",
      data: [1800],
      backgroundColor: "rgba(53, 110, 53, 1)",
      borderWidth: 1,
    },
  ],
};

export const data4 = {
  labels: ["INV-1", "INV-2", "INV-3", "INV-4", "INV-5"],
  datasets: [
    {
      label: "# of Votes",
      data: [237, 727, 490],
      backgroundColor: [
        "rgba(227, 87, 58, 1)",
        "rgba(93, 41, 118, 1)",
        "rgba(35, 125, 41, 1)",
      ],
      offset: [25, 0, 0],
    },
  ],
};

export const data5 = {
  labels: [
    // "13 Oct 2023                           17 Oct 2023                          21 Oct 2023",
    "13 Oct 2023",
    "17 Oct 2023",
    "17 Oct 2023",
    "17 Oct 2023",
    "17 Oct 2023",
    "17 Oct 2023",
    "17 Oct 2023",
    "17 Oct 2023",
    "21 Oct 2023",
  ],
  datasets: [
    {
      label: "Dataset 1",
      data: [1200, 1800, 1250, 1950, 1800, 1800, 1800, 1800, 1800],
      backgroundColor: "rgba(53, 110, 53, 1)",
      borderWidth: 1,
    },
    {
      label: "Dataset 2",
      data: [1700, 1950, 1800, 1400, 1900, 1900, 1900, 1900, 1900],
      backgroundColor: "rgba(91, 136, 117, 1)",
      borderWidth: 1,
    },
  ],
};

export const Dashboard = () => {
  const [mobileView, setMobileView] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [dayReport, setDayReport] = useState(true);
  const [monthReport, setMonthReport] = useState(false);
  const [yearReport, setYearReport] = useState(false);

  const dropDownHandler = () => {
    setDropDown((status) => !status);
  };

  const menuHandler = () => {
    setMobileView((status) => !status);
  };

  const dashboardHandler = () => {
    setDashboardOpen((status) => !status);
  };

  const tab1handler = () => {
    setTab1((status) => true);
    setTab2((status) => false);
    setTab3((status) => false);
  };

  const tab2handler = () => {
    setTab2((status) => true);
    setTab1((status) => false);
    setTab3((status) => false);
  };

  const tab3handler = () => {
    setTab2((status) => false);
    setTab1((status) => false);
    setTab3((status) => true);
  };

  const dayreporthandler = () => {
    setDayReport(true);
    setMonthReport(false);
    setYearReport(false);
  };

  const monthreporthandler = () => {
    setDayReport(false);
    setMonthReport(true);
    setYearReport(false);
  };

  const yearreporthandler = () => {
    setDayReport(false);
    setMonthReport(false);
    setYearReport(true);
  };

  return (
    <div>
      <div className="contain">
        <div className={`sidebar ${mobileView === true ? "active" : ""}`}>
          <div
            style={{
              overflow: "hidden",
              padding: "1.25rem",
              height: "100%",
              background: "#356E35",
            }}
          >
            <img className="logo1" src={logo2} alt="" />
            <div style={{ fontSize: "1rem", lineHeight: "2rem" }}>
              eSolar Plant Monitoring System
            </div>
            <button className="dashboard" onClick={dashboardHandler}>
              <img
                style={{ marginRight: "0.5rem", marginLeft: "1rem" }}
                src={dashboardimg}
                alt=""
              />
              Dashboard
              <img src={dashboardopenimg} className="dashboardopenimg" alt="" />
            </button>
            <div
              className={`dashboardpartsimg  ${dashboardOpen ? "active" : ""}`}
            >
              <img
                src={dashboardpart1img}
                className="dashboardpartimg"
                alt=""
              />
              Dashboard
            </div>

            <div
              className={`dashboardparts2img  ${dashboardOpen ? "active" : ""}`}
            >
              <img
                src={dashboardpart2img}
                className="dashboardpartimg"
                alt=""
              />
              Dashboard
            </div>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Analysis
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              PV Monitoring
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              WMS
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Energy Reporting
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Event Log Reports
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Plant Total Power Curve
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Outage
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              User Details
            </button>
            <button className="analysis">
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
          <div
            style={{
              overflow: "hidden",
              padding: "1.25rem",
              height: "100%",
              background: "#356E35",
            }}
          >
            <img
              style={{ marginLeft: "3.4rem", width: "7rem" }}
              src={logo2}
              alt=""
            />
            <div
              style={{ fontSize: "1rem", lineHeight: "2rem", color: "white" }}
            >
              eSolar Plant Monitoring System
            </div>
            <button className="dashboard" onClick={dashboardHandler}>
              <img
                style={{ marginRight: "0.5rem", marginLeft: "0.8rem" }}
                src={dashboardimg}
                alt=""
              />
              Dashboard
              <img src={dashboardopenimg} className="dashboardopenimg" alt="" />
            </button>
            <div
              className={`dashboardpartsimg  ${dashboardOpen ? "active" : ""}`}
            >
              <img
                src={dashboardpart1img}
                className="dashboardpartimg"
                alt=""
              />
              Dashboard
            </div>

            <div
              className={`dashboardparts2img  ${dashboardOpen ? "active" : ""}`}
            >
              <img
                src={dashboardpart2img}
                className="dashboardpartimg"
                alt=""
              />
              Dashboard
            </div>

            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Analysis
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              PV Monitoring
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              WMS
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Energy Reporting
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Event Log Reports
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Plant Total Power Curve
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Outage
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              User Details
            </button>
            <button className="analysis">
              <img
                style={{ marginRight: "0.5rem" }}
                src={piechartlogo3}
                alt=""
              />
              Logout
            </button>
          </div>
        </div>

        <div className="chartandnews">
          <div
            style={{
              "@media (min-width: 640px)": {
                display: "grid",
                gridTemplateRows: "repeat(8, minmax(0, 1fr))",
              },
            }}
          >
            <div
              style={{
                background: "#F7F7F7",
                "@media (min-width: 640px)": { gridRow: "span 2 / span 2" },
              }}
            >
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
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="menuIcon">
                    <MenuIcon onClick={menuHandler} />
                  </div>
                  <img
                    style={{
                      margin: "0.5rem",
                      "@media (min-width: 640px)": { margin: "0.25rem" },
                    }}
                    src={piechartblack}
                    alt=""
                  />
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
                  <div className="lastLogTime">Last log time : 21/10/2023 </div>
                  <div className="time1"> 03:45 AM</div>
                  <div onClick={dropDownHandler} className="currentime1">
                    00:00:00
                  </div>
                  <img
                    style={{
                      marginTop: "0.5rem",
                      marginLeft: "1rem",
                      height: "1.25rem",
                      "@media (min-width: 768px)": { marginLeft: "2.25rem" },
                    }}
                    src={notificationlogo}
                    alt=""
                  />
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
                  <div className="lastlogtime2">
                    Last log time : 21/10/2023 03:45 AM
                  </div>
                </div>
                <div className="" />
              </div>
              <div className="currentaffairs">
                <div style={{ marginRight: "0.5rem", color: "#FF0000" }}>
                  ms
                </div>
                <div style={{ color: "#356E35" }}>
                  <marquee>
                    Industrial Energy Management System Flow Meter & Ground
                    Water Monitoring Smart Metering and DLMS Solution Industrial
                    Energy Management System Flow
                  </marquee>
                </div>
              </div>
              <div className="plantname">
                <div className="plant1">
                  <div>Gulati Oil India Pvt Ltd</div>
                  <div>Plant Capacity : 500.31 kWp</div>
                </div>
                <div className="plant1">
                  <div>Gulati Oil India Pvt Ltd</div>
                  <div>Plant Capacity : 500.31 kWp</div>
                </div>
                <img className="plantimage" src={fullimage} alt="" />
              </div>
              <div className="tabs">
                <div className="tabs_first_part">Dashboard/Default</div>
                <div className="tabs_style">
                  <button
                    style={{
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                      backgroundColor: tab1
                        ? "rgba(238, 238, 238, 1)"
                        : "rgba(255, 255, 255, 0)",
                      borderWidth: tab1 ? "1px 1px 0px 1px" : "0",
                      borderColor: "#356E35",
                      borderStyle: "solid",
                      fontSize: "13px",
                      color: "#356E35",
                    }}
                    onClick={tab1handler}
                  >
                    Tab 1
                  </button>
                  <button
                    className="tab2button"
                    style={{
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                      backgroundColor: tab2
                        ? "rgba(238, 238, 238, 1)"
                        : "rgba(255, 255, 255, 0)",
                      borderWidth: tab2 ? "1px 1px 0px 1px" : "0",
                      borderColor: "#356E35",
                      borderStyle: "solid",
                      fontSize: "13px",
                      color: "#356E35",
                    }}
                    onClick={tab2handler}
                  >
                    Tab 2
                  </button>
                  <button
                    className="tab3button"
                    style={{
                      paddingLeft: "0.5rem",
                      paddingRight: "0.5rem",
                      backgroundColor: tab3
                        ? "rgba(238, 238, 238, 1)"
                        : "rgba(255, 255, 255, 0)",
                      borderWidth: tab3 ? "1px 1px 0px 1px" : "0",
                      borderColor: "#356E35",
                      borderStyle: "solid",
                      fontSize: "13px",
                      color: "#356E35",
                    }}
                    onClick={tab3handler}
                  >
                    Tab 3
                  </button>
                </div>
              </div>
            </div>
            <div className="allcharts">
              <div className="statusbox">
                <img className="calender" src={calender} alt="" />

                <div className="chartstime">
                  10 : 27 AM Saturday, October21, 2023
                </div>
                <img src={cloud} alt="" />
                <div className="weather">Current Weather</div>
                <img src={thermometer} className="status_thermometer" alt="" />

                <div className="avg">Today's AVG PR : 21 Oct 2023</div>
                <img src={thermometer} alt="" />

                <div className="avg">Temperature : 25.4C</div>
                <img src={droplet} className="status_droplet" alt="" />
                <div className="humidity">Humidity : 36%</div>
              </div>

              <div className={`charts ${tab1 ? "active" : ""}`}>
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

                <div className="">
                  <div className="chart3title">
                    <div style={{ marginLeft: "2px" }}>
                      Inverter Wise Capacity [KWp]
                    </div>
                    <img
                      className="doughnut_reverse_image"
                      src={reverselogo}
                      alt=""
                    />
                    <img
                      className="doughnut_setting_image"
                      src={settinglogo}
                      alt=""
                    />
                  </div>

                  <div className="doughnutchart">
                    <Doughnut options={options2} data={data2} />
                  </div>
                </div>

                <div className="chart4">
                  <div className="chart4title">
                    <div className="bar_page_1_title">
                      Inverter Wise Capacity [KWp]
                    </div>
                    <image
                      className="bar_page_1_calender_image"
                      src={calender}
                      alt=""
                    />
                    <div className="bar_page_1_first_date">12/Oct/2023</div>
                    <div className="bar_page_1_to">to</div>
                    <div className="bar_page_1_second_date">21/Oct/2023</div>
                    <img
                      className="bar_page_1_reverse_image"
                      src={reverselogo}
                      alt=""
                    />
                    <img
                      // className="ml-1 sm:ml-[105px] h-5"
                      className="bar_page_1_expand_image"
                      src={expand}
                      alt=""
                    />
                    <img
                      className="bar_page_1_setting_image"
                      src={settinglogo}
                      alt=""
                    />
                  </div>

                  <div className="barchart">
                    <Bar options={options3} data={data3} />
                  </div>
                </div>
              </div>
              <div className={`tab2 ${tab2 ? "active" : ""}`}>
                <div className="tab2_first_part">
                  <div>
                    <div className="chart3title">
                      <div>Total Instant Power [KW]</div>
                      <img
                        className="pie_reverse_image"
                        src={reverselogo}
                        alt=""
                      />
                      <img
                        className="pie_setting_image"
                        src={settinglogo}
                        alt=""
                      />
                    </div>
                    <div className="piechart">
                      <Pie options={options4} data={data4} />
                    </div>
                  </div>
                  <div>
                    <div className="chart4title">
                      <div className="bar_2_tab_2_inverter">
                        Inverter Wise Capacity [KWp]
                      </div>
                      <img
                        className="bar_2_tab_2_calender"
                        src={calender}
                        alt=""
                      />
                      <div className="bar_2_tab_2_first_date">12/Oct/2023</div>
                      <div className="bar_2_tab_2_to">to</div>
                      <div className="bar_2_tab_2_second_date">21/Oct/2023</div>
                      <img
                        className="bar_2_tab_2_reverse_img"
                        src={reverselogo}
                        alt=""
                      />
                      <img
                        className="bar_2_tab_2_expand_img"
                        src={expand}
                        alt=""
                      />
                      <img
                        className="bar_2_tab_2_setting_img"
                        src={settinglogo}
                        alt=""
                      />
                    </div>
                    <div className="barchart">
                      <Bar options={options3} data={data3} />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="chart3title">
                    <div>Peak KW vs KWp</div>
                    <img
                      // className="ml-36 sm:ml-[880px] h-4 mt-px"
                      className="bar_3_tab_2_reverse_img"
                      src={reverselogo}
                      alt=""
                    />
                    {/* <img className="ml-1 sm:ml-2 h-5" src={expand} alt="" /> */}
                    <img
                      className="bar_3_tab_2_expand_img"
                      src={expand}
                      alt=""
                    />
                    <img
                      className="bar_3_tab_2_setting_img"
                      src={settinglogo}
                      alt=""
                    />
                  </div>
                  <div className="barchart">
                    <Bar options={options5} data={data5} />
                  </div>
                </div>
              </div>
              <div className={`tab3 ${tab3 ? "active" : ""}`}>
                <div className="tab3_first_part">
                  <div className="plant_performance">Plant Performance</div>
                  <div className="excel_btn">
                    <button>Excel</button>
                  </div>
                  <div className="pdf_btn">
                    <button>PDF</button>
                  </div>
                </div>
                <div className="tab3_second_part">
                  <div className="tab3_date">
                    <div className="tab3_first_date">21/Oct/2023</div>
                    <div className="tab3_second_date">27/Oct/2023</div>
                    <div className="search">
                      <button>Search</button>
                    </div>
                  </div>
                  <div className="tab3_reports">
                    <div className="sortby">Sort by:</div>
                    <button
                      style={{
                        borderColor: "#a5a5a5",
                        backgroundColor: dayReport ? "#fdf8e4" : "white",
                        padding: "5px 10px",
                        borderRadius: "2px 2px 0px 0px",
                        borderWidth: dayReport ? "2px 1px 0px 1px" : "0px",
                        fontSize: "12px",
                        fontWeight: "500",
                        marginTop: "10px",
                      }}
                      onClick={dayreporthandler}
                    >
                      Day Reports
                    </button>
                    <button
                      style={{
                        borderColor: "#a5a5a5",
                        backgroundColor: monthReport ? "#fdf8e4" : "white",
                        padding: "5px 10px",
                        borderRadius: "2px 2px 0px 0px",
                        borderWidth: monthReport ? "2px 1px 0px 1px" : "0px",
                        fontSize: "12px",
                        fontWeight: "500",
                        marginTop: "10px",
                      }}
                      onClick={monthreporthandler}
                    >
                      Month Reports
                    </button>
                    <button
                      style={{
                        borderColor: "#a5a5a5",
                        backgroundColor: yearReport ? "#fdf8e4" : "white",
                        padding: "5px 10px",
                        borderRadius: "2px 2px 0px 0px",
                        borderWidth: yearReport ? "2px 1px 0px 1px" : "0px",
                        fontSize: "12px",
                        fontWeight: "500",
                        marginTop: "10px",
                      }}
                      onClick={yearreporthandler}
                    >
                      Year Reports
                    </button>
                  </div>
                </div>
                <div className="tab3_third_part">
                  <div className="tab3_table">
                    <table>
                      <tr>
                        <th>Date</th>
                        <th>Total Inverters</th>
                        <th>Total Gen [KWh]</th>
                        <th>Plant CUF</th>
                        <th>Plant PR</th>
                        <th>Specific Yield</th>
                        <th>Solar Insulation</th>
                        <th>Expected Generation</th>
                        <th>Peak Radiation</th>
                        <th>Peak Radiation Time</th>
                      </tr>
                      <tr>
                        <td>21/09/2023</td>
                        <td>1</td>
                        <td>465.70</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                      </tr>
                      <tr>
                        <td>21/09/2023</td>
                        <td>1</td>
                        <td>465.70</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                      </tr>
                      <tr>
                        <td>21/09/2023</td>
                        <td>1</td>
                        <td>465.70</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                      </tr>
                      <tr>
                        <td>21/09/2023</td>
                        <td>1</td>
                        <td>465.70</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                      </tr>
                      <tr>
                        <td>21/09/2023</td>
                        <td>1</td>
                        <td>465.70</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                      </tr>
                      <tr>
                        <td>21/09/2023</td>
                        <td>1</td>
                        <td>465.70</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                      </tr>
                      <tr>
                        <td>21/09/2023</td>
                        <td>1</td>
                        <td>465.70</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                      </tr>
                      <tr>
                        <td>21/09/2023</td>
                        <td>1</td>
                        <td>465.70</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                      </tr>
                      <tr>
                        <td>21/09/2023</td>
                        <td>1</td>
                        <td>465.70</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                      </tr>
                      <tr>
                        <td>21/09/2023</td>
                        <td>1</td>
                        <td>465.70</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                        <td>39.593</td>
                      </tr>
                    </table>
                  </div>
                  <div className="page_bar">
                    <div className="page_bar_first">
                      <button>First</button>
                    </div>
                    <div className="page_bar_prev">
                      <button>Prev</button>
                    </div>
                    <div className="page_bar_1">
                      <button>1</button>
                    </div>
                    <div className="page_bar_other">
                      <button>2</button>
                    </div>
                    <div className="page_bar_other">
                      <button>3</button>
                    </div>
                    <div className="page_bar_other">
                      <button>4</button>
                    </div>
                    <div className="page_bar_other">
                      <button>5</button>
                    </div>
                    <div className="page_bar_next">
                      <button>Next</button>
                    </div>
                    <div className="page_bar_last">
                      <button>Last</button>
                    </div>
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

import React from "react";
// import background from "../assets/solar-panel-close-up 1.png";
import logo from "../assets/logo 1.jpg";

import playstorelogo from "../assets/google-play-store.jpg";
import linkedinlogo from "../assets/lin.jpg";
import "./login.css";

export const Login = () => {
  return (
    // {/* <img src={backgroundimage} alt="" /> */}
    // {/* <p style="background-image: url();"></p> */}
    <div className="background">
      {/* <div className="bg-[url('/public/img/solar-panel-close-up 1.png')] bg-cover bg-no-repeat w-auto h-auto flex-auto justify-center items-center"> */}
      {/* {// style={{ */}
      {/* //   background-image: `url(/solar-panel-close-up 1)`,

        // }} */}
      <div className="grid grid-cols-1 lg:grid-cols-8 p-5 m-3 sm:m-5 md:m-20 border-4 rounded-3xl bg-black/[.28]">
        <div className="border border-1 border-gray-200 lg:col-span-3 shadow-md rounded-2xl overflow-hidden p-3 md:p-10 bg-white">
          <div className="flex flex-row">
            <img className="w-20 h-12" src={logo} alt="" />
            <div class="text-end">
              <div className="text-3xl font-bold">Hey,</div>
              <div className="text-3xl font-bold">Welcome Back!</div>
              <div className="text-base font-medium text-[#7E8B9E]">
                We are very happy to see you back!
              </div>
            </div>
          </div>
          <form className="text-left gap-7 space-y-2 mt-8">
            <div>
              <label className="w-10">Email</label>
            </div>
            <input type="email" className="bg-gray-50 w-full" />
            <div className="mt-16">
              <label className="w-10">Password</label>
            </div>
            <input type="password" className="bg-gray-50 w-full" />
            <div>
              <button
                className="bg-[#003399] text-white w-full mt-3.5 rounded-md h-9"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <div className="columns-2 mt-8 mx-1 sm:mx-10 space-x-6 sm:space-x-7">
            <div>
              Download App
              <img className="mt-2" src={playstorelogo} alt="" />
            </div>
            <div>
              Follow us on
              <img className="mt-2" src={linkedinlogo} alt="" />
            </div>
          </div>
          <div className="flex flex-row mt-6 mx-2 sm:mx-10 text-xs">
            <div className="text-[#7E8B9E] font-medium"> Copyright © 2017 </div>

            <div className="text-[#3568FF] font-semibold">
              Logics PowerAMR [P] Ltd.
            </div>
          </div>
          <div className="mt-6 font-medium flex flex-row mx-1 sm:mx-10 text-xs">
            <div className="text-[#7E8B9E]"> Visit Our Entire Portfolio © </div>

            <div className="text-[#3568FF]">www.poweramr.in</div>
          </div>
        </div>
        <div className="col-span-5 p-2 sm:p-10 font-semibold text-xs text-[#003399]">
          <div className="border border-1 border-gray-200 shadow-md rounded-2xl overflow-hidden px-2.5 text-center text-[#003399] bg-white">
            <div className="text-3xl font-bold">Most Advanced Platform</div>
            <div className="text-xl font-semibold">
              for Solar Plant Management & Control
            </div>
          </div>
          <div className="circle">
            {/* <div classname="text1">engagement</div> */}
            <div className="grid sm:grid-cols-2 mt-10 sm:mt-10">
              <div className="border border-1 border-gray-200 shadow-md rounded-2xl overflow-hidden p-5 bg-white ">
                <ul className="list-disc">
                  <li>Cloud & Local Dashboard Solution</li>
                  <li>Comprehensive MobileApp</li>
                  <li>Alerts & notifications thru Email & SMS</li>
                  <li>
                    Progressive web application to support mobile, tab, laptop,
                    view
                  </li>
                  <li>Global Integration with third part platform & API</li>
                </ul>
              </div>
              <div className="border border-1 border-gray-200 shadow-md rounded-2xl overflow-hidden p-5 bg-white mt-3 sm:mt-0 sm:ml-10 ">
                <ul className="list-disc">
                  <li>Solar PV Monitoring</li>
                  <li>DG PV Controller</li>
                  <li>Zero Export</li>
                  <li>Weather Sensors</li>
                  <li>
                    Smart Data Loggers - WiFi, LAN, 4G, wireless for sites with
                    no/limited network
                  </li>
                  <li>Advanced Analytics</li>
                </ul>
              </div>
              {/* </div> */}
              {/* <div className="columns-2"> */}
              <div className="border border-1 border-gray-200 shadow-md rounded-2xl overflow-hidden p-5  mt-3 sm:mt-32 bg-white">
                <ul className="list-disc">
                  <li>
                    Centralized Platform helps eliminate dependency of OEM
                    monitoring tool
                  </li>
                  <li>
                    Local data storage and upload to portal in case of network
                    failure
                  </li>
                  <li>Support Company Branding</li>
                  <li>Web Portal customization</li>
                  <li>Data driven O&M</li>
                </ul>
              </div>
              <div className="border border-1 border-gray-200 shadow-md rounded-2xl overflow-hidden p-5 sm:ml-10 mt-3 sm:mt-32 bg-white">
                <ul className="list-disc">
                  <li>Support Rooftop & ground mounted projects</li>
                  <li>
                    Plug and play with any inverter, energy meter, SMB,
                    switchgear
                  </li>
                  <li>Suitable for any capacity, any no of inverters, DG</li>
                  <li>Scalable Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row border border-1 border-gray-200 shadow-md rounded-2xl overflow-hidden text-sm font-semibold px-1 py-4 m-10 mx:4 sm:mx-24 bg-white font-['Inter']">
        <div className="mr-2 text-[#FF0000]">ms</div>
        <div className="text-[#003399]">
          <marquee behavior="" direction="">
            Industrial Energy Management System Flow Meter & Ground Water
            Monitoring Smart Metering and DLMS Solution Industrial Energy
            Management System Flow Meter & Ground Water Monitoring
          </marquee>
        </div>
      </div>
      <div className="flex flex-row shadow-md overflow-hidden text-sm font-semibold my-10 bg-white font-['Inter']">
        <div className="bg-blue-700 p-2 font-semibold text-white">
          <div className="text-sm">Power AMR in</div>
          <div className="text-3xl">NEWS</div>
        </div>

        <div className="text-center mt-8 ml-2 text-[#003399]">
          <marquee behavior="" direction="">
            are all in one Controller | Logics PowerAMR reaches to 10+ countries
            across the globe | Logics PowerAMR introduces LoRa based
            communication system | Logics PowerAMR reaches to 10+ countries
            across the globe
          </marquee>
        </div>
      </div>
      {/* </img> */}
    </div>
  );
};

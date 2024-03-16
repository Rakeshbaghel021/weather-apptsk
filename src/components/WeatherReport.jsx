import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { BsThermometerSun } from "react-icons/bs";
import { BsDropletHalf } from "react-icons/bs";

function WeatherReport({ weatherData }) {
  const {
    temp_c,
    condition: { text, icon },
    feelslike_c,
    humidity,
  } = weatherData
    ? weatherData?.current
    : JSON.parse(localStorage.getItem("weatherData")).current;

  const { name, country } = weatherData
    ? weatherData?.location
    : JSON.parse(localStorage.getItem("weatherData")).location;

  return (
    <div
      className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 shadow-md"
      style={{ backgroundColor: "#5FA5F9" }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white m-5 rounded">
        <h2 className=" text-2xl font-bold leading-9 tracking-tight text-blue-400 flex items-center gap-6 p-3">
          <Link to={"/"}>
            <span>
              <FaArrowLeft />
            </span>{" "}
          </Link>
          Weather App
        </h2>
        <div className="relative mt-3 ">
          <div className="absolute inset-0 flex -center" aria-hidden="true">
            <div className="w-full border-t border-gray-400" />
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-white px-6 text-gray-400"></span>
          </div>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="border-b-2	">
            <img className=" mx-auto w-36" src={icon} alt="" />
            <div className="text-center">
              <p className="text-3xl font-semibold	pb-2">{temp_c}&deg; C</p>
              <p className="text-sm pb-2">{text}</p>
              <p className="text-sm flex items-center justify-center gap-2 pb-2">
                <span>
                  {" "}
                  <CiLocationOn />
                </span>{" "}
                {name} , {country}
              </p>
            </div>
          </div>
          <div className=" flex items-center overflow-hidden  text-center sm:grid-cols-2 lg:grid-cols-2 ">
            <div className=" border-t border-gray-400  border-r  h-32 w-48 overflow-hidden flex gap-2  items-center justify-center">
              <div>
                <BsThermometerSun size={30} style={{ color: "#5FA5F9" }} />
              </div>
              <div className="flex-col items-center">
                <p className="text-xs	font-bold">{feelslike_c}&deg; C</p>
                <p className="text-xs	font-medium	">Feels like</p>
              </div>
            </div>
            <div className=" border-t border-gray-400 h-32 w-48 overflow-hidden gap-2 flex items-center justify-center">
              <div>
                <BsDropletHalf size={30} style={{ color: "#5FA5F9" }} />
              </div>
              <div className="flex-col items-center">
                <p className="text-xs	font-bold	">{humidity}%</p>
                <p className="text-xs	font-medium	">Humidity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherReport;

import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function Home({ setCity, city, setWeatherData, weatherData }) {
  const navigate = useNavigate();
  const handleCityChange = (e) => {
    e.preventDefault();

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=13722fe4d3a7451db8a84935241603&q=${city}&aqi=no;`;

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        localStorage.setItem("weatherData", JSON.stringify(data));
      })
      .then((data) => {
        navigate("/weather-report");
      })
      .catch((e) => {
        console.log(e);
        swal("Oops!", "Inavild city name!", "error");
      });
  };

  return (
    <div
      className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8  shadow-md"
      style={{ backgroundColor: "#5FA5F9" }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white m-5  rounded">
        <h2 className=" text-2xl font-bold leading-9 tracking-tight text-blue-400 p-3">
          Weather App
        </h2>
        <div className="relative mt-2 ">
          <div className="absolute inset-0 flex -center" aria-hidden="true">
            <div className="w-full border-t border-gray-400" />
          </div>
        </div>
        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm p-6">
          <form className="space-y-4" onSubmit={handleCityChange}>
            <div>
              <div className="">
                <input
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city name"
                  required
                  className="block w-full text-center rounded-md border-1 py-1.5 text-black   ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="relative mt-10 mb-10">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-400" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className=" bg-white px-6 text-gray-400">or</span>
                </div>
              </div>
            </div>
          </form>
          <button className="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Get Device Location
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

import { useState } from "react";
import Home from "./components/Home";
import WeatherReport from "./components/WeatherReport";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [city, setCity] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/weather-report"
            element={<WeatherReport weatherData={weatherData} />}
          />
          <Route
            path="/"
            element={
              <Home
                setCity={setCity}
                city={city}
                setWeatherData={setWeatherData}
                weatherData={weatherData}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

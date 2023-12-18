import "./App.css";
import { icons, images } from "./icons/icons";
import WeatherExpand from "./components/weatherExpand";
import { useState } from "react";

function App() {
  const [showWeatherExpander, setShowWeatherExpander] = useState(false);

  return (
    <>
      <div className="bg" style={{ backgroundImage: `url(${images.bg1})` }}>
        {showWeatherExpander && <WeatherExpand />}
        <nav>
          <div className="weather">
            <span
              id="weatherIcon"
              onClick={() => {
                setShowWeatherExpander(!showWeatherExpander);
              }}
            >
              <img src={icons.cloudy} alt="weather" />
            </span>
            <span id="weatherDetails">
              <div className="top">18</div>
              <div className="top">Mostly Sunny</div>
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;

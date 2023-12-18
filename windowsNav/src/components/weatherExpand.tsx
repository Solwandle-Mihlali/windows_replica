import { useCallback, useEffect, useState } from "react";
import { icons } from "../icons/icons";
import { newsFeed, weatherFeed } from "../interfaces/newsFeedInterface";

function WeatherExpand() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
  });

  const cities = ["Cape Town", "Johannesburg", " Durban"];
  const travelTimes = ["Route Suggestion ", "Travel Summary "];

  const api_key = "6b968bf3d26641f2b19882337e62654c";
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;
  const [newsFeed, setNewsFeed] = useState<Array<newsFeed>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetcher = await fetch(url);
        const data = await fetcher.json();
        setNewsFeed(data.articles); // Assuming the response has an 'articles' property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const weatherAPI = "ffcad951689e806fe536375d8ab78b41  ";
  const [searchedCity, setSearchedCity] = useState("Cape Town");
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${weatherAPI}`;

  const [weatherData, setWeatherData] = useState<Array<weatherFeed>>();
  useEffect(() => {
    const fetchDataTwo = async () => {
      try {
        const fetcher = await fetch(weatherUrl);
        const data = await fetcher.json();
        setWeatherData(data);
        console.log(weatherData); // Assuming the response has an 'articles' property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataTwo();
  }, []);

  const handleOptionClicked = useCallback(
    (v: string) => {
      setSearchedCity(v);
    },
    [setSearchedCity]
  );

  return (
    <>
      <div className="weatherExpander">
        <section className="topSection">
          <span id="weatherExpanderDate">{formattedDate}</span>
          <ul>
            <li>Good Morning</li>
            <li id="weatherSpacer"></li>
            <li>
              <img src={icons.refresh} alt="icon" />
            </li>
            <li>
              <img src={icons.expander} alt="icon" />
            </li>
            <li>
              <img src={icons.user} alt="icon" />
            </li>
            <li>
              <img src={icons.settings} alt="icon" />
            </li>
          </ul>
        </section>
        <main className="weatherExpanderMain">
          <div className="left">
            <div className="cityWeather">
              <div className="top">
                <select name="#" id="cities">
                  {cities?.map((val, index) => {
                    return (
                      <option
                        key={index}
                        value={val}
                        onChange={() => {
                          handleOptionClicked(val);
                        }}
                      >
                        {val}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="middle">
             
              </div>
              <div className="bottom"></div>
            </div>
            <div className="travelTimes">
              <div className="top">
                <select name="#" id="times">
                  {travelTimes?.map((val, index) => {
                    return (
                      <option key={index} value={val}>
                        {val}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="middle"></div>
              <div className="bottom"></div>
            </div>
            <div className="travelTimes">
              <div className="top">
                <select name="#" id="times">
                  {travelTimes?.map((val, index) => {
                    return (
                      <option key={index} value={val}>
                        {val}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="middle"></div>
              <div className="bottom"></div>
            </div>
          </div>
          <div className="right">
            {newsFeed?.map((val) => {
              return (
                <div className="article">
                  <div className="img"></div>
                  <div className="info">
                    <span id="title">{val.author}</span>
                    <span id="desc">{val.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
export default WeatherExpand;

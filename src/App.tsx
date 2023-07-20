import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Error from "./Components/Error/Error";
import SearchCity from "./Components/SearchCity/SearchCity";
import WeatherInfo from "./Components/WeatherInfo/WeatherInfo";
import { weatherIcons } from "./utills/icons";
import { IData, IFetchedData } from "./utills/interface";

function App() {
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<IData>({
    temp: 0,
    humidity: 0,
    name: "",
    speed: 0,
    weather: "",
  });

  const iconUrl = weatherIcons[data.weather] || weatherIcons.Default;

  useEffect(() => {
    fetchStartData();
  }, []);

  async function fetchStartData() {
    try {
      const res = await axios.get<IFetchedData>(
        `https://api.openweathermap.org/data/2.5/weather?q=Ternopil&appid=f12228ed9a9de9ad2a56b260b1e86a77&units=metric`
      );
      setData({
        temp: res.data.main.temp,
        humidity: res.data.main.humidity,
        name: res.data.name,
        speed: res.data.wind.speed,
        weather: res.data.weather[0].main,
      });
    } catch (err) {
      console.log(error);
    }
  }

  const handleSetData = (el: IData) => {
    setData(el);
  };

  const handleSetError = (el: string) => {
    setError(el);
  };

  return (
    <>
      <div className="container">
        <div className="weather">
          <SearchCity
            handleSetData={handleSetData}
            handleSetError={handleSetError}
          />
          <Error error={error} />
          <WeatherInfo data={data} iconUrl={iconUrl} />
        </div>
      </div>
    </>
  );
}

export default App;

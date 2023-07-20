import axios from "axios";
import { FC, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IFetchedData, ISearchCityProps } from "../../utills/interface";
import style from "./SearchCity.module.css";

const SearchCity: FC<ISearchCityProps> = ({
  handleSetData,
  handleSetError,
}) => {
  const [searchCity, setSearchCity] = useState<string>("");

  async function fetchData(searchCity: string) {
    try {
      const res = await axios.get<IFetchedData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=f12228ed9a9de9ad2a56b260b1e86a77&units=metric`
      );
      setSearchCity("");
      handleSetData({
        temp: res.data.main.temp,
        humidity: res.data.main.humidity,
        name: res.data.name,
        speed: res.data.wind.speed,
        weather: res.data.weather[0].main,
      });
      handleSetError("");
    } catch (error: any) {
      if (error.response.status === 404) {
        handleSetError("City doesn't exist");
        setSearchCity("");
      } else {
        handleSetError("");
      }
    }
  }

  return (
    <div className={style.search}>
      <input
        value={searchCity}
        type="text"
        placeholder="Enter city name"
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <button
        onClick={() => {
          fetchData(searchCity);
        }}
      >
        <BiSearch />
      </button>
    </div>
  );
};
export default SearchCity;

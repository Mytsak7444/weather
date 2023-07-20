import { FC } from "react";
import { IWeatherInfoProps } from "../../utills/interface";
import style from "./WeatherInfo.module.css";
const WeatherInfo: FC<IWeatherInfoProps> = ({ data, iconUrl }) => {
  return (
    <div>
      <div className={style.weather_info}>
        <img src={iconUrl} alt="" className={style.icon} />
        <h1 className={style.temp}>{Math.floor(data.temp)}°C</h1>
        <h2 className={style.name}>{data.name}</h2>
        <div className={style.details}>
          <div className={style.col}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219816.png"
              alt=""
              className={style.icon_img}
            />
            <div>
              <p>{data.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className={style.col}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3731/3731279.png"
              alt=""
              className={style.icon_img}
            />
            <div>
              <p>{data.speed}km/h</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;

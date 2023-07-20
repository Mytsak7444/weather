import { weatherIcons } from "./icons";

export interface IData {
  temp: number;
  humidity: number;
  name: string;
  speed: number;
  weather: keyof typeof weatherIcons;
}

export interface IWeatherIcons {
  Clouds: string;
  Clear: string;
  Rain: string;
  Drizzle: string;
  Default: string;
}

export interface IFetchedData {
  main: {
    temp: number;
    humidity: number;
  };
  name: string;
  wind: {
    speed: number;
  };
  weather: [
    {
      main: keyof typeof weatherIcons;
    }
  ];
}

export interface IWeatherInfoProps {
  data: IData;
  iconUrl: string;
}

export interface ISearchCityProps {
  handleSetData: (data: IData) => void;
  handleSetError: (el: string) => void;
}

export interface IErrorProps {
  error: string;
}

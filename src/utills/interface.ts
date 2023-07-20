export interface IData {
  temp: number;
  humidity: number;
  name: string;
  speed: number;
  weather: string;
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
      main: string;
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

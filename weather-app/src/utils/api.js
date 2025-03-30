import axios from "axios";

const API_KEY = "ffc677d7bee75c094b8204f873d70996";
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error("City not found or API error");
  }
};

export const getForecastData = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data.list.slice(0, 5);
  } catch (error) {
    throw new Error("Error fetching forecast data");
  }
};

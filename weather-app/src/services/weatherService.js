import axios from "axios";

const API_KEY = "ffc677d7bee75c094b8204f873d70996";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const getWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// // import { useState } from 'react'
// // import SearchBar from "./components/SearchBar";
// // import WeatherCard from "./components/WeatherCard";
// // import ErrorMessage from "./components/ErrorMessage";
// // import { getWeatherData } from "./services/weatherService";
// // // import './App.css'

// // // function App() {
// // //   const [count, setCount] = useState(0)

// // //   return (
// // //     <>
// // //       <h1 class="text-3xl font-bold underline">
// // //     Hello world!
// // //   </h1>
// // //     </>
// // //   )
// // // }

// // // export default App

// // const App = () => {
// //   const [weatherData, setWeatherData] = useState(null);
// //   const [error, setError] = useState("");

// //   const handleSearch = async (city) => {
// //     setError("");
// //     setWeatherData(null);
// //     try {
// //       const data = await getWeatherData(city);
// //       setWeatherData(data);
// //     } catch (err) {
// //       setError("City not found or API error. Try again!");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
// //       <h1 className="text-4xl font-bold my-4">🌤️ Weather Dashboard</h1>
// //       <SearchBar onSearch={handleSearch} />
// //       {error && <ErrorMessage message={error} />}
// //       {weatherData && <WeatherCard data={weatherData} />}
// //     </div>
// //   );
// // };

// // export default App;
// import React, { useState } from "react";
// import SearchBar from "./components/SearchBar";
// import WeatherCard from "./components/WeatherCard";
// import ForecastCard from "./components/ForecastCard";
// import ThemeToggle from "./components/ThemeToggle";
// import { getWeatherData, getForecastData } from "./utils/api";

// const Home = () => {
//   const [weather, setWeather] = useState(null);
//   const [forecast, setForecast] = useState(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [history, setHistory] = useState([]);

//   const fetchWeather = async (city) => {
//     setLoading(true);
//     setError("");
//     try {
//       const weatherData = await getWeatherData(city);
//       const forecastData = await getForecastData(city);
//       setWeather(weatherData);
//       setForecast(forecastData);
//       updateHistory(city);
//     } catch (error) {
//       setError("City not found. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const updateHistory = (city) => {
//     setHistory((prev) => {
//       const updatedHistory = [city, ...prev.filter((c) => c !== city)];
//       return updatedHistory.slice(0, 5);
//     });
//   };

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold">🌤️ Weather Dashboard</h1>
//         <ThemeToggle />
//       </div>
//       <SearchBar onSearch={fetchWeather} />
//       {loading ? (
//         <p className="text-center mt-4">⏳ Loading...</p>
//       ) : error ? (
//         <p className="text-red-500 text-center">{error}</p>
//       ) : (
//         <>
//           <WeatherCard weather={weather} />
//           <ForecastCard forecast={forecast} />
//         </>
//       )}
//       <div className="mt-4">
//         <h2 className="text-lg font-bold">Recent Searches:</h2>
//         <ul>
//           {history.map((city, index) => (
//             <li
//               key={index}
//               className="cursor-pointer text-blue-500"
//               onClick={() => fetchWeather(city)}
//             >
//               {city}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Home;



import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { FiSearch, FiRefreshCw, FiMoon, FiSun } from 'react-icons/fi'
import WeatherCard from './components/WeatherCard'
import Forecast from './components/ForecastCard'
import Loader from './components/Loader'
import './App.css'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [recentSearches, setRecentSearches] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const API_KEY = 'ffc677d7bee75c094b8204f873d70996'

  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches')
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches))
    }

    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const fetchWeather = async (cityName) => {
    setLoading(true)
    setError(null)
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      )
      
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
      )

      setWeather(weatherResponse.data)
      setForecast(forecastResponse.data)
      
      // Update recent searches
      const updatedSearches = [cityName, ...recentSearches.filter(search => search !== cityName)].slice(0, 5)
      setRecentSearches(updatedSearches)
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches))
    } catch (err) {
      setError('City not found or API error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      fetchWeather(city)
    }
  }

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen relative overflow-hidden ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      <div className="bg-pattern absolute inset-0"></div>
      <div className="weather-pattern"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 p-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <motion.h1 
              className="text-3xl font-bold dark:text-white"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Weather Dashboard
            </motion.h1>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <FiSun className="text-white" /> : <FiMoon />}
            </motion.button>
          </div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
                className="flex-1 p-2 rounded-lg border dark:bg-gray-800 dark:text-white dark:border-gray-600 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <FiSearch />
              </motion.button>
              {weather && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => fetchWeather(weather.name)}
                  className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <FiRefreshCw />
                </motion.button>
              )}
            </div>
          </motion.form>

          {recentSearches.length > 0 && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-lg font-semibold mb-2 dark:text-white">Recent Searches</h2>
              <div className="flex gap-2 flex-wrap">
                {recentSearches.map((search, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => {
                      setCity(search)
                      fetchWeather(search)
                    }}
                    className="px-3 py-1 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {search}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {loading && <Loader />}
          
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-100 text-red-700 rounded-lg mb-8 backdrop-blur-sm"
            >
              {error}
            </motion.div>
          )}

          {weather && <WeatherCard weather={weather} />}
          {forecast && <Forecast forecast={forecast} />}
        </div>
      </motion.div>
    </div>
  )
}

export default App
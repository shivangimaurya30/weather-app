// // const WeatherCard = ({ data }) => {
// //     return (
// //       <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 mx-auto mt-4">
// //         <h2 className="text-2xl font-bold">{data.name}</h2>
// //         <p className="text-lg">🌡️ {data.main.temp} °C</p>
// //         <p>🌥️ {data.weather[0].description}</p>
// //         <p>💧 Humidity: {data.main.humidity}%</p>
// //         <p>🌬️ Wind Speed: {data.wind.speed} km/h</p>
// //         <img
// //           src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
// //           alt="Weather icon"
// //         />
// //       </div>
// //     );
// //   };
  
// //   export default WeatherCard;
  
// import React from "react";

// const WeatherCard = ({ weather }) => {
//   if (!weather) return null;

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center">
//       <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
//       <p className="text-xl">{weather.weather[0].main}</p>
//       <img
//         src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
//         alt="Weather Icon"
//         className="mx-auto my-2"
//       />
//       <p className="text-3xl font-bold">{weather.main.temp}°C</p>
//       <p>Humidity: {weather.main.humidity}%</p>
//       <p>Wind: {weather.wind.speed} km/h</p>
//     </div>
//   );
// };

// export default WeatherCard;


import { motion } from 'framer-motion'

function WeatherCard({ weather }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg p-6 mb-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold dark:text-white">{weather.name}</h2>
          <p className="text-gray-500 dark:text-gray-400">{weather.weather[0].description}</p>
        </div>
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-20 h-20 floating"
        />
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center p-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg"
        >
          <p className="text-gray-500 dark:text-gray-400">Temperature</p>
          <p className="text-2xl font-bold dark:text-white">{Math.round(weather.main.temp)}°C</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center p-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg"
        >
          <p className="text-gray-500 dark:text-gray-400">Humidity</p>
          <p className="text-2xl font-bold dark:text-white">{weather.main.humidity}%</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center p-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg"
        >
          <p className="text-gray-500 dark:text-gray-400">Wind Speed</p>
          <p className="text-2xl font-bold dark:text-white">{Math.round(weather.wind.speed)} km/h</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center p-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg"
        >
          <p className="text-gray-500 dark:text-gray-400">Feels Like</p>
          <p className="text-2xl font-bold dark:text-white">{Math.round(weather.main.feels_like)}°C</p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default WeatherCard
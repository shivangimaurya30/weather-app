// import React from "react";

// const ForecastCard = ({ forecast }) => {
//   if (!forecast) return null;

//   return (
//     <div className="flex gap-4 overflow-x-auto p-4">
//       {forecast.map((item, index) => (
//         <div
//           key={index}
//           className="bg-gray-200 p-3 rounded-lg text-center w-24"
//         >
//           <p>{new Date(item.dt_txt).toLocaleTimeString()}</p>
//           <img
//             src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
//             alt="forecast"
//           />
//           <p>{item.main.temp}°C</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ForecastCard;


import { motion } from 'framer-motion'

function Forecast({ forecast }) {
  // Group forecast data by day
  const dailyForecasts = forecast.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString()
    if (!acc[date] && Object.keys(acc).length < 5) {
      acc[date] = item
    }
    return acc
  }, {})

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg p-6"
    >
      <h2 className="text-xl font-bold mb-4 dark:text-white">5-Day Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {Object.entries(dailyForecasts).map(([date, data], index) => (
          <motion.div
            key={date}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-3 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm rounded-lg"
          >
            <p className="text-gray-500 dark:text-gray-400">
              {new Date(date).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
              alt={data.weather[0].description}
              className="mx-auto floating"
            />
            <p className="font-bold dark:text-white">{Math.round(data.main.temp)}°C</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{data.weather[0].description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Forecast
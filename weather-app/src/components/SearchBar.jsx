// // import { useState } from "react";

// // const SearchBar = ({ onSearch }) => {
// //   const [city, setCity] = useState("");

// //   const handleSearch = () => {
// //     if (city.trim() !== "") {
// //       onSearch(city);
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center space-x-2 p-4">
// //       <input
// //         type="text"
// //         value={city}
// //         onChange={(e) => setCity(e.target.value)}
// //         placeholder="Enter city name"
// //         className="border p-2 rounded-lg w-1/2"
// //       />
// //       <button
// //         onClick={handleSearch}
// //         className="bg-blue-500 text-white px-4 py-2 rounded-lg"
// //       >
// //         Search
// //       </button>
// //     </div>
// //   );
// // };

// // export default SearchBar;
// import React, { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [city, setCity] = useState("");

//   const handleSearch = () => {
//     if (city.trim() !== "") {
//       onSearch(city);
//       setCity("");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center gap-4 p-4">
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city name..."
//         className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
//       />
//       <button
//         onClick={handleSearch}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBar;

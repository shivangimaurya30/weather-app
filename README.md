# 🌤 Weather App



Live Demo: [weatherapp-011.netlify.app](https://weatherapp-011.netlify.app)

## 📌 Overview
A simple and responsive weather application that fetches real-time weather data based on user input. The app provides current temperature, weather conditions, humidity, and wind speed.

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **API:** OpenWeatherMap API
- **Hosting:** Netlify

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/shivangimaurya30/weather-app.git
cd weather-app
```

### 2️⃣ Install Dependencies (if applicable)
```bash
npm install  # Only if there are dependencies
```

### 3️⃣ Set Up API Key
Create a `.env` file in the project root and add your OpenWeatherMap API key:
```plaintext
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

### 4️⃣ Run the App
```bash
npm start  # If using React or Node.js
double-click index.html  # If it's a static project
```

## 🔗 API Integration
- **Service Used:** OpenWeatherMap API ([https://openweathermap.org/api](https://openweathermap.org/api))
- **Endpoints Used:**
  - `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`
- **Rate Limits:** Free tier allows 60 requests per minute.
- **Authentication:** Requires an API key.
- **Response Format:** JSON

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to your branch (`git push origin feature-branch`)
5. Open a Pull Request

## 📜 License
This project is licensed under the MIT License.

---
Developed by [Shivangi Maurya](https://github.com/shivangimaurya30) 🚀


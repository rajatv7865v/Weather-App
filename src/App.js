import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [data, setData] = useState({});
  const [city, setCity] = useState();

  const getWeatherDetails = (cityName) => {
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        // console.log("response",res.data)
        setData(res.data);
      })
      .catch((err) => {
        alert("Could not fetch data");
      });
  };
  const handleCity = () => {
    getWeatherDetails(city);
  };
  useEffect(() => {
    getWeatherDetails("delhi");
  }, []);
  return (
    <div className="col=md-12 container">
      <div className="weatherBg">
        <h1 className="heading">Weather App</h1>
        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="btn-btn-primary" onClick={handleCity}>
            Search
          </button>
        </div>
      </div>
      <div className="col-md-12 text-center mt-5 weather-container">
        <div className="shadow rounded weatherResultBox">
          <img
            className="weatherIcon"
            src="https://static.vecteezy.com/system/resources/previews/001/217/367/original/weather-icon-set-in-cartoon-style-vector.jpg"
            alt=""
          />
          <h5 className="weatherCity">{data?.name}</h5>
          <h5 className="weatherTemp">
            {(data.main?.temp - 273.15).toFixed(2)}℃
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;

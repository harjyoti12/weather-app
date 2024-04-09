import React,{useState} from "react";
import '../../../src/App.css';
import clear from "../Assets/clear.png";
import clouds from "../Assets/clouds.png";
import drizzle from "../Assets/drizzle.png";
import humidity from "../Assets/humidity.png";
import mist from "../Assets/mist.png";
import rain from "../Assets/rain.png";
import searchIcon from "../Assets/search.png";
import snow from "../Assets/snow.png";
import windIcon from "../Assets/wind.png";


const WeatherApp = () => {
  let apiKey = "13c9cdd0dcc79fbf6a96b64e223680c6";

  const [wicon, setWicon] = useState(clouds);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      alert("Please enter a city name");
      return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    const humidityElement = document.getElementsByClassName("humidity-per");
    const windElement = document.getElementsByClassName("wind-rate");
    const tempElement = document.getElementsByClassName("weather-temp");
    const locationElement = document.getElementsByClassName("weather-location");

    humidityElement[0].innerHTML = data.main.humidity + "%";
    windElement[0].innerHTML = Math.floor(data.wind.speed) + "km/h";
    tempElement[0].innerHTML = Math.floor( data.main.temp) + "°C";
    locationElement[0].innerHTML = data.name;
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(clouds);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow);
    } else if (
      data.weather[0].icon === "50d" ||
      data.weather[0].icon === "50n"
    ) {
      setWicon(mist);
    } else {
      setWicon(clear);
    }
  };

  return (
    <div className="container con w-[607px] h-[829px] m-auto mt-[75px] rounded-[12px]">
      <div className="top-bar flex justify-center gap-[14px] pt-[60px]">
        <input
          type="text"
          className="cityInput flex w-[362px] h-[78px] bg-[#ebfffc] outline-none rounded-[40px] pl-[40px] text-[20px] font-[400] text-[#626262]"
          placeholder="Search"
        />
        <div
          onClick={() => {
            search();
          }}
          className="search-icon flex justify-center items-center w-[78px] h-[78px] bg-[#ebfffc] rounded-[40px] cursor-pointer"
        >
          <img className="searI" src={searchIcon} alt="" />
        </div>
      </div>
      <div className="weather-img mt-[29px] flex justify-center ">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp flex justify-center text-white text-[120px] font-[400]">
        27°C
      </div>
      <div className="weather-location flex justify-center text-white text-[60px] font-[400]">
        London
      </div>
      <div className="data-con mt-[50px] text-white flex justify-center ">
        <div className="element m-auto flex items-start gap-[12px]">
          <img className="icon mt-[10px]" src={humidity} alt="" />
          <div className="data text-[34px] font-[400] ">
            <div className="humidity-per">64%</div>
            <div className="text text-[20px] font-[400]">Humidity</div>
          </div>
        </div>

        <div className="element m-auto flex items-start gap-[12px]">
          <img className="icon mt-[10px]" src={windIcon} alt="" />
          <div className="data text-[34px] font-[400] ">
            <div className="wind-rate">18 km/h</div>
            <div className="text text-[20px] font-[400]">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;



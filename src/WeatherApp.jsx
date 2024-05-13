import { useState } from "react";
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState ({
        city : "Delhi",
        feelLike : 36.26,
        humidity : 12,
        temp     : 38.95,
        tempMax : 39.05,
        tempMin : 38.95,
        weather  : "haze",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    };

     return(
        <div style={{textAlign:"center"}}>
            <h3>Weather App By Venkatesh Mundra</h3>
            <SearchBox updateInfo ={updateInfo} ></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
     );
}
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react"

import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    const [error,setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ccdb95c8d3cfbbadb1f2563c68c41286";

    const getWeatherInfo = async () => {
        try{
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            let result = {
                city     : city,
                temp     : jsonResponse.main.temp,
                tempMin  : jsonResponse.main.temp_min,
                tempMax  : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelLike : jsonResponse.main.feels_like,
                weather  : jsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        } catch(err){
            throw err;
        }
        
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async(evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
    
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo); 
            setError(false);
        }
        catch(err){
            setError(true);
        }
    }

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit"> Send </Button>
                {error && <p style={{color:"red"}}>No such place exits!</p>}
            </form>
        </div>
    );
}

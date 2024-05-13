import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


import "./InfoBox.css"

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1565010431002-0c91cad04dd3?q=80&w=2028&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1549752448-38f4d94420f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1703534972662-7a7d5e609516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW4lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox">
         <div className='cardcontainer'>
          <Card sx={{ maxWidth: 345 }}>
         <CardMedia
         sx={{ height: 140 }}
         image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
         title="green iguana"
          />
         <CardContent>
          <Typography gutterBottom variant="h5" component="div"> {info.city} {
             info.humidity > 80 ?  <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>} 
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
           <p> Temperature = {info.temp}&deg;C</p>
           <p> humidity = {info.humidity}</p>
           <p> Min Temperature = {info.tempMin}&deg;C</p>
           <p> Max Temperature = {info.tempMax}&deg;C</p>
           <p> The weather can be descibed as <i>{info.weather}</i> and feels like {info.feelLike}&deg;C</p>
          </Typography>
         </CardContent>

         </Card>
        </div>
        </div>
    );
}
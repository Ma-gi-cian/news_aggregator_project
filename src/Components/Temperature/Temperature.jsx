import { useState, useEffect } from "react";
export default function Temperature(){

    const [temperature, setTemperature] = useState([]);

    var latitude = 0;
    var longitude = 0;

    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        var pos  = {}
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                pos = {
                    latitude : long,
                    longitude : long,
                }
                console.log(pos);
            })
        }

        fetch(`https://`)
    }, [])


    useEffect(() => {

    })
    return(
        <div className = "flex flex-col items-center gap-2">
            <h1>Temperature</h1>
            <button   >Get Location</button>
        </div>
    )
}
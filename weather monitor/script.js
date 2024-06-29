const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "668f6d59213e29e214bf0809d72d7f28";
const city = document.querySelector(".search");
const button = document.querySelector(".btn");

async function getTemperature(city){
    console.log(city);
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status === 404){
        alert("Please Enter a Valid City Name");
        document.querySelector(".information").style.display = "none";
    }
    else if (response.status === 400){
        alert("Please Enter a City Name");
    }
    else{
        var data = await response.json();
        console.log(data);
        console.log(data.weather[0].main);
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
        document.querySelector(".information").style.display = "block";
        if (data.weather[0].main == "Rain"){
            document.querySelector(".weather_image").src = "rain.png";
        }
        if (data.weather[0].main == "Clouds"){
            document.querySelector(".weather_image").src = "clouds.png";
        }
        if (data.weather[0].main == "Drizzle"){
            document.querySelector(".weather_image").src = "drizzle.png";
        }

        if (data.weather[0].main == "Clear"){
            document.querySelector(".weather_image").src = "clear.png";
        }
        if (data.weather[0].main == "Mist"){
            document.querySelector(".weather_image").src = "mist.png";
        }
        if (data.weather[0].main == "Snow"){
            document.querySelector(".weather_image").src = "snow.png";
        }
        
       }
    
    


}
button.addEventListener("click", () =>{
    getTemperature(city.value);
});


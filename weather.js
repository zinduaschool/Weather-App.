const APIkey = "5cc37a35f65bb49646b387a1aacc9425";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const Btn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");
const change = document.getElementById("change");


async function weatherCheck(city) {
    const response = await fetch(APIurl + city + ` &appid=${APIkey}`);

    if (response.status === 404) {
        alert("city not found")
    
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";



        if (data.weather[0].main == "Clouds") {
            icon.src = "pics/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            icon.src = "pics/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            icon.src = "pics/drizzle.png";
        }
        else if (data.weather[0].main == "Rain") {
            icon.src = "pics/rain.png";
        }
        else if (data.weather[0].main == "Mist") {
            icon.src = "pics/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        
    }

}

Btn.addEventListener("click", () => {
    weatherCheck(searchBox.value)
})


change.addEventListener("click", () =>{
    if (data.main.temp == metric) {

        var farenheit = (celcius * (9 / 5) + 32);
        Math.floor(farenheit.value);
        console.log(farenheit.value)
     } else {

            
    }



})


console.log(farenheit);


weatherCheck();
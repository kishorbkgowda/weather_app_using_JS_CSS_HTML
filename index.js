const apiKey = "b112d5044949ae9bdc82be846a328f38";
const input = document.querySelector("input");
const btn = document.querySelector("button");
const weather = document.querySelector(".weather");
const img = document.querySelector(".weather-icon");
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";


async function checkWeather()
{
    const response = await fetch(apiUrl +`&q=${input.value}`+`&appid=${apiKey}`);
    console.log(response.status);
    if(response.status == 404)
    {
      document.querySelector(".error").style.display = "block";
      weather.style.display = "none";
   }
   else
   {
      var data = await response.json();
      console.log(data);
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
       if(data.weather[0].main == "Clouds")
       {
          img.src = "images/clouds.png";
       }
       else if(data.weather[0].main == "Clear")
       {
          img.src = "images/clear.png";
       }
       else if(data.weather[0].main == "Drizzle")
       {
          img.src = "images/drizzle.png";
       }
       else if(data.weather[0].main == "Rain")
       {
          img.src = "images/rain.png";
       }
       else if(data.weather[0].main == "Mist")
       {
          img.src = "images/mist.png";
       }
     
       weather.style.display = "block";
       document.querySelector(".error").style.display = "none";

   }

 
           
     
}

btn.addEventListener("click" , ()=>
{
    checkWeather();
});




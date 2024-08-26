document.addEventListener('DOMContentLoaded', ()=>{
const apiKey ="a9c8d4ac3dcce2308128e7a35b8bb7cb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherImg = document.querySelector('.rainicon');
const searchBox = document.querySelector('.sI');
const searchBtn = document.querySelector('.sB');
const weather = document.querySelector('.weather');

async function weatherUpdate(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);

if(response.status == 404){
        weather.style.display ="none";
        document.querySelector('.invalid').style.display ='block';
        document.querySelector('.noInput').style.display='none';
    }
    
let data = await response.json();
console.log(data);
document.querySelector(`.city`).innerHTML = data.name;
document.querySelector(`.temp`).innerHTML = Math.round(data.main.temp) + " °c ";
document.querySelector(`.humidity`).innerHTML = data.main.humidity +" %";
document.querySelector(`.wind`).innerHTML = data.wind.speed +" km/h";
if (data.weather[0].main === "Clouds")
{
weatherImg.src= 'images/clouds.png';
}
else if (data.weather[0].main === "Clear")
{
weatherImg.src= 'images/clear.png';
}
else if (data.weather[0].main === "Rain")
{
weatherImg.src= 'images/rain.png';
}
else if (data.weather[0].main === "Mist")
{
weatherImg.src= 'images/mist.png';
}
else if (data.weather[0].main === "Drizzle")
{
weatherImg.src= 'images/drizzle.png';
}
else if (data.weather[0].main === "Haze")
{
weatherImg.src= 'images/haze.png';
}
else if (data.weather[0].main === "Drizzle")
{
weatherImg.src= 'images/drizzle.png';
}
}

searchBtn.addEventListener("click", ()=>{
const searchBoxValue = searchBox.value.trim();
 if (searchBoxValue =="")
 {
    document.querySelector('.noInput').style.display='block';
    weather.style.display ="none";
    document.querySelector('.invalid').style.display ='none';
 }
 else{
    
    weather.style.display ="block";
    document.querySelector('.invalid').style.display ='none';
    document.querySelector('.noInput').style.display='none';
 }
 
    weatherUpdate(searchBox.value);
})
} )



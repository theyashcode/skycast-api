

const apikey = "ebe3ac104455468688d120518251009";
const apiUrl = "http://api.weatherapi.com/v1/current.json?key=ebe3ac104455468688d120518251009&q=" ;


const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
    
async function checkweather(city) {
    const response = await fetch(apiUrl + city ) ; // yaha se wo apikey wala jo part youtuber bata raha hai use hatana hai lanaga nhi hai
 
    if (response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
     
 else{
 var data = await response.json();

 console.log(data);
 
 document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°c";
 document.querySelector(".city").innerHTML = data.location.name  ;
 document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
 document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/h";
 
 if(data.current.condition[0] == "Clouds"){
    weathericon.src = "image/clouds.png";}

 else if (data.current.condition[0] == "Clear"){
           weathericon.src = "image/clear.png";}

  else if (data.current.condition[0] =="Rain"){
           weathericon.src = "image/rain.png";}

  else if (data.current.condition[0]== "Drizzle"){
           weathericon.src = "image/drizzle.png";}

    else if (data.current.condition[0] =="Mist"){
           weathericon.src = "image/mist.png";}


   document.querySelector(".weather").style.display = "block" ;
   document.querySelector(".error").style.display = "none"

    }

}
     searchbtn.addEventListener("click" , ()=> {
     checkweather(searchbox.value);

 })


function getWeatherData() {
  
  let city =  document.querySelector(".city").value.trim();

 if(!city){
    city = "Peshawar"
  }
  let apikey = "76a65e6a7b477ee1357da25a3ff96527";
  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  
  if(city) {
    
    // Make a request for a user with a given ID
    axios
      .get(url)
      .then(function (response) {
        // handle success
        let state;
        let main;
        let icon1 = document.querySelector(".icon1");
        let icon_code = response.data.weather[0].icon;
        let iconUrl = `http://openweathermap.org/img/wn/${icon_code}.png`; // Example URL, replace with your API's URL format
        icon1.src = iconUrl;

        // Assuming response.data.weather[0].icon contains the icon code

        response.data.weather.forEach((item) => {
         state = item.description;
          main = item.main;
        });

        
        
        document.querySelector(".c_address").textContent = `in ${city}`;
        document.querySelector(".c_state").textContent = state;
        document.querySelector(".humid").textContent =`${response.data.main.humidity} %`;
        document.querySelector(".temperature").textContent = `${response.data.main.temp} °C`;
        document.querySelector(".wind").textContent =` ${response.data.wind.speed} MPH`;

        let sunrise = new Date(response.data.sys.sunrise * 1000).toLocaleTimeString();
        let sunset = new Date(response.data.sys.sunset * 1000).toLocaleTimeString();
        console.log(sunrise, sunset);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        alert("Error fetching data");
      });
  } else {
    alert("enter city ");
  }
}

getWeatherData();


// code for smartwatch
let date = new Date();
let hour = date.getHours().toString().padStart(2,'0');
let min = date.getMinutes().toString().padStart(2,'0');
let sec = date.getSeconds().toString().padStart(2,'0');
let month = date.getMonth().toString();
let day = date.getDay().toString();
let year = date.getFullYear().toString();


console.log(hour,min,sec,month,day,year);

// document.querySelector(".set").addEventListener('onclick', function getWeatherData() {
//     alert("executing........");
//   });

















  

// function getWeatherData(city_name)
// {
// let myapi = "76a65e6a7b477ee1357da25a3ff96527";

// axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${myapi}&units=metric`)
//  .then(response => {
//   // call function
//   displayWeatherData(response.data);
//  })
//  .catch(error =>{
//   console.log('Error fetching weather data', error);
//   alert("Failed to get weather data, Try again")
//  });
// }

// function displayWeatherData(data){

//   let state;
//   let icon;
//   let main;

//   data.weather.forEach(item => {
//     state =  item.description;
//     icon = item.icon;
//     main = item.main;
//   })

//   //document.querySelector(".address").textContent = city_name;
//   document.querySelector(".state").textContent = state;
//   document.querySelector(".humidity").textContent = data.main.humidity;
//   document.querySelector(".temperature").textContent = data.main.temp;
//   document.querySelector(".wind").textContent = data.main.pressure;

//   let sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
//   let sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
//   console.log(sunrise,sunset);

// }

// // eventlistener for form submission
// document.querySelector(".set").addEventListener('submit', function(event){
//   event.preventDefault();
//   let city_name = document.querySelector(".city").value.trim;
//   if(city_name)
//     {
//       getWeatherData(city_name);
//     }
//     else{
//       alert("Please enter city name")
//     }
// });

//let apikey= "76a65e6a7b477ee1357da25a3ff96527";
//let apikey1 = "8ca718031175f2947c649f441be60efa";
// https://pro.openweathermap.org/data/2.5/forecast/hourly?q=peshawar&appid=${API key}
// `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey1}&units=metric`

// Make a request for a user with a given ID

// document.body.childNodes[1].textContent =`Temprature is : ${response.data.main.temp} °C`;
//  document.body.childNodes[1].textContent =`Sunrise is : ${response.data.sys.sunrise} `;

// response.data.weather.forEach(item => {
//   console.log("description:", item.description);
//   console.log("Icon:", item.icon);
//   console.log("main:", item.main);
// });

// console.log("City",response.data.name);
// console.log("temperature",response.data.main.temp);
// console.log("Humidity",response.data.main.humidity);
// console.log("Pressure",response.data.main.pressure);
// console.log("Temp",response.data.main.temp);
// console.log("Visibility",response.data.visibility);

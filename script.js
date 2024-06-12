//EVENT LISTENER

// const weather = container.querySelector("input");
// weather.addEventListener("change", (event =>{
//     console.log(event);
// }))

// const p = await fetch("url");
//      p.then((value1)=>{
//                      response.json  });
//      p.then((value2)=>{
//                       console.log(value2)    });
''

//the function that first acknowledges the element by id and then checks if there is any change in the input function using the "eventListener".
document.getElementById("weather-location").addEventListener('change', async()=>{

    //getting the input value
    const location_info = document.getElementById("weather-location").value;

    //a function to fetch the api from the server based on the input entered
    const weater_data = await get_weather_data(location_info);

    //function to display the weather to the user based on the weather
     display_data(weater_data);

});

//function for fetching the api
const get_weather_data = async(location_info)=> {
    const api_key='12ba5df5d03448aebaa90657241206';
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=12ba5df5d03448aebaa90657241206&q=${location_info}&aqi=${api_key}`);
    const data = await response.json();
console.log(data);
    return data;

}
 
//function to display the weather based on the data fetched from the get_weather_data function
const display_data= async(data)=>{
    //getting the div where we need to display the weather
    const displaydivElement=document.getElementById("display");
    
    //If no input is givrn then
    if(Object.keys(data).length === 0){
        displaydivElement.innerHTML=`Enter the Location.`;
    }
    else{
        displaydivElement.innerHTML=`
            <h3>${data.location.name}</h3> 
            <p><strong>Region</strong>: ${data.location.region}</p>
            <p><strong>Country</strong>: ${data.location.country}</p>
            <p><strong>Continent</strong>: ${data.location.tz_id}</p>
            <p><strong>Time</strong>: ${data.location.localtime}</p>
            <p><strong>Temperature in Celsius</strong>: ${data.current.temp_c}°C</p>
            <p><strong>Temperature in Fahrenheit</strong>: ${data.current.temp_f}°C</p>
            <p><strong>Weather-Condition</strong>: ${data.current.condition.text}</p>
            <img src=${data.current.condition.icon}>
            
        `;
    }
}

//to display the funtion on the screen

window.onload = async()=>{
    const weater_data = await get_weather_data();
    display_data(weater_data)
}
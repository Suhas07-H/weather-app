const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
     const city=document.getElementById("city").value;
      if(city === "") {
        document.getElementById("result").innerHTML = "Please enter a city name.";
        return;
    }
   
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ac79369c3168f70588dad7eacc42512&units=metric`;
    fetch(url)
      .then((result)=>{
      return  result.json();
   }) 
   .then((data)=>{
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.weather[0].description);
    let div=document.getElementById("result").innerHTML=`
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"><p>City: ${data.name}</p>
<p>Temperature: ${data.main.temp}°C</p>
<p>Description: ${data.weather[0].description}</p>`


   })
   .catch((err) => {
    document.getElementById("result").innerHTML = "City not found. Please try again.";
})

});



 


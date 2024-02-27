let button = document.getElementById("btn");
let input = document.getElementById("search");
let photo = document.getElementById("img1");

button.addEventListener("click" , (e)=>{
   let vvv = input.value;
   demo(vvv);
})

let apikey = "b20559b33ee73fcab649a02f5506f734"
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="



async function demo(jagah)
 {
  try{
let data = await window.fetch(`https://api.openweathermap.org/data/2.5/weather?q=${jagah}&appid=b20559b33ee73fcab649a02f5506f734`)
 let fd =  await data.json();
 console.log(fd);

let {main,wind,name,weather}= fd;
let rrr = document.getElementById("rainy"); 
let lll = document.getElementById("display_loc");
let ttt = document.getElementById("display_temp");
let hhh = document.getElementById("display_humidity");
let www= document.getElementById("display_wind");
 

ttt.innerHTML = `${parseInt(main.temp-273.15)}°C`;
lll.innerHTML = name;
hhh.innerHTML = `${main.humidity}%`;
www.innerHTML =  `${wind.speed}km/hr`;

photo.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

rrr.innerHTML= weather[0].description;


 let ani = document.getElementById("aniket");
 let dub = document.getElementById("dubey");
 let mai = document.getElementById("main");
 let bankai =  document.getElementById("display_loc");
 let shinsui = document.getElementById("display_temp");
let ichigo =  document.getElementById("aside1");
let innou=  document.getElementById("aside2");
let kenpachi = document.getElementById("rainy");



 let winter = document.getElementById("winter");
 let snow = document.getElementById("snow");


 let sss = document.getElementById("search");
 let bbb = document.getElementById("btn");





  if( weather[0].description == "light snow")
  {
         ani.style.position = "fixed";
         dub.style.display = "fixed"; 
         mai.style.background = "transparent" ;
         mai.style.opacity = 1; 
         mai.style.border = "2px solid black"
         sss.style.background = "transparent";
         sss.style.border = "2px solid black";
         bbb.style.background = "transparent";
         bbb.style.border = "2px solid black";
         bbb.style.color = "black";
         bbb.style.fontweight = "20px"
        winter.src = "./img/snow/snow (1).mp4";
        // snow.style.display = " block";  
  }

  

  if( weather[0].description == "clear sky")
  {
         ani.style.position = "fixed";
         dub.style.display = "fixed"; 
         mai.style.background = "transparent" ;
         mai.style.opacity = 1; 
         mai.style.border = "2px solid black"
         sss.style.background = "transparent";
         sss.style.border = "2px solid black";
         bbb.style.background = "transparent";
         bbb.style.border = "2px solid black";
         bbb.style.color = "black";
         bbb.style.fontweight = "20px"
        winter.src = "./img/clear.mp4";
        // clear.style.display = " block";   
  }

  if( weather[0].description == "light rain")
  {
         ani.style.position = "fixed";
         dub.style.display = "fixed"; 
         mai.style.background = "transparent" ;
         mai.style.opacity = 1; 
         mai.style.border = "2px solid gray"
         sss.style.background = "transparent";
         sss.style.border = "2px solid gray";
         bbb.style.background = "transparent";
         bbb.style.border = "2px solid gray";
         bbb.style.color = "white";
         bbb.style.fontweight = "20px"
        winter.src = "./img/rain/rain, light rain.mp4";
        winter.style.opacity = 1;
        kenpachi.style.color = "white";
        innou.style.color = "white";
        ichigo.style.color = "white";
        bankai.style.color = "white";
        shinsui.style.color = "white";
        sss.style.color = "white";

        // rain.style.display = " block";    
  }

  if( weather[0].description == "overcast clouds")
  {
         ani.style.position = "fixed";
         dub.style.display = "fixed"; 
         mai.style.background = "transparent" ;
         mai.style.opacity = 1; 
         mai.style.border = "2px solid black"
         sss.style.background = "transparent";
         sss.style.border = "2px solid black";
         bbb.style.background = "transparent";
         bbb.style.border = "2px solid black";
         bbb.style.color = "black";
         bbb.style.fontweight = "20px"
        winter.src = "./img/cloud/overcast, broken scattered , fewcloud.mp4";
        // rain.style.display = " block";    
  }
  if( weather[0].description == "broken clouds")
  {
         ani.style.position = "fixed";
         dub.style.display = "fixed"; 
         mai.style.background = "transparent" ;
         mai.style.opacity = 1; 
         mai.style.border = "2px solid black"
         sss.style.background = "transparent";
         sss.style.border = "2px solid black";
         bbb.style.background = "transparent";
         bbb.style.border = "2px solid black";
         bbb.style.color = "black";
         bbb.style.fontweight = "20px"
        winter.src = "./img/overcast, broken scattered , fewcloud.mp4"; 
        // rain.style.display = " block";    
  }
  if( weather[0].description == "scattered clouds")
  {
         ani.style.position = "fixed";
         dub.style.display = "fixed"; 
         mai.style.background = "transparent" ;
         mai.style.opacity = 1; 
         mai.style.border = "2px solid black"
         sss.style.background = "transparent";
         sss.style.border = "2px solid black";
         bbb.style.background = "transparent";
         bbb.style.border = "2px solid black";
         bbb.style.color = "black";
         bbb.style.fontweight = "20px"
        winter.src = "./img/cloud/overcast, broken scattered , fewcloud.mp4"; 
        // rain.style.display = " block";    
  }
  if( weather[0].description == "broken clouds")
  {
         ani.style.position = "fixed";
         dub.style.display = "fixed"; 
         mai.style.background = "transparent" ;
         mai.style.opacity = 1; 
         mai.style.border = "2px solid black"
         sss.style.background = "transparent";
         sss.style.border = "2px solid black";
         bbb.style.background = "transparent";
         bbb.style.border = "2px solid black";
         bbb.style.color = "black";
         bbb.style.fontweight = "20px"
        winter.src = "./img/cloud/overcast, broken scattered , fewcloud.mp4";
        // rain.style.display = " block";    
  }

  if( weather[0].description == "smoke")
  {
         ani.style.position = "fixed";
         dub.style.display = "fixed"; 
         mai.style.background = "transparent" ;
         mai.style.opacity = 1; 
         mai.style.border = "2px solid black"
         sss.style.background = "transparent";
         sss.style.border = "2px solid black";
         bbb.style.background = "transparent";
         bbb.style.border = "2px solid black";
         bbb.style.color = "black";
         bbb.style.fontweight = "20px"
        winter.src = "./img/smoke/smoke.mp4";
        // rain.style.display = " block";    
  }


  }
  catch(e)
  {
    console.log("e");
  }
}

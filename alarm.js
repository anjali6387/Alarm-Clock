const current_time = document.querySelector("h1"),
content = document.querySelector(".content"),
setAlarmButton =document.querySelector("button"),
imageElement = document.querySelector("img"),
selectMenu = document.querySelectorAll("select");

let alarmTime,isAlarmSet,
ringtone = new Audio ("ringtone.mp3");


for(let i = 12; i > 0 ; i--){
    i = i < 10 ? "0" + i : i;
 
   let option =`<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for(let i = 59; i > 0 ; i--){
    i = i < 10 ? "0" + i : i;
 
   let option =`<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 59; i > 0 ; i--){
    i = i < 10 ? "0" + i : i;
 
   let option =`<option value="${i}">${i}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

for(let i = 2; i > 0 ; i--){
let ampm =( i == 1) ? "AM" : "PM";
 
   let option =`<option value="${ampm}">${ampm}</option>`;
    selectMenu[3].firstElementChild.insertAdjacentHTML("afterend", option);
}


setInterval(() => {
let date = new Date();
 h = date.getHours(),
 m = date.getMinutes(),
 s = date.getSeconds(),
ampm = "AM";

if(h>12){
h = h -12;
ampm = "PM";
}

h =  h == 0 ? h=12:h;

h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

current_time.innerText = `${h}:${m}:${s} ${ampm}`; 
if(alarmTime === `${h}:${m}:${s} ${ampm}`){
    ringtone.play();
    ringtone.loop = true;
    imageElement.classList.add("animateimg");
}

});



function setAlarm(){

if(isAlarmSet){
    alarmTime = "";
    ringtone.pause();
    content.classList.remove("disable");
    imageElement.classList.remove("animateimg");
    setAlarmButton.innerText="set alarm";
    return isAlarmSet = false;
}
    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value} ${selectMenu[3].value}`;
    if(time.includes("Hour") || time.includes("Minute") || time.includes("Seconds") || time.includes("AM/PM")){
       return  alert("set a valid alarm!");
    }
 alarmTime = time;
 isAlarmSet = true;
content.classList.add("disable");

setAlarmButton.innerText = "clear alarm";

    }

    setAlarmButton.addEventListener("click" , setAlarm);

console.log("W3resource");
// console.log("1. Write a JavaScript program to display the current day and time in the following format.");

let date=new Date();
console.log("Todays date",date);
//For day
let day= date.getDay();
let daylist=["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currday=daylist[day];
console.log(`Current day:${day}, ${currday}`);

//For Time

let hour=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();

let pa=(hour>=12)?"PM":"AM";

hour=(hour>=12)?(hour-12):hour;

if(hour===0 && pa==="PM"){
    if(min===0 && sec===0){
        hour=12;
        pa="Noon";
    }else{
        hour=12;
        pa="PM";
    }
}
if(hour===0 && pa==="AM"){
    if(min===0 && sec===0){
        hour=12;
        pa="MidNight";
    }else{
        hour=12;
        pa="AM";
    }
}
console.log(`Current Time: ${hour}${pa}:${min}:${sec}`);
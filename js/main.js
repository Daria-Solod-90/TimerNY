const year=document.querySelector('#year');

const days=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minutes=document.querySelector('#minutes');
const seconds=document.querySelector('#seconds');

const currentYear=new Date().getFullYear();

const nextYear=new Date(`January 01 ${currentYear+1} 00:00:00`);
year.innerHTML=currentYear+1;

function updateCounter(){
    const currentTime=new Date();

    const diff=nextYear-currentTime;
    
    const daysLeft=Math.floor(diff/1000/60/60/24);// Перевод в дни
    
    const hoursLeft=Math.floor(diff/1000/60/60)%24;//Перевод в часы
    
    const minutesLeft=Math.floor(diff/1000/60)%60;//Перевод в минуты
    
    const secondsLeft=Math.floor(diff/1000)%60;//Перевод в секунды
    
    
    days.innerHTML=daysLeft;
    hours.innerHTML=hoursLeft <10 ? '0'+ hoursLeft : hoursLeft;
    minutes.innerHTML=minutesLeft <10 ? '0'+ minutesLeft : minutesLeft;
    seconds.innerHTML=secondsLeft <10 ? '0'+ secondsLeft : secondsLeft;
}

updateCounter();
setInterval(updateCounter,1000);



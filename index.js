let hourhand=document.querySelector('#hourhand');
let minhand=document.querySelector('#minhand');
let sechand=document.querySelector('#sechand');


setInterval(() => {
    let date=new Date();

    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    let hr=hour*30 + min/2;
    let mr=min*6;
    let sr=sec*6;

    hourhand.style.transform=`rotate(${hr}deg)`;
    minhand.style.transform=`rotate(${mr}deg)`;
    sechand.style.transform=`rotate(${sr}deg)`;

}, 1000);
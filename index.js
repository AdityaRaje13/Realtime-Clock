setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    hrotate = 30*h + m/2;
    mrotate = 6*m;
    srotate = 6*s;

    hour.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${srotate}deg)`;
    
    
},1000);
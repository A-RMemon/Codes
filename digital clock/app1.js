function updateclock (){
    let divs = document.querySelectorAll(".box");
    const nowclock = new Date() 
    let hours = nowclock.getHours();
    let min = nowclock.getMinutes();
    let sec = nowclock.getSeconds();
    // hours = hours < 10 ? '0' + hours : hours;
    // min = min < 10 ? '0' + min : min;
    // sec = sec < 10 ? '0' + sec : sec;
    divs[0].innerHTML=hours;
    divs[1].innerHTML=min;
    divs[2].innerHTML=sec;
    };
    updateclock()

    setInterval(updateclock, 1000);

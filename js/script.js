let deadline = '2022-06-07';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date())

    if (t < 0){
        t = 0
    }
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours1 = Math.floor((t/(1000*60*60))),
    hours = Math.floor(t/(1000*60*60) % 24);
    // days = Math.floor(t/(1000*60*60*24));

            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes  = "0" + minutes;
            if (seconds < 10) seconds  = "0" + seconds;
            // if (days < 10) days = "0" + days;

    return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds        
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        // days = document.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            // days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
            
        }
}

setClock('timer', deadline);



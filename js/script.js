window.addEventListener('DOMContentLoaded', function() {


    //timer

    let deadline = '2020-04-15';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)%24)),
        days = Math.floor((t/(1000*60*60*24)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes': minutes,
            'seconds': seconds,
            'days': days
        };
    }
    //функция выставляет и запускает часы
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            seconds = timer.querySelector('.seconds'),
            minutes = timer.querySelector('.minutes'),
            hours = timer.querySelector('.hours'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);
            
    

        //функция обновляет каждую секунду
        function updateClock() {
            let t = getTimeRemaining(endtime);
            
            //ведущие нули
            function addZero(num) {
                if (num <= 9) {
                    return "0" + num;
                } else return num;
            };
            
            
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
            days.textContent = addZero(t.days);

         //чтобы не уходило в минус           
        if(t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";
            days.textContent = "00";
        }
    }
}
    setClock('timer', deadline);
});

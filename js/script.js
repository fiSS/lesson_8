window.addEventListener('DOMContentLoaded', function() {              //load говорит js, что сейчас страница будет загружаться и только после того 
                                                                    //как загрузиться полностью всё до последней картинки, js скрипт будет выполняться 
     'use strict';                                                   //DomContentLoaded это событие срабатывает, когда полностью загрузилась DOM структура документа
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'),
        photosFromTrips = document.getElementsByClassName('slider-item fade'),
        prevFoto = document.getElementsByClassName('arrow-left'),
        nextFoto = document.getElementsByClassName('arrow-right');
        //console.log(photosFromTrips[1]);
        console.log(prevFoto);
        

                
    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show'); //удаляем класс show
            tabContent[i].classList.add('hide'); //скроем все елементы tabContent со страницы
        }
    }

hideTabContent("1");                      //скрыват все tabContent кроме первого

function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')){
        tabContent[b].classList.remove('hide'); //удаляем(скрываем) класс show
        tabContent[b].classList.add('show');
    }
}

info.addEventListener('click', function(event){
    let target = event.target;
    if(target && target.classList.contains('info-header-tab'))  {
        for(let i = 0; i < tab.length; i++) {   //цикл будет работать до момента когда закончатся tab-ы
            if(target == tab[i]){
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        } 
    }
});
//timer

function getTimeRemaining(endtime) {                                 //функция считает между датой(сейчас) и deadline
    let t = Date.parse(endtime) - Date.parse(new Date())
    if (t < 0){
        t = 0 
    }                                                               //сюда помещаем разницу между датами. parse превращает
      let seconds = Math.floor((t/1000) % 60),                      //любую дату в колличество милисекунд                                                        
      minutes = Math.floor((t/1000/60) % 60),                       //делим на 1000 чтобы получить к-во целых секунд, затем на 60-целых минут
      hours = Math.floor((t/(1000*60*60)));                         //количество целых часов
        // hours = math.floor((t/1000/60/60) % 24),
        // days = math.floor((t/(1000*60*60*24)))
               
        
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };

}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        
             hours = timer.querySelector('.hours'),
             minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

       
        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = ('0' + t.hours).slice(-2);
            minutes.textContent = ('0' + t.minutes).slice(-2);
            seconds.textContent = ('0'+ t.seconds).slice(-2);
           
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

}

setClock('timer', deadline);
}); 

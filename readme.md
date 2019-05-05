конечная дата работы таймера let deadline = '2022-06-07';

если таймер уходит в минус, отсановка таймера.
if (t < 0){
        t = 0
    }

добавил ведущие нули.
if (hours(minutes, seconds) < 10) hours = "0" + hours(minutes, seconds); 

setClock запуск таймера.
updateClock обновление.

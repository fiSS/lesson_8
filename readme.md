# Таймер обратного отсёта

## Usage

1. let deadline установка конечной даты до которой таймер будет работать.
2. function getTimeRemaining считает между датой сейчас и deadline.
3. function setClock функция выставляет и запускает часы.
4. function updateClock функция обновляет каждую секунду, function addZero добавляет ведущие нули, при помощи
свойства textContent выводим (секунды, часы, минуты, дни).
5. Чтобы часы не уходили в минус воспользоваться условным опреатором if(t.total <= 0)       
        
##### Смысл в том, что в функцию getTimeRemaining приходит начальное значение с датой, оно парсится, приводится в правильный и нужный нам виду, а в конце возвращается безымянный объект. И этот объект записывается в переменную t, которая уже и используется для записи на страницу.

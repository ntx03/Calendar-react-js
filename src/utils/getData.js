const d = new Date(); // определяем текущую дату
const year = d.getFullYear(); // вычисляем текущий год
const monthAuto = d.getUTCMonth(); // вычисляем текущий месяц
const today = d.getDate(); // вычисляем текущее число
const oneHour = 1000 * 60 * 60; // вычисляем количество миллисекунд в 1 часе
const oneDay = oneHour * 24; // вычисляем количество миллисекунд в одних сутках

function getFitstDay(firstDay) {
    if (firstDay === 0) {
        return 7;
    }
    return firstDay;
}

function dayWeek(id) {
    if (id > 7) {
        return '';
    } else if (id === 1) {
        return 'Понедельник,';
    } else if (id === 2) {
        return 'Вторник,';
    } else if (id === 3) {
        return 'Среда,';
    } else if (id === 4) {
        return 'Четверг,';
    } else if (id === 5) {
        return 'Пятница,';
    } else if (id === 6) {
        return 'Суббота,';
    } else if (id === 7) {
        return 'Воскресенье,';
    }
}

export { d as dateNow, year as yearNow, monthAuto as monthNow, today, oneHour, oneDay, getFitstDay, dayWeek };

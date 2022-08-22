export const data = [
    {
        title: 'Встреча',
        day: 23,
        month: 'мая',
    },
    {
        title: 'Встреча',
        day: 23,
        month: 'мая',
    },
    {
        title: 'Встреча',
        day: 23,
        month: 'мая',
    },
    {
        title: 'Встреча',
        day: 23,
        month: 'мая',
    },
    {
        title: 'Встреча',
        day: 23,
        month: 'мая',
    },
    {
        title: 'Встреча',
        day: 23,
        month: 'мая',
    },
]

export const translateMonth = (month) => {
    if (month === 0) {
        return 'Январь';
    } else if (month === 1) {
        return 'Февраль';
    } else if (month === 2) {
        return 'Март';
    } else if (month === 3) {
        return 'Апрель';
    } else if (month === 4) {
        return 'Май';
    } else if (month === 5) {
        return 'Июнь';
    } else if (month === 6) {
        return 'Июль';
    } else if (month === 7) {
        return 'Август';
    } else if (month === 8) {
        return 'Сентябрь';
    } else if (month === 9) {
        return 'Октябрь';
    } else if (month === 10) {
        return 'Ноябрь';
    } else if (month === 11) {
        return 'Декабрь';
    } else return 'error month';
}

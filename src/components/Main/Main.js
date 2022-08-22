import React from "react";
import './Main.scss';
import back from '../../img/arrow_back.svg';
import forward from '../../img/arrow_foward.svg';
import CardDay from "./CardDay/CardDay";
import { translateMonth } from '../../utils/constants';
import { yearNow, monthNow, oneHour, oneDay, getFitstDay } from '../../utils/getData';
function Main() {
    // состояние года 
    const [counterYear, setCounterYear] = React.useState(yearNow);

    // состояние месяца
    const [counterMonth, setCounterMonth] = React.useState(monthNow);


    // управляем значениями месяца
    function giveCorrectMonth(monthCounter) {
        if (monthCounter > 11) {
            setCounterYear(counterYear + 1);
            setCounterMonth(0);
        } else if (monthCounter < 0) {
            setCounterYear(counterYear - 1);
            setCounterMonth(11);
        }
    } giveCorrectMonth(counterMonth);


    const month = new Date(counterYear, counterMonth, 1); // текущий месяц в колендаре
    const first_day = new Date(counterYear, counterMonth, 1); // устанавливаем дату первого числа текущего месяца
    const first_day_last = new Date(counterYear, counterMonth - 1, 1);
    const first_wday = first_day.getDay(); // из нее вычисляем день недели первого числа текущего месяца
    const nextMonth = new Date(counterYear, counterMonth + 1, 1); // устанавливаем дату первого числа следующего месяца 
    const last_date_last_month = Math.ceil((month.getTime() - first_day_last.getTime() - oneHour) / oneDay);// вычисляем крайний день предыдущего месяца
    const last_date = Math.ceil((nextMonth.getTime() - first_day.getTime() - oneHour) / oneDay);// вычисляем крайний день текущего месяца
    const data = last_date_last_month - getFitstDay(first_wday) + 2;

    // массив с датами календаря;
    const arr = [];

    // генерируем даты предыдущего месяца
    for (let i = data; i <= last_date_last_month; i++) {
        arr.push({
            day: i,
            title: '',
            text: '',
            month: false,
        });
    }

    // отмечаем день который относится к текущему месяцу
    function dayThisMonth(day) {
        if (day > last_date) {
            return false;
        }
        return true;
    }

    // генерируем даты текущего месяца и следующего
    for (let i = 1; i <= 43 - getFitstDay(first_wday); i++) {
        arr.push({
            day: new Date(counterYear, counterMonth, i).getDate(),
            title: '',
            text: '',
            dayThisMonth: dayThisMonth(i),
        });
    }

    return (
        <section className="main">
            <div className="main__navigation">
                <button className="main__navigation-button"><img className='main__navigation-button-icon' src={back} alt="стрелка назад" onClick={() => { setCounterMonth(counterMonth - 1) }} /></button>
                <p className="main__navigation-text">{translateMonth(counterMonth)} {counterYear}</p>
                <button className="main__navigation-button"><img className='main__navigation-button-icon' src={forward} alt="стрелка вперед" onClick={() => { setCounterMonth(counterMonth + 1) }} /></button>
                <button className="main__navigation-button-now" onClick={() => {
                    setCounterYear(yearNow);
                    setCounterMonth(monthNow)
                }}>Сегодня</button>
            </div>
            <div className="main__calengar-container">
                {arr.map((item, index) => <CardDay title={item.title} day={item.day} text={item.text} key={index} id={index + 1} dayThisMonth={item.dayThisMonth} month={counterMonth} />)}
            </div>
        </section>
    );
}

export default Main;
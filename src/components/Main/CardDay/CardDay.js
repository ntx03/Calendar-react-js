import React, { useEffect, useState } from "react";
import './CardDay.scss';
// функция проверяет id и расставояет нужные дни недели 
import { dayWeek, monthNow, today } from "../../../utils/getData";

function CardDay({ title, id, day, text, dayThisMonth, month }) {
    // пустая ячейка или нет
    const [state, setState] = useState(false);
    // число текущего месяца или нет
    const [daythisMonthState, setDaythisMonthState] = useState(false);
    // сегодняшний день или нет
    const [thisDay, setThisDay] = useState(false);

    useEffect(() => {
        // проверяем относится число к текущему месяцу
        if (dayThisMonth === true) {
            setDaythisMonthState(true);
        } else setDaythisMonthState(false);
        // проверяем на то, пустая или нет ячейка календаря
        if (title.length <= 0) {
            setState(false);
        } else { setState(true); }
        if (daythisMonthState === true && today === day && month === monthNow) {
            setThisDay(true);
        } else setThisDay(false);
    })

    return (
        <div className={state ? "cardDay cardDay_true" : "cardDay"}>
            <p className={daythisMonthState ? (thisDay ? "cardDay__day cardDay__day-this-month cardDay__this-day" : "cardDay__day cardDay__day-this-month") : "cardDay__day"}>{dayWeek(id)} {day}</p>
            <h2 className="cardDay__title">{title}</h2>
            <p className="cardDay__participants">{text}</p>
        </div>
    );
}

export default CardDay;
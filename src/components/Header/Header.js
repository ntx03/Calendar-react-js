import React from "react";
import './Header.scss';
import search from '../../img/icon.svg';
import decorate from '../../img/decorate.svg';
import close from '../../img/icon_close_popup.svg';
import SearchItem from "./SearchItem/SearchItem";
import { data } from '../../utils/constants';


function Header() {

    const [popup, setPopup] = React.useState();
    function onChangePopup(e) {
        setPopup(e.target.value);
    }

    return (
        <section className="header">
            <div className="header__container">
                <div className="header__button-container">
                    <button className="header__button">Добавить</button>
                    <button className="header__button" onClick={() => { window.location.reload() }}>Обновить</button>
                </div>
                <div className="header__search-container">
                    <img className='header__search-icon' src={search} alt="иконка лупы" />
                    <input type='text' className='header__search' placeholder='placeholder' />
                </div>
                <div className="header__popup-add-container">
                    <img className='header__popup-add-decorate' src={decorate} alt="белый треуголтник" />
                    <div className="header__popup-add">
                        <button className="header__popup-button-close"><img className='header__popup-button-close-icon' src={close} alt="иконка-крестик" /></button>
                        <input type='text' className='header__popup-add-input' placeholder="25 ноября, Кутеж, Серж" required value={popup || ''} onChange={onChangePopup} />
                        <button className="header__popup-button-create">Создать</button>
                    </div>
                </div>
                <div className="header__popup-search-container">
                    <img className='header__popup-search-decorate' src={decorate} alt="белый треуголтник" />
                    <div className="header__popup-search">
                        <ul className="header__popup-search-list">
                            <>
                                {data.map((item, index) => <SearchItem title={item.title} day={item.day} month={item.month} key={index} />)}
                            </>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Header;


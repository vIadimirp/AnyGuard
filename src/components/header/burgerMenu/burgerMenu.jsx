import { burgerIcon } from '../../../assets';
import { useState } from 'react';

import "./burgerMenu.css";


export default function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false);


    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="burger-menu">
            <img className="burger-icon" onClick={handleMenuClick} src={burgerIcon} alt="" />
            <div className={`menu-items ${isOpen ? "active" : ""}`}>
                <button className='closeButton' onClick={handleMenuClick}>✖</button>
                <a href="#">Главная</a>
                <a href="#">Меню</a>
                <a href="#">О нас</a>
                <a href="#">Контакты</a>
            </div>
        </div>
    );

}

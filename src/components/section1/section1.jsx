import {joystickImage} from "../../assets";

import "./section1.css";


export default function Section1() {

    // Added banner
    return (
        <div className="section1">
            <div className="text-block">
                <div className="choice">⭐ Выбор разработчиков</div>
                <div className="info">
                    <div className="title">Мощный игровой<br />хостинг</div>
                    <div className="text">Создайте свой сервер SA:MP, CR:MP, MTA, MineCraft,<br />
                                          CS:GO с максимальной DDoS защитой. Установите любой <br />
                                          мод из автоустановки и запустите сервер</div>
                </div>
                <a href="" className="create-btn">Создать сервер</a>
            </div>
            <div className="image-block">
                <img src={joystickImage} alt="" />
            </div>
        </div>
    );

}

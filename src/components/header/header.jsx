import headerLogo from "../../assets/headerLogo.svg";
import vkLogo from "../../assets/vk.svg";
import BurgerMenu from "./burgerMenu/burgerMenu";

import "./header.css";


export default function Header() {

    // Added header
    return (
        <div className="header">
            <div className="header-left">
                <img src={headerLogo} alt="" />
            </div>
            <div className="header-right">
                <a href="">Тарифы</a>
                <a href="">Проверить пинг</a>
                <a href="">Контакты</a>
                <a href=""><img src={vkLogo} alt="" /></a>
                <a href="" className="control-panel-btn">Панель управления</a>
                <BurgerMenu />
            </div>
        </div>
    );

}

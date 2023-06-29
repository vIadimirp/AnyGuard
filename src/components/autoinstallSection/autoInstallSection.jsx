import { arizonaRp } from "../../assets/index"

import "./autoInstallSection.css";


export default function AutoInstallSection() {

    return (
        <div className="autoInstallSection">
            <div className="heading">
                <div className="title">Автоустановка</div>
                <div className="text">Установка популярных модов <span className="bold">в 2 клика</span></div>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={arizonaRp} className="image"></img>
                    <div className="text">
                        <div className="heading">Arizona RP</div>
                        Создайте сервер с модом аризоны,<br /> его установка - бесплатна
                    </div>
                    <a href="" className="create-btn">Создать сервер</a>
                </div>
                <div className="card">
                    <img src={arizonaRp} className="image"></img>
                    <div className="text">
                        <div className="heading">Arizona RP</div>
                        Создайте сервер с модом аризоны,<br /> его установка - бесплатна
                    </div>
                    <a href="" className="create-btn">Создать сервер</a>
                </div>
                <div className="card">
                    <img src={arizonaRp} className="image"></img>
                    <div className="text">
                        <div className="heading">Arizona RP</div>
                        Создайте сервер с модом аризоны,<br /> его установка - бесплатна
                    </div>
                    <a href="" className="create-btn">Создать сервер</a>
                </div>
            </div>
        </div>
    )

}

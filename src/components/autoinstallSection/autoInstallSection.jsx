import { arizonaRp } from "../../assets/index"
import AutoInstallSectionCard from "./autoInstallSectionCard/autoInstallSectionCard";

import "./autoInstallSection.css";


export default function AutoInstallSection() {

    let data = [
        {
            id: 1,
            image: arizonaRp,
            title: "Arizona RP",
            description: "Создайте сервер с модом аризоны, его установка - бесплатна"
        }, {
            id: 2,
            image: arizonaRp,
            title: "Arizona RP",
            description: "Создайте сервер с модом аризоны, его установка - бесплатна"
        }, {
            id: 3,
            image: arizonaRp,
            title: "Arizona RP",
            description: "Создайте сервер с модом аризоны, его установка - бесплатна"
        }
    ];

    
    return (
        <div className="autoInstallSection">
            <div className="heading">
                <div className="title">Автоустановка</div>
                <div className="text">Установка популярных модов <span className="bold">в 2 клика</span></div>
            </div>
            <div className="cards">
                {
                    data.map(item => <AutoInstallSectionCard key={item.id} {...item} />)
                }
            </div>
        </div>
    )

}
